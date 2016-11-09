import React from 'react';
import ReactDOM from 'react-dom';
import MediumEditor from 'medium-editor';
import Keys from '../utils/keys';
import getConfig from '../utils/editoroptions';


export default class MediumComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: props.content,
    };

    this.dom = null;
    this._updated = false;

    this.change = this.change.bind(this);
    this.placeCaretAtEnd = this.placeCaretAtEnd.bind(this);
    this.captureReturn = this.captureReturn.bind(this);
    this.handleBeforeInput = this.handleBeforeInput.bind(this);
  }

  componentDidMount() {
    var _this = this;

    var dom = ReactDOM.findDOMNode(this);
    this.dom = dom;
    var options = this.props.options;
    console.log(options);
    this.medium = new MediumEditor(dom, options);
    // this.medium.setContent(this.state.content);

    this.medium.subscribe('editableKeydown', this.handleBeforeInput);

    if(this.props.enterCapture) {
      this.medium.subscribe('editableKeyup', this.captureReturn);
      this.medium.subscribe('editableInput', (e) => {
        this._updated = true;
        this.change(dom.innerHTML.replace('<p><br></p>', ''));
      });
    } else {
      this.medium.subscribe('editableInput', (e) => {
        this._updated = true;
        this.change(dom.innerHTML);
      });
    }

    if(this.state.content === '' || this.state.content === '<p><br></p>') {
      setTimeout(this.placeCaretAtEnd, 0);
    }
  }

  componentWillUnmount() {
    this.medium.destroy();
    this.dom = null;
    this.medium = null;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.content !== this.state.content && !this._updated) {
      this.setState({ content: nextProps.content });
    }

    if (this._updated) this._updated = false;
  }

  shouldComponentUpdate(nextProps){
    return false;
  }

  handleBeforeInput(e) {
    if (e.ctrlKey || e.metaKey || e.altKey || e.keyCode !== 222) {
      return;
    };
    e.preventDefault();
    const sel = MediumEditor.selection.getSelectionRange(this.medium.options.ownerDocument);
    if (sel.collapsed && sel.startOffset === sel.endOffset) {
      let pastable = '';
      const nodeText = sel.startContainer.textContent.replace(/\u00a0/g, " ");
      if (sel.startContainer.textContent === '' || sel.startOffset === 0 || nodeText[sel.startOffset - 1] === ' ') {
        if (e.shiftKey) {
          pastable = '“';
        } else {
          pastable = '‘';
        }
      } else if (nodeText[sel.startOffset - 1] !== ' ') {
        if (e.shiftKey) {
          pastable = '”';
        } else {
          pastable = '’';
        }
      } else {
        pastable = '‘';
      }
      this.medium.pasteHTML(pastable);
    }
  }

  change(text) {
    if (this.props.onContentChanged) this.props.onContentChanged(text);
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
    if(e.which === Keys.ENTER) {
      e.preventDefault();
      if(this.props.captureReturn) {
        this.props.captureReturn();
        this.dom.innerHTML = this.dom.innerHTML.replace('<p><br></p>', '');
        this.props.onContentChanged(this.dom.innerHTML.replace('<p><br></p>', ''));
      }
    }
  }

  render() {
    return (
      <div ref="mediumeditor"
        className="katap-medium-editor markdown-body"
        options={this.props.options}
        dangerouslySetInnerHTML={{__html: this.state.content}}
        contentEditable />
    );
  }
}

MediumComponent.defaultProps = {
  options: getConfig(),
  enterCapture: false
};
