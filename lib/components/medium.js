var React = require('react');
var MediumEditor = require('medium-editor');

var options = {
    toolbar: {
        buttons: [
          'bold',
          'italic',
          'underline',
          'anchor',
          'strikethrough',
          'h2',
          'h3',
          'quote',
          'unorderedlist',
          'orderedlist',
          'removeFormat'
        ]
    },
    autoLink: false,
    imageDragging: false,
    placeholder: {
        text: 'Write your story...'
    }
    // paste: {
    //     forcePlainText: true,
    //     cleanPastedHTML: true
    // }
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
      options: options
    };
  },

  componentDidMount: function componentDidMount() {
    var _this = this;

    var dom = this.getDOMNode();
    this.dom = dom;
    this.medium = new MediumEditor(dom, this.props.options);
    this.medium.subscribe('editableInput', function (e) {
      _this._updated = true;
      _this.change(dom.innerHTML);
    });
    this.placeCaretAtEnd();
  },

  componentWillUnmount: function componentWillUnmount() {
    this.medium.destroy();
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.content !== this.state.content && !this._updated) {
      this.setState({ content: nextProps.content });
      //this.placeCaretAtEnd();
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
      dangerouslySetInnerHTML: { __html: this.state.content }
    });
  },

  change: function change(text) {
    if (this.props.onContentChanged) this.props.onContentChanged(text);
  }
});
