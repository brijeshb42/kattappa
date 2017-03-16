import React from 'react';
import ReactDOM from 'react-dom';
import Scribe from 'scribe-editor';
import pluginCurlyQuotes from 'scribe-plugin-curly-quotes';
import pluginSanitizer from 'scribe-plugin-sanitizer';
import pluginNewlineToHTML from 'scribe-plugin-formatter-plain-text-convert-new-lines-to-html';
import pluginSemanticEl from 'scribe-plugin-formatter-html-ensure-semantic-elements';
import pluginSmartLists from 'scribe-plugin-smart-lists';
import pluginHeading from 'scribe-plugin-heading-command';

import {
  baseOptions,
  toolbarButtons,
  linkCommand,
  isEditorEmpty,
  keyboardPlugin,
} from './scribe-options';
import Keys from '../utils/keys';


export default class ScribeEditor extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showToolbar: false,
      showLinkInput: false,
      placeholder: true,
    };

    this.scribe = null;
    this.dom = null;
    this._updated = false;
    this.tempRange = null;

    this.scrollY = -1;

    this.placeCaretAtEnd = this.placeCaretAtEnd.bind(this);
    this.captureReturn = this.captureReturn.bind(this);
    this.handleCommand = this.handleCommand.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this._onSelect = this._onSelect.bind(this);
    this.handleLink = this.handleLink.bind(this);
    this.handleLinkShortcut = this.handleLinkShortcut.bind(this);

    this.onBlur = () => {
      if (this.state.showLinkInput) {
        return;
      }
      this.setState({ showToolbar: false, showLinkInput: false })
    };
  }

  componentDidMount() {
    this.dom = ReactDOM.findDOMNode(this.refs.scribeeditor);
    this.scribe = new Scribe(this.dom);
    if (!this.props.inline) {
      this.scribe.use(pluginSmartLists());
    }
    this.scribe.use(linkCommand());
    this.scribe.use(pluginNewlineToHTML());
    this.scribe.use(pluginCurlyQuotes());
    this.scribe.use(pluginSanitizer(this.props.options));
    this.scribe.use(pluginSemanticEl());
    this.scribe.use(pluginHeading(3));
    this.scribe.use(keyboardPlugin());
    // this.scribe.use(placeholderPlugin('Write your story...', ReactDOM.findDOMNode(this)));

    if(this.props.inline || this.props.enterCapture) {
      this.scribe.el.addEventListener('keydown', this.captureReturn);
    }
    this.scribe.on('scribe:content-changed', () => {
      if (isEditorEmpty(this.scribe)) {
        if (!this.state.placeholder) {
          this.setState({
            placeholder: true,
          });
        }
      } else {
        if (this.state.placeholder) {
          this.setState({
            placeholder: false,
          });
        }                
      }
      this.props.onContentChanged(this.scribe.getHTML());
    });

    this.scribe.setContent(this.props.content);

    if (this.props.onFocus) {
      this.scribe.el.addEventListener('focus', this.props.onFocus);
    }
    this.scribe.el.addEventListener('blur', this.onBlur);

    if (this.props.content.length < 12) {
      this.placeCaretAtEnd();
    }
    this.scribe.el.addEventListener('keydown', this.handleLinkShortcut);
  }

  componentWillUnmount() {
    if(this.props.inline || this.props.enterCapture) {
      this.scribe.el.removeEventListener('keydown', this.captureReturn);
    }
    this.scribe.el.removeEventListener('keydown', this.handleLinkShortcut);
    this.scribe.el.removeEventListener('focus', this.props.onFocus);
    this.scribe.el.removeEventListener('blur', this.onBlur);
    this.scribe.destroy();
    this.dom = null;
    this.scribe = null;
    this.tempRange = null;
  }

  componentWillReceiveProps(nextProps) {
    if (this._updated) this._updated = false;
  }

  shouldComponentUpdate(nextProps, nextState){
    if (nextState.showToolbar !== this.state.showToolbar || nextState.showLinkInput !== this.state.showLinkInput || nextState.placeholder != this.state.placeholder) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    if (!this.state.showToolbar) {
      return;
    }
    const toolbar = this.refs.toolbar;
    const toolbarBoundary = toolbar.getBoundingClientRect();
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectionBoundary = range.getBoundingClientRect();
    const parent = this.dom;
    const parentBoundary = parent.getBoundingClientRect();
    toolbar.style.top = (selectionBoundary.top - parentBoundary.top - toolbarBoundary.height - 5) + 'px';
    const widthDiff = selectionBoundary.width - toolbarBoundary.width;
    if (widthDiff >= 0) {
      toolbar.style.left = (widthDiff / 2) + 'px'
    } else {
      const left = (selectionBoundary.left - parentBoundary.left);
      if (left + toolbarBoundary.width > parentBoundary.width) {
        toolbar.style.right = '0px';
      } else {
        toolbar.style.left = (left + widthDiff / 2) + 'px';
      }
    }
  }

  placeCaretAtEnd() {
    const el = this.dom;
    el.focus();
    if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
  }

  captureReturn(e) {
    if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
      return;
    }
    if(e.which == Keys.ENTER) {
      if (this.props.inline || this.props.enterCapture) {
        e.preventDefault();
      }
      if(this.props.captureReturn) {
        this.props.captureReturn();
      }
    }
  }

  _onSelect() {
    const selection = window.getSelection();
    const str = selection.toString();
    if (str.length < 1) {
      if (this.state.showToolbar) {
        this.setState({ showToolbar: false, showLinkInput: false, });
      }
    } else {
      this.setState({ showToolbar: true, showLinkInput: false, });
    }
  }

  onSelect(e) {
    setTimeout(() => {
      this._onSelect();
    }, 0)
  }

  handleLink(e) {
    if (e.which === Keys.ESC) {
      e.stopPropagation();
      this.scrollY = window.pageYOffset;
      this.setState({
        showLinkInput: false,
        showToolbar: true,
      }, () => {
        const selection = new this.scribe.api.Selection();
        this.scribe.el.focus();
        selection.selection.removeAllRanges();
        selection.selection.addRange(this.tempRange);
        if (this.scrollY !== -1) {
          window.scrollTo(0, this.scrollY);
          this.scrollY = -1;
        }
      });
    } else if (e.which === Keys.ENTER) {
      e.preventDefault();
      e.stopPropagation();
      this.scrollY = window.pageYOffset;
      const link = e.target.value;
      const selection = new this.scribe.api.Selection();
      this.scribe.el.focus();
      selection.selection.removeAllRanges();
      if (this.scrollY !== -1) {
        window.scrollTo(0, this.scrollY);
        this.scrollY = -1;
      }
      selection.selection.addRange(this.tempRange);
      if (link.length < 1) {
        const command = this.scribe.getCommand('unlink');
        command.execute('unlink');
        this.setState({
          showLinkInput: false,
          showToolbar: true,
        });
      } else {
        // this.addLink(link);
        const command = this.scribe.getCommand('setLink');
        command.execute(link);
        this.setState({
          showLinkInput: false,
          showToolbar: true,
        });
      }
    }
  }

  handleLinkShortcut(e) {
    if (e.which === 75 && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      this.handleCommand('link');
    }
  }

  handleCommand(cmd) {
    if (cmd === 'link') {
      if (this.state.showLinkInput) {
        this.setState({ showLinkInput: false, showToolbar: true, });
      } else {
        const command = this.scribe.getCommand('setLink');
        const currentLink = command.getCurrentLink();
        this.setState({ showLinkInput: true, showToolbar: true}, () => {
          this.tempRange = new this.scribe.api.Selection().range;
          setTimeout(() => {
            this.refs.linkinput.focus();
            this.refs.linkinput.select();
            this.refs.linkinput.value = currentLink;
          }, 0);
        });
      }
    } else {
      const command = this.scribe.getCommand(cmd);
      command.execute(cmd);
    }
  }

  splitAtCursor() {
    const cmd = this.scribe.getCommand('insertHTML');
    cmd.execute(this.scribe._htmlFormatterFactory.format('<p><br></p>'));
    return this.scribe.getHTML();
  }

  render() {
    return (
      <div className="katap-scribe-container">
        { this.state.showToolbar ? (
          <div className={'katap-scribe-toolbar' + (this.state.showLinkInput ? ' katap-link-inp-visible' : '')} ref="toolbar">
            { !this.state.showLinkInput ? toolbarButtons.map(btn => {
              const _scribe = this.scribe;
              const className = 'katap-inline-toolbar-btn katap-inline-btn-' + btn.command;
              // if (_scribe !== null) {
                // const command = scribe.getCommand(btn.command);
                // const selection = new scribe.api.Selection();
                // console.log(selection.range);
                // console.log(selection, command);
                // console.log(command);
                // if (selection.range && command.queryState()) {
                  // className += ' katap-inline-btn-is-active';
                // }
              // }
              return (
                <button className={className} key={btn.command} title={btn.command.toUpperCase()} onMouseDown={() => this.handleCommand(btn.command)}>
                  <i className={"fa fa-" + btn.icon} />
                </button>
              );
            }) : (
              <input
                ref="linkinput"
                type="text"
                className="katap-scribe-link-input"
                placeholder="Paste and ENTER"
                onKeyDown={this.handleLink}
              />
            )
          }
          </div>
        ) : null }
        <div ref="scribeeditor"
          className="katap-medium-editor markdown-body"
          onKeyUp={this.onSelect}
          onMouseUp={this.onSelect}
          contentEditable />
        { this.state.placeholder ? <div className="scribe-plugin-placeholder" style={{ top: 0, left: 2 }}>{this.props.placeholder}</div>: null }
      </div>
    );
  }
}


ScribeEditor.defaultProps = {
  options: baseOptions,
  inline: false,
  placeholder: 'Write your story...',
};
