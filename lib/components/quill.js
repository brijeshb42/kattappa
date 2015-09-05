import React from 'react';
import Quill from 'quill';

// let T = React.PropTypes;
let ExtraEnter = "<div><br></div>";

let defaultItems = [
  {
    label:'Text',
    type:'group',
    items: [
      { type:'bold', label:'Bold'},
      { type:'italic', label:'Italic'},
      { type:'underline', label:'Underline'},
      { type:'link', label:'Link'},
      { type:'strike', label:'Strike'}
    ]
  }
];
var items = [];
defaultItems[0].items.forEach(function(item, index) {
  items.push(item.type);
});

class QuillComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showToolbar: true,
    };
    this.enterPressed = this.enterPressed.bind(this);
    this.createEditor = this.createEditor.bind(this);
    this.hookEditor = this.hookEditor.bind(this);
    this.focus = this.focus.bind(this);
    this.onEditorChange = this.onEditorChange.bind(this);
    this.captureReturn = this.captureReturn.bind(this);
    this.getEditorContents = this.getEditorContents.bind(this);
    this.setEditorContents = this.setEditorContents.bind(this);
    this.isControlled = this.isControlled.bind(this);
    this.getEditorConfig = this.getEditorConfig.bind(this);
    this.getEditorElement = this.getEditorElement.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.renderGroups = this.renderGroups.bind(this);
  }

  enterPressed() {
    if(this.props.enterPressed) {
      this.props.enterPressed();
    }
  }

  createEditor($el, config) {
    var editor = new Quill($el, config);
    this.hookEditor(editor);
    return editor;
  }

  hookEditor(editor) {
    editor.on('text-change', function(delta, source) {
      if (this.onEditorChange) {
        this.onEditorChange(editor.getHTML(), delta, source);
      }
    }.bind(this));

    editor.on('selection-change', function(range, source) {
      if (this.onEditorChangeSelection) {
        this.onEditorChangeSelection(range, source);
      }
    }.bind(this));
    if(this.props.enterCapture) {
      editor.addModule('enterHandler', {
        keydown: this.captureReturn
      });
    }
    this.setEditorContents(editor, this.props.content);
  }

  focus() {
    this.state.editor.focus();
  }

  onEditorChange(value, delta, source) {
    if(this.props.enterCapture) {
      var editor = this.state.editor;
      if(value.indexOf(ExtraEnter) > 0) {
        value = value.replace(ExtraEnter, "");
        editor.setHTML(value);
        editor.setSelection(editor.getLength(), editor.getLength());
      }
    }
    if(this.props.onContentChanged) {
      this.props.onContentChanged(value);
    }
  }

  captureReturn() {
    if(this.props.captureReturn) {
      this.props.captureReturn();
    }
  }

  getEditorContents() {
    return this.state.content;
  }

  setEditorContents(editor, value) {
    var sel = editor.getSelection();
    editor.setHTML(value);
    if (sel) this.setEditorSelection(editor, sel);
  }

  isControlled() {
    return 'value' in this.props;
  }

  getEditorConfig() {
    var formats = this.props.formats;
    var config = {
      theme:        this.props.theme,
      modules:      this.props.modules,
      pollInterval: this.props.pollInterval,
      formats: formats
    };
    if (!config.modules.toolbar) {
      config.modules = JSON.parse(JSON.stringify(config.modules));
      config.modules.toolbar = {
        container: this.refs.toolbar.getDOMNode()
      };
    }
    return config;
  }

  getEditorElement() {
    return this.refs.editor.getDOMNode();
  }

  componentDidMount() {
    var editor = this.createEditor(
      this.getEditorElement(),
      this.getEditorConfig()
    );
    if(this.props.showToolbar) {
      this.setState({
        showToolbar: this.props.showToolbar,
        editor:editor
      });
    } else {
      this.setState({
        editor:editor
      });
    }
    editor.focus();
    editor.setHTML(this.props.content);
  }

  renderItems(item, index) {
    return (
      <span
        className={"ql-format-button ql-"+item.type}
        title={item.label}
        key={index} />
    );
  }

  renderGroups() {
    var self = this;
    var items = this.props.items || defaultItems;
    //console.log(items);
    var groups = items.map(function(item, index) {
      return (
        <span className={"ql-format-"+item.type} key={index}>
          {item.items.map(self.renderItems)}
        </span>
      );
    });
    return groups;
  }

  render() {
    var visibility = (this.state.showToolbar) ? 'visible': 'hidden';
    var self = this;
    return (
      <div className="quill-rte">
        <div
          ref="toolbar"
          className="ql-toolbar ql-snow"
          style={{visibility: visibility}}>
          {self.renderGroups()}
        </div>
        <div className="ql-container ql-snow" ref="editor" />
      </div>
    );
  }

}

QuillComponent.defaultProps = {
  className: 'ql-editor',
  theme: 'base',
  modules: {
    'link-tooltip': true
  },
  content: '',
  items: defaultItems,
  formats: items,
  enterCapture: false
};

export default QuillComponent;
