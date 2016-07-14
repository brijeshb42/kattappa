import React from 'react';
import ReactDOM from 'react-dom';
import Scribe from 'scribe-editor';
import pluginCurlyQuotes from 'scribe-plugin-curly-quotes';
import pluginSanitizer from 'scribe-plugin-sanitizer';
import pluginNewlineToHTML from 'scribe-plugin-formatter-plain-text-convert-new-lines-to-html';
import pluginSemanticEl from 'scribe-plugin-formatter-html-ensure-semantic-elements';
import pluginSmartLists from 'scribe-plugin-smart-lists';

import { baseOptions } from './scribe-options';
import Keys from '../utils/keys';

const toolbarButtons = [{
  command: 'bold',
  icon: 'bold',
}, {
  command: 'italic',
  icon: 'italic',
}, {
  command: 'underline',
  icon: 'underline',
}, {
  command: 'link',
  icon: 'link',
}, {
  command: 'strikeThrough',
  icon: 'strikethrough',
}];

export default class ScribeEditor extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showToolbar: false,
      showLinkInput: false,
    };

    this.scribe = null;
    this.dom = null;
    this._updated = false;

    this.change = this.change.bind(this);
    this.placeCaretAtEnd = this.placeCaretAtEnd.bind(this);
    this.captureReturn = this.captureReturn.bind(this);
    this.handleCommand = this.handleCommand.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this._onSelect = this._onSelect.bind(this);

    // this.onBlur = () => this.setState({ showToolbar: false, showLinkInput: false });
    this.onBlur = () => {};
  }

  componentDidMount() {
    this.dom = ReactDOM.findDOMNode(this.refs.scribeeditor);
    this.scribe = new Scribe(this.dom);
    if (!this.props.inline) {
      this.scribe.use(pluginSmartLists());
    }
    this.scribe.use(pluginNewlineToHTML());
    this.scribe.use(pluginCurlyQuotes());
    this.scribe.use(pluginSanitizer(this.props.options));
    this.scribe.use(pluginSemanticEl());

    if(this.props.inline || this.props.enterCapture) {
      this.scribe.el.addEventListener('keydown', this.captureReturn);
    }
    this.scribe.on('scribe:content-changed', () => {
      this.change(this.scribe.getHTML());
    });

    this.scribe.setContent(this.props.content);

    if (this.props.onFocus) {
      this.scribe.el.addEventListener('focus', this.props.onFocus);
    }
    this.scribe.el.addEventListener('blur', this.onBlur);

    this.placeCaretAtEnd();
    window.scribe = this.scribe;
  }

  componentWillUnmount() {
    if(this.props.inline || this.props.enterCapture) {
      this.scribe.el.removeEventListener('keydown', this.captureReturn);
    }
    this.scribe.destroy();
    this.dom = null;
    this.scribe = null;
  }

  componentWillReceiveProps(nextProps) {
    if (this._updated) this._updated = false;
  }

  shouldComponentUpdate(nextProps, nextState){
    if (nextState.showToolbar !== this.state.showToolbar || nextState.showLinkInput !== this.state.showLinkInput) {
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
        toolbar.style.left = left + 'px';
      }
    }
  }

  change(text) {
    if (this.props.onContentChanged) this.props.onContentChanged(text);
  }

  handleCommand(cmd) {
    if (cmd === 'link') {
      if (this.state.showLinkInput) {
        this.setState({ showLinkInput: false });
      } else {
        this.setState({ showLinkInput: true });
      }
      return;
    }
    // console.log(command);
    const command = this.scribe.getCommand(cmd);
    console.log(command);
    command.execute(cmd);
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
    if(e.which == Keys.ENTER) {
      if (this.props.inline || this.props.enterCapture) {
        e.preventDefault();
      }
      if(this.props.captureReturn) {
        this.props.captureReturn();
      }
    }
  }

  _onSelect(e) {
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
      this._onSelect(e);
    }, 0)
  }

  render() {
    return (
      <div className="katap-scribe-container">
        { this.state.showToolbar ? (
          <div className="katap-scribe-toolbar" ref="toolbar">
            {toolbarButtons.map(btn => (
              <button key={btn.command} title={btn.command} onMouseDown={() => this.handleCommand(btn.command)}>
                <i className={"fa fa-" + btn.icon} />
              </button>
            ))}
            { this.state.showLinkInput ? (
              <input ref="linkinput" type="text" className="katap-scribe-link-input" />
            ) : null }
          </div>
        ) : null }
        <div ref="scribeeditor"
          className="katap-medium-editor markdown-body"
          options={this.props.options}
          onKeyUp={this.onSelect}
          onMouseUp={this.onSelect}
          contentEditable />
      </div>
    );
  }
}


ScribeEditor.defaultProps = {
  options: baseOptions,
  inline: false,
};
