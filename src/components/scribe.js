import React from 'react';
import ReactDOM from 'react-dom';
import Scribe from 'scribe-editor';
import pluginCurlyQuotes from 'scribe-plugin-curly-quotes';
import pluginSanitizer from 'scribe-plugin-sanitizer';
import pluginNewlineToHTML from 'scribe-plugin-formatter-plain-text-convert-new-lines-to-html';
import pluginSemanticEl from 'scribe-plugin-formatter-html-ensure-semantic-elements';

import { sanitizerTags } from './scribe-options';
import Keys from '../utils/keys';

export default class ScribeEditor extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      content: this.props.content
    };

    this.scribe = null;
    this.dom = null;
    this._updated = false;

    this.change = this.change.bind(this);
    this.placeCaretAtEnd = this.placeCaretAtEnd.bind(this);
    this.captureReturn = this.captureReturn.bind(this);
  }

  componentDidMount() {
    this.dom = ReactDOM.findDOMNode(this);
    this.scribe = new Scribe(this.dom);
    this.scribe.use(pluginNewlineToHTML());
    this.scribe.use(pluginCurlyQuotes());
    this.scribe.use(pluginSanitizer(sanitizerTags));
    this.scribe.use(pluginSemanticEl());

    // this.scribe.el.addEventListener('keydown', this.captureReturn);

    // if(this.props.enterCapture) {
    //   this.scribe.subscribe('editableKeyup', this.captureReturn);
    //   this.medium.subscribe('editableInput', (e) => {
    //     this._updated = true;
    //     this.change(dom.innerHTML.replace('<p><br></p>', ''));
    //   });
    // } else {
    //   this.medium.subscribe('editableInput', (e) => {
    //     this._updated = true;
    //     this.change(dom.innerHTML);
    //   });
    // }
    this.scribe.on('scribe:content-changed', () => {
      this.change(this.scribe.getHTML());
    });

    // window.scribe = this.scribe;

    this.placeCaretAtEnd();
  }

  componentWillUnmount() {
    // this.scribe.el.removeEventListener('keydown', this.captureReturn);
    this.scribe.destroy();
    this.dom = null;
    this.scribe = null;
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
    console.log(e);
    if(e.which === Keys.ENTER) {
      e.preventDefault();
      if(this.props.captureReturn) {
        this.props.captureReturn();
        // this.dom.innerHTML = this.dom.innerHTML.replace('<p><br></p>', '');
        // this.props.onContentChanged(this.dom.innerHTML.replace('<p><br></p>', ''));
      }
    }
  }

  render() {
    return (
      <div ref="scribeeditor"
        className="katap-medium-editor markdown-body"
        options={this.props.options}
        dangerouslySetInnerHTML={{__html: this.state.content}}
        contentEditable />
    );
  }
}
