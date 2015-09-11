var React = require('react');
var MediumEditor = require('medium-editor');

var options = {
    toolbar: {
        /* These are the default options for the toolbar,
           if nothing is passed this is what is used */
        allowMultiParagraphSelection: true,
        buttons: [
          'anchor',
          'bold',
          'italic',
          'strikethrough',
          'underline',
          'h2',
          'h3',
          'quote',
          'unorderedlist',
          'orderedlist',
          'removeFormat'
        ],
        diffLeft: 0,
        diffTop: -10,
        firstButtonClass: 'medium-editor-button-first',
        lastButtonClass: 'medium-editor-button-last',
        standardizeSelectionStart: false,
        static: false,
        relativeContainer: null,

        /* options which only apply when static is true */
        align: 'center',
        sticky: false,
        updateOnEmptySelection: false,
        buttonLabels: 'fontawesome'
    },
    placeholder: {
      text: 'Your text here.'
    },
    paste: {
        /* This example includes the default options for paste,
           if nothing is passed this is what it used */
        forcePlainText: true,
        cleanPastedHTML: false,
        cleanReplacements: [],
        cleanAttrs: ['class', 'style', 'dir'],
        cleanTags: ['meta', 'script']
    },
    autoLink: true,
    imageDragging: false,
};

module.exports = React.createClass({
  displayName: 'MediumEditor',

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
    this.medium = new MediumEditor(dom, this.props.options);
    this.medium.subscribe('editableInput', function (e) {
      _this._updated = true;
      _this.change(dom.innerHTML);
    });
    dom.focus();
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
