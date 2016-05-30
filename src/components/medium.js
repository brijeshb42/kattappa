import React from 'react';
import ReactDOM from 'react-dom';
import MediumEditor from 'medium-editor';
import Keys from '../utils/keys';

const options = {
    toolbar: {
        buttons: [
          'bold',
          'italic',
          'underline',
          'anchor',
          'strikethrough'
        ]
    },
    autoLink: false,
    imageDragging: false,
    placeholder: {
        text: 'Write your story...',
        hideOnClick: false,
    },
    paste: {
      forcePlainText: true,
      cleanPastedHTML: true,  
      cleanReplacements: [[/<!--[^>]*-->/gi, '']],
      cleanAttrs: ['class', 'dir', 'style', ],
      cleanTags: ['label', 'meta', 'aside', 'span']
    },
    disableExtraSpaces: true,
    extensions: {
      imageDragging: {}
    }
};


export default class MediumComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: this.props.content
    };

    this.dom = null;
    this._updated = false;

    this.change = this.change.bind(this);
    this.placeCaretAtEnd = this.placeCaretAtEnd.bind(this);
    this.captureReturn = this.captureReturn.bind(this);
  }

  componentDidMount() {
    var _this = this;

    var dom = ReactDOM.findDOMNode(this);
    this.dom = dom;
    var options = this.props.options;
    options.cleanTags = ['meta', 'span'];
    this.medium = new MediumEditor(dom, options);
    window.medium = this.medium;

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

    if(this.state.content === "") {
      setTimeout(this.placeCaretAtEnd, 0);
    }
  }

  componentWillUnmount() {
    this.medium.destroy();
    this.dom = null;
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
  options: options,
  enterCapture: false
};
