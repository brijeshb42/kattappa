var React = require('react');
var ReactDOM = require('react-dom');
var MediumEditor = require('medium-editor');
var Keys = require('../utils/keys');

var options = {
    toolbar: {
        buttons: [
          'bold',
          'italic',
          'underline',
          'anchor',
          'strikethrough',
          'quote',
          'unorderedlist',
          'orderedlist'
        ]
    },
    autoLink: false,
    imageDragging: false,
    placeholder: {
        text: 'Write your story...'
    },
    paste: {
      forcePlainText: true,
      cleanPastedHTML: false
    }
};

module.exports = React.createClass({
  displayName: 'MediumEditor',

  placeCaretAtEnd: function() {
    var el = this.dom;
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
  },

  getInitialState: function getInitialState() {
    return {
      content: this.props.content
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      tag: 'div',
      className: 'katap-medium-editor markdown-body',
      options: options,
      enterCapture: false
    };
  },

  captureReturn(e) {
    if(e.which === Keys.ENTER) {
      e.preventDefault();
      if(this.props.captureReturn) {
        this.props.captureReturn();
        this.dom.innerHTML = this.dom.innerHTML.replace('<p><br></p>', '');
        this.props.onContentChanged(this.dom.innerHTML.replace('<p><br></p>', ''));
      }
    }
  },

  componentDidMount: function componentDidMount() {
    var _this = this;

    var dom = ReactDOM.findDOMNode(this);
    this.dom = dom;
    var options = this.props.options;
    options.cleanTags = ['meta', 'span'];
    this.medium = new MediumEditor(dom, options);
    if(this.props.enterCapture) {
      this.medium.subscribe('editableKeyup', this.captureReturn);
      this.medium.subscribe('editableInput', function (e) {
        _this._updated = true;
        _this.change(dom.innerHTML.replace('<p><br></p>', ''));
      });
    } else {
      this.medium.subscribe('editableInput', function (e) {
        _this._updated = true;
        _this.change(dom.innerHTML);
      });
    }
    // this.medium.subscribe('blur', function(e) {
      
    // });
    if(this.state.content === "") {
      this.placeCaretAtEnd();
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    this.medium.destroy();
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.content !== this.state.content && !this._updated) {
      this.setState({ content: nextProps.content });
    }

    if (this._updated) this._updated = false;
  },

  shouldComponentUpdate: function shouldComponentUpdate(nextProps){
    return nextProps.content !== this.dom.innerHTML;
  },

  render: function render() {
    return React.createElement(this.props.tag, {
      className: this.props.className,
      contentEditable: true,
      ref: 'mediumeditor',
      dangerouslySetInnerHTML: { __html: this.state.content }
    });
  },

  change: function change(text) {
    if (this.props.onContentChanged) this.props.onContentChanged(text);
  }
});
