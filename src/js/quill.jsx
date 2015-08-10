(function(window) {
  var APP = window.LegoBlocks || {};
  var T = React.PropTypes;

  var ExtraEnter = "<div><br></div>";

  if (React.cloneElement) {
    var cloneElement = React.cloneElement;
  } else if (React.addons && React.addons.cloneWithProps) {
    var cloneElement = React.addons.cloneWithProps;
  } else {
    throw new Error('React addons are required when using React 0.12 or less.');
  }

  var defaultItems = [
    {
      label:'Text',
      type:'group',
      items: [
        { type:'bold', label:'Bold'},
        { type:'italic', label:'Italic'},
        //{ type:'underline', label:'Underline'},
        { type:'link', label:'Link'}
      ]
    }
  ];

  /*
  * Quill Component
  */

  var QuillComponent = React.createClass({

    onConvert: function(c) {
      console.log(c);
      console.log(c.replace(/(<([^>]+)>)/ig,""));
    },

    getDefaultProps: function() {
      return {
        className: 'ql-editor',
        theme: 'base',
        modules: {
          'link-tooltip': true
        },
        content: ''
      };
    },

    enterPressed: function() {
      console.log(this.editor.getSelection());
      if(this.props.enterPressed) {
        this.props.enterPressed();
      }
    },

    getInitialState: function() {
      return {
        showToolbar: true,
      };
    },

    createEditor: function($el, config) {
      //console.log(this.props);
      var editor = new Quill($el, config);
      this.hookEditor(editor);
      return editor;
    },

    hookEditor: function(editor) {
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
      editor.addModule('enterHandler', {
        keydown: this.captureReturn
      });
      this.setEditorContents(editor, this.props.content);
    },

    focus: function() {
      this.state.editor.focus();
    },

    onEditorChange: function(value, delta, source) {
      //console.log(value+" - val");
      //console.log(value);
      if(value.indexOf(ExtraEnter) > 0) {
        value = value.replace(ExtraEnter, "");
        //this.state.editor.setHTML(value.replace(/(<([^>]+)>)/ig,""));
        //this.state.editor.setHTML(value.replace(/(<(?!\/?(em|b|i|u|strong)[ >])[^>]*>)/ig,""));
        //console.log(value);
        this.state.editor.setHTML(value);
        this.state.editor.setSelection(1, 1);
      }
      if(this.props.onContentChanged) {
        this.props.onContentChanged(value);
      }
    },

    captureReturn: function() {
      // var sel = this.state.editor.getSelection();
      // var len = this.state.editor.getLength();
      // console.log(sel);
      // console.log(len);
      // if(sel.start === sel.end && sel.start < len) {
      //   return;
      // }
      // console.log();
      if(this.props.captureReturn) {
        this.props.captureReturn();
      }
    },

    getEditorContents: function() {
      return this.state.content;
    },

    setEditorContents: function(editor, value) {
      var sel = editor.getSelection();
      editor.setHTML(value);
      if (sel) this.setEditorSelection(editor, sel);
    },

    isControlled: function() {
      return 'value' in this.props;
    },

    getEditorConfig: function() {
      var config = {
        theme:        this.props.theme,
        modules:      this.props.modules,
        pollInterval: this.props.pollInterval,
        formats: ['bold', 'italic', 'link']
      };
      if (!config.modules.toolbar) {
        config.modules = JSON.parse(JSON.stringify(config.modules));
        config.modules.toolbar = {
          container: this.refs.toolbar.getDOMNode()
        };
      }
      return config;
    },

    getEditorElement: function() {
      return this.refs.editor.getDOMNode();
    },

    componentDidMount: function() {
      //console.log(this.props);
      var editor = this.createEditor(
        this.getEditorElement(),
        this.getEditorConfig()
      );
      this.setState({editor:editor});
      editor.focus();
      editor.setHTML(this.props.content);
      //window.edi = editor;
    },

    renderItems: function(item, index) {
      return (
        <span
          className={"ql-format-button ql-"+item.type}
          title={item.label}
          key={index} />
      );
    },

    renderGroups: function() {
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
    },

    render: function() {
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

  });

  APP.QuillComponent = QuillComponent;

  window.LegoBlocks = APP;
})(window);
