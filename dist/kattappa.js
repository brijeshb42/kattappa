/**
 * Kattappa - A block based rich text editor with support of Images, embeds( Youtube, twitter, etc)
 * @version v0.2.0
 * @link https://github.com/brijeshb42/kattappa
 * @license MIT
 */
'use strict';

(function (window) {

  'use strict';

  var Quill = window.Quill || null;
  var React = window.React;
  if (!React) {
    throw new Error('React is required for this project to function.');
  }
  React.initializeTouchEvents(true);
  // if(!Quill) {
  //   throw new Error('Quill is required for this project to function.');
  // }

  var APP = window.Kattappa || {};

  APP.BlockStructure = {
    Text: '',
    Image: '',
    Quote: '',
    UL: [{
      content: '',
      key: ''
    }],
    OL: [{
      content: '',
      key: ''
    }],
    Embed: '',
    H2: ''
  };

  APP.uuid = function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + '-' + s4();
    // return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    //   s4() + '-' + s4() + s4() + s4();
  };

  APP.Keys = {
    ENTER: 13,
    ESC: 27,
    BACKSPACE: 8
  };

  APP.Action = {
    UP: "up",
    DOWN: "down",
    REMOVE: "remove"
  };

  APP.Blocks = {};

  var QuillEnterHandler = function QuillEnterHandler(quill, options) {
    //console.log('init enter handler');
    this.quill = quill;
    this.options = options;

    var enterKey = Quill.require('dom').KEYS.ENTER;

    if (options && options.keyup && typeof options.keyup === 'function') {
      quill.editor.root.addEventListener('keyup', function (event) {
        if (event.keyCode === enterKey) {
          event.preventDefault();
          event.stopPropagation();
          options.keyup.call(null, event);
        }
      });
    }
    if (options && options.keydown && typeof options.keydown === 'function') {
      quill.editor.root.addEventListener('keydown', function (event) {
        if (event.keyCode === enterKey) {
          event.preventDefault();
          event.stopPropagation();
          options.keydown.call(null, event);
        }
      });
    }
  };

  Quill.registerModule('enterHandler', QuillEnterHandler);

  window.Kattappa = APP;
})(window);

(function (window) {
  var APP = window.Kattappa || {};

  var BlockText = React.createClass({
    displayName: 'BlockText',

    captureReturn: function captureReturn() {
      this.props.addBlock("Text", this.props.position);
    },

    onContentChanged: function onContentChanged(content) {
      this.props.onContentChanged(this.props.position, content);
    },

    render: function render() {
      return React.createElement(
        'div',
        { className: 'katap-text' },
        React.createElement(APP.QuillComponent, {
          content: this.props.content,
          captureReturn: this.captureReturn,
          onContentChanged: this.onContentChanged })
      );
    }

  });

  APP.Blocks.Text = {
    Name: 'Text',
    React: BlockText,
    Icon: '',
    Empty: function Empty() {
      return '';
    },
    Description: 'Text',
    isEmpty: function isEmpty(content) {
      return content.replace(/(<([^>]+)>)/ig, '') === '';
    }
  };
  window.Kattappa = APP;
})(window);

(function (window) {
  var APP = window.Kattappa || {};

  var BlockQuote = React.createClass({
    displayName: 'BlockQuote',

    // focus: function() {
    //   //this.quill.focus();
    // },

    // componentDidMount: function(){
    //   //this.initiateEditor();
    //   this.focus();
    // },

    captureReturn: function captureReturn() {
      this.props.addBlock("Text", this.props.position);
    },

    onContentChanged: function onContentChanged(content) {
      var content = {
        content: content,
        credit: this.props.content.credit
      };
      this.props.onContentChanged(this.props.position, content);
    },

    onCreditChange: function onCreditChange(e) {
      var content = {
        content: this.props.content.content,
        credit: e.target.value
      };
      this.props.onContentChanged(this.props.position, content);
    },

    render: function render() {
      return React.createElement(
        'blockquote',
        { className: 'katap-text' },
        React.createElement('input', {
          className: 'katap-blockquote-credit',
          type: 'text',
          placeholder: 'Credit',
          onChange: this.onCreditChange,
          value: this.props.content.credit }),
        React.createElement(APP.QuillComponent, {
          content: this.props.content.content,
          captureReturn: this.captureReturn,
          onContentChanged: this.onContentChanged })
      );
    }

  });

  //APP.BlockTypes.Text = 'Text';
  APP.Blocks.Quote = {
    Name: 'Quote',
    React: BlockQuote,
    Icon: '',
    Empty: function Empty() {
      return {
        content: '',
        credit: ''
      };
    },
    Description: 'Block Quote',
    isEmpty: function isEmpty(content) {
      return content.replace(/(<([^>]+)>)/ig, '') === '';
    }
  };
  window.Kattappa = APP;
})(window);

(function (window) {
  var APP = window.Kattappa || {};

  var items = [{
    label: 'Text',
    type: 'group',
    items: [{ type: 'link', label: 'Link' }]
  }];

  var H2 = React.createClass({
    displayName: 'H2',

    captureReturn: function captureReturn() {
      console.log('enter');
      this.props.addBlock("Text", this.props.position);
    },

    onContentChanged: function onContentChanged(content) {
      this.props.onContentChanged(this.props.position, content);
    },

    render: function render() {
      return React.createElement(
        'h2',
        { className: 'katap-h2' },
        React.createElement(APP.QuillComponent, {
          content: this.props.content,
          captureReturn: this.captureReturn,
          onContentChanged: this.onContentChanged })
      );
    }

  });

  var H3 = React.createClass({
    displayName: 'H3',

    captureReturn: function captureReturn() {
      console.log('enter');
      this.props.addBlock("Text", this.props.position);
    },

    onContentChanged: function onContentChanged(content) {
      this.props.onContentChanged(this.props.position, content);
    },

    render: function render() {
      return React.createElement(
        'h3',
        { className: 'katap-h3' },
        React.createElement(APP.QuillComponent, {
          content: this.props.content,
          captureReturn: this.captureReturn,
          onContentChanged: this.onContentChanged })
      );
    }

  });

  var H4 = React.createClass({
    displayName: 'H4',

    captureReturn: function captureReturn() {
      console.log('enter');
      this.props.addBlock("Text", this.props.position);
    },

    onContentChanged: function onContentChanged(content) {
      this.props.onContentChanged(this.props.position, content);
    },

    render: function render() {
      return React.createElement(
        'h4',
        { className: 'katap-h4' },
        React.createElement(APP.QuillComponent, {
          content: this.props.content,
          captureReturn: this.captureReturn,
          onContentChanged: this.onContentChanged })
      );
    }

  });

  APP.BlockTypes.Text = 'Text';
  APP.Blocks.H2 = {
    Name: 'H2',
    React: H2,
    Icon: '',
    Empty: function Empty() {
      return '';
    },
    Description: 'Heading 2',
    isEmpty: function isEmpty(content) {
      if (content.replace(/(<([^>]+)>)/ig, '') === '') {
        return true;
      }
      return false;
    }
  };

  // APP.Blocks.H3 = {
  //   Name: 'H3',
  //   React: H3,
  //   Icon: '',
  //   Empty: '',
  //   isEmpty: function(content) {
  //     if(content.replace(/(<([^>]+)>)/ig,'') === '') {
  //       return true;
  //     }
  //     return false;
  //   }
  // };

  // APP.Blocks.H4 = {
  //   Name: 'H4',
  //   React: H4,
  //   Icon: '',
  //   Empty: '',
  //   isEmpty: function(content) {
  //     if(content.replace(/(<([^>]+)>)/ig,'') === '') {
  //       return true;
  //     }
  //     return false;
  //   }
  // };
  window.Kattappa = APP;
})(window);

(function (window) {
  var APP = window.Kattappa || {};

  var HR = React.createClass({
    displayName: 'HR',

    render: function render() {
      return React.createElement('hr', { className: 'katap-hr' });
    }
  });

  APP.Blocks.HR = {
    Name: 'HR',
    React: HR,
    Icon: '',
    Empty: function Empty() {
      return '';
    },
    Description: 'Break',
    isEmpty: function isEmpty(content) {
      return true;
    }
  };
  window.Kattappa = APP;
})(window);

(function (window) {
  var APP = window.Kattappa || {};

  var Droppable = React.createClass({
    displayName: 'Droppable',

    getInitialState: function getInitialState() {
      return {
        className: ''
      };
    },

    getDefaultProps: function getDefaultProps() {
      return {
        supportClick: true,
        multiple: false
      };
    },

    getClassName: function getClassName() {
      return 'katap-droppable ' + (this.props.className || this.state.className);
    },

    componentDidMount: function componentDidMount() {
      this.refs.droppable.getDOMNode().focus();
    },

    onDragOver: function onDragOver(e) {
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = 'copy';
      var effectAllowed = e.dataTransfer.effectAllowed;
      if (effectAllowed === 'all' || effectAllowed === 'uninitialized') {
        this.setState({
          className: 'katap-drop-active'
        });
      }
      if (this.props.onDragOver) {
        this.props.onDragOver(e);
      }
    },

    onDragLeave: function onDragLeave(e) {
      this.setState({
        className: ''
      });

      if (this.props.onDragLeave) {
        this.props.onDragLeave(e);
      }
    },

    onClick: function onClick() {
      var fileInput = React.findDOMNode(this.refs.input);
      fileInput.value = null;
      fileInput.click();
    },

    onDrop: function onDrop(e) {
      e.preventDefault();
      var files;
      if (e.dataTransfer) {
        files = e.dataTransfer.files;
      } else if (e.target) {
        files = e.target.files;
      }
      var maxFiles = this.props.multiple ? files.length : 1;
      for (var i = 0; i < maxFiles; i++) {
        files[i].preview = URL.createObjectURL(files[i]);
      }
      if (this.props.onDrop) {
        files = Array.prototype.slice.call(files, 0, maxFiles);
        //console.log(files);
        this.props.onDrop(files);
      }
    },

    render: function render() {
      return React.createElement(
        'div',
        {
          ref: 'droppable',
          className: this.getClassName(),
          onDragOver: this.onDragOver,
          onDragLeave: this.onDragLeave,
          onClick: this.onClick,
          onDrop: this.onDrop },
        React.createElement('input', {
          ref: 'input',
          type: 'file',
          style: { display: 'none' },
          multiple: this.props.multiple,
          onChange: this.onDrop }),
        this.props.children
      );
    }
  });

  APP.Droppable = Droppable;
  window.Kattappa = APP;
})(window);

(function (window) {
  var APP = window.Kattappa || {};

  var UploadUrl = "";

  var BlockImage = React.createClass({
    displayName: 'BlockImage',

    getInitialState: function getInitialState() {
      return {
        message: 'Drop image here or click to add.'
      };
    },

    handleImage: function handleImage(files) {
      var self = this;
      var file = files[0];
      if (file.type.indexOf("image/") !== 0) {
        alert("Provide a valid image file.");
        return;
      }
      if (APP.Blocks.Image.UploadUrl !== "") {
        var data = new FormData();
        data.append("image", file);
        fetch(APP.Blocks.Image.UploadUrl, {
          method: 'POST',
          credentials: 'same-origin',
          body: data
        }).then(function (response) {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            var error = new Error(response.statusText);
            error.response = response;
            throw error;
          }
        }).then(function (json) {
          if (json.type && json.type === "success") {
            //console.log(json);
            if (self.props.onContentChanged) {
              self.props.onContentChanged(self.props.position, json.message);
            }
          } else {
            alert('Could not upload.');
          }
        })['catch'](function (error) {
          console.log(error);
          alert('Error while uploading. Retry.');
        });
      } else if (this.props.onContentChanged) {
        this.props.onContentChanged(this.props.position, file.preview);
      }
    },

    render: function render() {
      if (this.props.content === "") {
        return React.createElement(
          'div',
          { className: 'katap-image' },
          React.createElement(
            APP.Droppable,
            {
              onDrop: this.handleImage },
            React.createElement(
              'p',
              null,
              this.state.message
            )
          )
        );
      } else {
        return React.createElement(
          'div',
          { className: 'katap-image' },
          React.createElement('img', { src: this.props.content })
        );
      }
    }

  });

  //APP.BlockTypes.Text = 'Text';
  APP.Blocks.Image = {
    Name: 'Image',
    React: BlockImage,
    Icon: '',
    Empty: function Empty() {
      return '';
    },
    Description: 'Image',
    UploadUrl: UploadUrl,
    isEmpty: function isEmpty(content) {
      return content === '';
    }
  };
  window.Kattappa = APP;
})(window);

(function (window) {
  var APP = window.Kattappa || {};

  var Action = APP.Action;

  var LI = React.createClass({
    displayName: 'LI',

    captureReturn: function captureReturn() {
      this.props.addItem(this.props.position);
    },

    onContentChanged: function onContentChanged(content) {
      //console.log(content);
      this.props.onContentChanged(this.props.position, content);
    },

    render: function render() {
      return React.createElement(APP.QuillComponent, {
        content: this.props.content,
        captureReturn: this.captureReturn,
        onContentChanged: this.onContentChanged });
    }

  });

  var UL = React.createClass({
    displayName: 'UL',

    onContentChanged: function onContentChanged(position, content) {
      this.props.content[position].content = content;
      this.props.onContentChanged(this.props.position, this.props.content);
    },

    addItem: function addItem(position) {
      if (position < 0 || position >= this.props.content.length) {
        return;
      }
      var content = this.props.content;
      content.push({
        content: '',
        key: APP.uuid()
      });
      this.props.onContentChanged(this.props.position, content);
    },

    handleItemRemove: function handleItemRemove(action, position) {
      console.log(position);
      if (this.props.content.length < 2) {
        return;
      }
      var content = this.props.content;
      console.log(content);
      content.splice(position, 1);
      console.log(content);
      this.props.onContentChanged(this.props.position, content);
    },

    renderListItem: function renderListItem() {
      var self = this;
      var li = [];
      this.props.content.map(function (item, index) {
        li.push(React.createElement(
          'li',
          { key: item.key },
          React.createElement(APP.BlockControl, {
            onlyRemove: true,
            blockAction: self.handleItemRemove,
            position: index,
            length: self.props.content.length }),
          React.createElement(LI, {
            position: index,
            content: item.content,
            addItem: self.addItem,
            onContentChanged: self.onContentChanged })
        ));
      });
      return li;
    },

    render: function render() {
      return React.createElement(
        'ul',
        { className: 'katap-list' },
        this.renderListItem()
      );
    }
  });

  APP.Blocks.UL = {
    Name: 'UL',
    React: UL,
    Icon: '',
    Empty: function Empty() {
      return [{
        content: '',
        key: APP.uuid()
      }];
    },
    Description: 'Undordered List',
    isEmpty: function isEmpty(content) {
      for (var i = 0; i < content.length; i++) {
        if (content[i].content.replace(/(<([^>]+)>)/ig, '') !== '') {
          return false;
        }
      }
      return true;
    }
  };

  window.Kattappa = APP;
})(window);

(function (window) {
  var APP = window.Kattappa || {};

  var Action = APP.Action;

  var LI = React.createClass({
    displayName: 'LI',

    captureReturn: function captureReturn() {
      this.props.addItem(this.props.position);
    },

    onContentChanged: function onContentChanged(content) {
      //console.log(content);
      this.props.onContentChanged(this.props.position, content);
    },

    render: function render() {
      return React.createElement(APP.QuillComponent, {
        content: this.props.content,
        captureReturn: this.captureReturn,
        onContentChanged: this.onContentChanged });
    }

  });

  var OL = React.createClass({
    displayName: 'OL',

    onContentChanged: function onContentChanged(position, content) {
      this.props.content[position].content = content;
      this.props.onContentChanged(this.props.position, this.props.content);
    },

    addItem: function addItem(position) {
      if (position < 0 || position >= this.props.content.length) {
        return;
      }
      var content = this.props.content;
      content.push({
        content: '',
        key: APP.uuid()
      });
      this.props.onContentChanged(this.props.position, content);
    },

    handleItemRemove: function handleItemRemove(action, position) {
      console.log(position);
      if (this.props.content.length < 2) {
        return;
      }
      var content = this.props.content;
      console.log(content);
      content.splice(position, 1);
      console.log(content);
      this.props.onContentChanged(this.props.position, content);
    },

    renderListItem: function renderListItem() {
      var self = this;
      var li = [];
      this.props.content.map(function (item, index) {
        li.push(React.createElement(
          'li',
          { key: item.key },
          React.createElement(APP.BlockControl, {
            onlyRemove: true,
            blockAction: self.handleItemRemove,
            position: index,
            length: self.props.content.length }),
          React.createElement(LI, {
            position: index,
            content: item.content,
            addItem: self.addItem,
            onContentChanged: self.onContentChanged })
        ));
      });
      return li;
    },

    render: function render() {
      return React.createElement(
        'ol',
        { className: 'katap-list' },
        this.renderListItem()
      );
    }
  });

  APP.Blocks.OL = {
    Name: 'OL',
    React: OL,
    Icon: '',
    Empty: function Empty() {
      return [{
        content: '',
        key: APP.uuid()
      }];
    },
    Description: 'Ordered List',
    isEmpty: function isEmpty(content) {
      for (var i = 0; i < content.length; i++) {
        if (content[i].content.replace(/(<([^>]+)>)/ig, '') !== '') {
          return false;
        }
      }
      return true;
    }
  };

  window.Kattappa = APP;
})(window);

(function (window) {
  var APP = window.Kattappa || {};

  var urlRegExp = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;

  function getDomain(url) {
    var a = window.document.createElement("a");
    a.href = url;
    return a.hostname;
  }

  var Embed = React.createClass({
    displayName: 'Embed',

    getInitialState: function getInitialState() {
      return {
        loaded: false,
        domain: '',
        url: ''
      };
    },

    getDefaultProps: function getDefaultProps() {
      return {
        content: ''
      };
    },

    checkUrls: function checkUrls(url, isProp) {
      if (urlRegExp.test(url)) {
        var domain = getDomain(url);
        for (var key in APP.Blocks.Embed.Types) {
          if (domain.indexOf(key) > -1) {
            this.setState({
              loaded: true,
              domain: key,
              url: url
            });
            return;
          }
        }
        alert('This URL is not supported.');
        this.refs.getDOMNode().value = '';
      } else {
        if (!isProp) {
          alert("Enter a valid url");
        }
      }
    },

    handleUrl: function handleUrl(event) {
      if (event.keyCode === APP.Keys.ENTER) {
        this.checkUrls(event.target.value, false);
      }
    },

    componentDidMount: function componentDidMount() {
      this.refs.input.getDOMNode().focus();
      this.checkUrls(this.props.content, true);
    },

    checkContent: function checkContent(ok) {
      if (ok) {
        this.props.onContentChanged(this.props.position, this.state.url);
      } else if (this.props.content === this.state.url) {} else {
        this.setState({
          loaded: false
        });
      }
    },

    renderBlock: function renderBlock() {
      return React.createElement(APP.Blocks.Embed.Types[this.state.domain], {
        url: this.state.url,
        checkContent: this.checkContent
      });
    },

    render: function render() {
      if (this.state.loaded) {
        return this.renderBlock();
      } else {
        return React.createElement(
          'div',
          { className: 'katap-embed' },
          React.createElement('input', {
            ref: 'input',
            type: 'text',
            placeholder: 'Enter URL and press enter',
            onKeyUp: this.handleUrl })
        );
      }
    }
  });

  APP.Blocks.Embed = {
    Name: 'Embed',
    React: Embed,
    Icon: '',
    Empty: function Empty() {
      return '';
    },
    Description: 'Embed',
    isEmpty: function isEmpty(content) {
      return content === '';
    },
    Types: {}
  };
  window.Kattappa = APP;
})(window);

(function (window) {

  var APP = window.Kattappa || {};
  var Types = APP.Blocks.Embed.Types || {};

  var Instagram = React.createClass({
    displayName: 'Instagram',

    getInitialState: function getInitialState() {
      return {
        message: 'Wait',
        id: '',
        valid: false
      };
    },

    getDefaultProps: function getDefaultProps() {
      return {
        url: '',
        regex: /https?:\/\/instagram\.com\/p\/([^\/]+)\/?.*/gi
      };
    },

    componentDidMount: function componentDidMount() {
      this.validate();
    },

    validate: function validate() {
      var match;
      match = this.props.regex.exec(this.props.url);
      this.props.regex.lastIndex = 0;
      if (!match) {
        this.props.checkContent(false);
        this.setState({
          message: 'error.'
        });
        return;
      }
      this.setState({
        message: 'OK.',
        id: match[1],
        valid: true
      });
      this.props.checkContent(true);
    },

    render: function render() {
      if (this.state.valid) {
        return React.createElement(
          'div',
          { className: 'katap-embed katap-instagram' },
          React.createElement('iframe', {
            src: '//instagram.com/p/' + this.state.id + '/embed',
            frameBorder: 0,
            allowFullScreen: true })
        );
      }
      return React.createElement(
        'div',
        { className: 'katap-embed' },
        'Invalid instagram URL.'
      );
    }
  });

  Types.instagram = Instagram;

  APP.Blocks.Embed.Types = Types;
  window.Kattappa = APP;
})(window);

(function (window) {

  var APP = window.Kattappa || {};
  var Types = APP.Blocks.Embed.Types || {};

  var Youtube = React.createClass({
    displayName: 'Youtube',

    getInitialState: function getInitialState() {
      return {
        message: 'Wait',
        id: '',
        valid: false
      };
    },

    getDefaultProps: function getDefaultProps() {
      return {
        url: '',
        regex: /^.*(?:(?:youtu\.be\/)|(?:youtube\.com)\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*)/
      };
    },

    componentDidMount: function componentDidMount() {
      this.validate();
    },

    validate: function validate() {
      var match;
      match = this.props.regex.exec(this.props.url);
      this.props.regex.lastIndex = 0;
      if (!match) {
        this.props.checkContent(false);
        this.setState({
          message: 'error.'
        });
        return;
      }
      this.setState({
        message: 'OK.',
        id: match[1],
        valid: true
      });
      this.props.checkContent(true);
    },

    render: function render() {
      if (this.state.valid) {
        return React.createElement(
          'div',
          { className: 'katap-embed katap-youtube' },
          React.createElement('iframe', {
            src: '//youtube.com/embed/' + this.state.id,
            frameBorder: 0,
            width: 580,
            height: 320,
            allowFullScreen: true })
        );
      }
      return React.createElement(
        'div',
        { className: 'katap-embed' },
        'Invalid youtube URL.'
      );
    }
  });

  Types.youtu = Youtube;

  APP.Blocks.Embed.Types = Types;
  window.Kattappa = APP;
})(window);

(function (window) {

  var APP = window.Kattappa || {};
  var Types = APP.Blocks.Embed.Types || {};

  var Vimeo = React.createClass({
    displayName: 'Vimeo',

    getInitialState: function getInitialState() {
      return {
        message: 'Wait',
        id: '',
        valid: false
      };
    },

    getDefaultProps: function getDefaultProps() {
      return {
        url: '',
        regex: /(?:http[s]?:\/\/)?(?:www.)?vimeo\.co(?:.+(?:\/)([^\/].*)+$)/
      };
    },

    componentDidMount: function componentDidMount() {
      this.validate();
    },

    validate: function validate() {
      var match;
      match = this.props.regex.exec(this.props.url);
      this.props.regex.lastIndex = 0;
      if (!match) {
        this.props.checkContent(false);
        this.setState({
          message: 'error.'
        });
        return;
      }
      this.setState({
        message: 'OK.',
        id: match[1],
        valid: true
      });
      this.props.checkContent(true);
    },

    render: function render() {
      if (this.state.valid) {
        return React.createElement(
          'div',
          { className: 'katap-embed katap-vimeo' },
          React.createElement('iframe', {
            src: '//player.vimeo.com/video/' + this.state.id,
            frameBorder: 0,
            width: 580,
            height: 320,
            allowFullScreen: true })
        );
      }
      return React.createElement(
        'div',
        { className: 'katap-embed' },
        'Invalid vimeo URL.'
      );
    }
  });

  Types.vimeo = Vimeo;

  APP.Blocks.Embed.Types = Types;
  window.Kattappa = APP;
})(window);

(function (window) {
  var APP = window.Kattappa || {};

  var Action = APP.Action;
  var blocks = APP.Blocks;

  var Toolbar = React.createClass({
    displayName: 'Toolbar',

    getInitialState: function getInitialState() {
      return {
        visible: false,
        types: Object.keys(blocks)
      };
    },

    toggleState: function toggleState(e) {
      var nodes = Array.prototype.slice.call(e.currentTarget.children);
      var index = nodes.indexOf(e.target);
      if (index < 0) {
        return;
      }
      this.setState({
        visible: !this.state.visible
      });
      if (!this.state.visible || index === 0) {} else {
        this.props.addBlock(nodes[index].getAttribute('title'), this.props.position);
      }
    },

    addBlock: function addBlock(type, position) {
      this.props.addBlock();
    },

    render: function render() {
      var self = this;
      if (!this.state.visible) {
        return React.createElement(
          'div',
          {
            className: 'katap-toolbar',
            onClick: this.toggleState },
          React.createElement(
            'button',
            { title: 'Add block' },
            '+'
          )
        );
      }
      return React.createElement(
        'div',
        {
          className: 'katap-toolbar',
          onClick: this.toggleState },
        React.createElement(
          'button',
          { title: 'Close' },
          '×'
        ),
        this.state.types.map(function (typ, pos) {
          return React.createElement(
            'button',
            {
              title: typ,
              key: pos },
            blocks[typ].Description
          );
        })
      );
    }
  });

  /*
  ** Handles block positioning. Can remove a block or move it up/down as required.
  */
  var BlockControl = React.createClass({
    displayName: 'BlockControl',

    getDefaultProps: function getDefaultProps() {
      onlyRemove: false;
    },

    handleClick: function handleClick(e) {
      //console.log(e);
      var nodes = Array.prototype.slice.call(e.currentTarget.children);
      var index = nodes.indexOf(e.target);
      if (index < 0) {
        return;
      }
      var action = nodes[index].getAttribute("data-action");
      this.props.blockAction(action, this.props.position);
    },

    getToolbar: function getToolbar(index) {
      // if(index === 0 && this.props.length < 2) {
      //   return null;
      // }
      if (this.props.onlyRemove) {
        return React.createElement(
          'div',
          {
            className: 'katap-control-toolbar',
            onClick: this.handleClick },
          React.createElement(
            'button',
            { title: 'Remove', 'data-action': Action.REMOVE, key: Action.REMOVE },
            '×'
          )
        );
      }
      var buttons = [];
      if (index === 0 && this.props.length < 2) {
        buttons.push(React.createElement(
          'button',
          { title: 'Remove', 'data-action': Action.REMOVE, key: Action.REMOVE },
          '×'
        ));
      } else if (index === 0) {
        buttons.push(React.createElement(
          'button',
          { title: 'Remove', 'data-action': Action.REMOVE, key: Action.REMOVE },
          '×'
        ));
        buttons.push(React.createElement(
          'button',
          { title: 'Move Down', 'data-action': Action.DOWN, key: Action.DOWN },
          '↓'
        ));
      } else if (index === this.props.length - 1) {
        buttons.push(React.createElement(
          'button',
          { title: 'Remove', 'data-action': Action.REMOVE, key: Action.REMOVE },
          '×'
        ));
        buttons.push(React.createElement(
          'button',
          { title: 'Move Up', 'data-action': Action.UP, key: Action.UP },
          '↑'
        ));
      } else {
        buttons.push(React.createElement(
          'button',
          { title: 'Remove', 'data-action': Action.REMOVE, key: Action.REMOVE },
          '×'
        ));
        buttons.push(React.createElement(
          'button',
          { title: 'Move Up', 'data-action': Action.UP, key: Action.UP },
          '↑'
        ));
        buttons.push(React.createElement(
          'button',
          { title: 'Move Down', 'data-action': Action.DOWN, key: Action.DOWN },
          '↓'
        ));
      }
      return React.createElement(
        'div',
        {
          className: 'katap-control-toolbar',
          onClick: this.handleClick },
        buttons
      );
    },

    render: function render() {
      return this.getToolbar(this.props.position);
    }
  });

  APP.Toolbar = Toolbar;
  APP.BlockControl = BlockControl;
  window.Kattappa = APP;
})(window);

(function (window) {
  var APP = window.Kattappa || {};
  var T = React.PropTypes;

  var ExtraEnter = "<div><br></div>";

  if (React.cloneElement) {
    var cloneElement = React.cloneElement;
  } else if (React.addons && React.addons.cloneWithProps) {
    var cloneElement = React.addons.cloneWithProps;
  } else {
    throw new Error('React addons are required when using React 0.12 or less.');
  }

  var defaultItems = [{
    label: 'Text',
    type: 'group',
    items: [{ type: 'bold', label: 'Bold' }, { type: 'italic', label: 'Italic' },
    //{ type:'underline', label:'Underline'},
    { type: 'link', label: 'Link' }]
  }];

  /*
  * Quill Component
  */

  var QuillComponent = React.createClass({
    displayName: 'QuillComponent',

    onConvert: function onConvert(c) {
      console.log(c);
      console.log(c.replace(/(<([^>]+)>)/ig, ""));
    },

    getDefaultProps: function getDefaultProps() {
      return {
        className: 'ql-editor',
        theme: 'base',
        modules: {
          'link-tooltip': true
        },
        content: ''
      };
    },

    enterPressed: function enterPressed() {
      //console.log(this.editor.getSelection());
      if (this.props.enterPressed) {
        this.props.enterPressed();
      }
    },

    getInitialState: function getInitialState() {
      return {
        showToolbar: true
      };
    },

    createEditor: function createEditor($el, config) {
      //console.log(this.props);
      var editor = new Quill($el, config);
      this.hookEditor(editor);
      return editor;
    },

    hookEditor: function hookEditor(editor) {
      editor.on('text-change', (function (delta, source) {
        if (this.onEditorChange) {
          this.onEditorChange(editor.getHTML(), delta, source);
        }
      }).bind(this));

      editor.on('selection-change', (function (range, source) {
        if (this.onEditorChangeSelection) {
          this.onEditorChangeSelection(range, source);
        }
      }).bind(this));
      editor.addModule('enterHandler', {
        keydown: this.captureReturn
      });
      this.setEditorContents(editor, this.props.content);
    },

    focus: function focus() {
      this.state.editor.focus();
    },

    onEditorChange: function onEditorChange(value, delta, source) {
      if (value.indexOf(ExtraEnter) > 0) {
        value = value.replace(ExtraEnter, "");
        this.state.editor.setHTML(value);
        this.state.editor.setSelection(1, 1);
      }
      if (this.props.onContentChanged) {
        this.props.onContentChanged(value);
      }
    },

    captureReturn: function captureReturn() {
      if (this.props.captureReturn) {
        this.props.captureReturn();
      }
    },

    getEditorContents: function getEditorContents() {
      return this.state.content;
    },

    setEditorContents: function setEditorContents(editor, value) {
      var sel = editor.getSelection();
      editor.setHTML(value);
      if (sel) this.setEditorSelection(editor, sel);
    },

    isControlled: function isControlled() {
      return 'value' in this.props;
    },

    getEditorConfig: function getEditorConfig() {
      var config = {
        theme: this.props.theme,
        modules: this.props.modules,
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

    getEditorElement: function getEditorElement() {
      return this.refs.editor.getDOMNode();
    },

    componentDidMount: function componentDidMount() {
      var editor = this.createEditor(this.getEditorElement(), this.getEditorConfig());
      this.setState({ editor: editor });
      editor.focus();
      editor.setHTML(this.props.content);
    },

    renderItems: function renderItems(item, index) {
      return React.createElement('span', {
        className: "ql-format-button ql-" + item.type,
        title: item.label,
        key: index });
    },

    renderGroups: function renderGroups() {
      var self = this;
      var items = this.props.items || defaultItems;
      //console.log(items);
      var groups = items.map(function (item, index) {
        return React.createElement(
          'span',
          { className: "ql-format-" + item.type, key: index },
          item.items.map(self.renderItems)
        );
      });
      return groups;
    },

    render: function render() {
      var visibility = this.state.showToolbar ? 'visible' : 'hidden';
      var self = this;
      return React.createElement(
        'div',
        { className: 'quill-rte' },
        React.createElement(
          'div',
          {
            ref: 'toolbar',
            className: 'ql-toolbar ql-snow',
            style: { visibility: visibility } },
          self.renderGroups()
        ),
        React.createElement('div', { className: 'ql-container ql-snow', ref: 'editor' })
      );
    }

  });

  APP.QuillComponent = QuillComponent;

  window.Kattappa = APP;
})(window);

(function (window) {
  var APP = window.Kattappa || {};
  var T = React.PropTypes;
  var Medium = window.Medium;

  if (React.cloneElement) {
    var cloneElement = React.cloneElement;
  } else if (React.addons && React.addons.cloneWithProps) {
    var cloneElement = React.addons.cloneWithProps;
  } else {
    throw new Error('React addons are required when using React 0.12 or less.');
  }

  var defaultItems = [{
    label: 'Text',
    type: 'group',
    items: [{ type: 'bold', label: 'Bold' }, { type: 'italic', label: 'Italic' },
    //{ type:'underline', label:'Underline'},
    { type: 'link', label: 'Link' }]
  }];

  /*
  * Medium Component
  */

  var MediumComponent = React.createClass({
    displayName: 'MediumComponent',

    onConvert: function onConvert(c) {
      console.log(c);
      console.log(c.replace(/(<([^>]+)>)/ig, ""));
    },

    getDefaultProps: function getDefaultProps() {
      return {
        className: 'katap-medium-editor',
        theme: 'base',
        modules: {
          'link-tooltip': true
        },
        content: ''
      };
    },

    enterPressed: function enterPressed() {
      console.log(this.editor.getSelection());
      if (this.props.enterPressed) {
        this.props.enterPressed();
      }
    },

    getInitialState: function getInitialState() {
      return {
        showToolbar: true
      };
    },

    createEditor: function createEditor($el, config) {
      var editor = new Medium(this.getEditorConfig());
      //this.hookEditor(editor);
      return editor;
    },

    hookEditor: function hookEditor(editor) {
      editor.on('text-change', (function (delta, source) {
        if (this.onEditorChange) {
          this.onEditorChange(editor.getHTML(), delta, source);
        }
      }).bind(this));

      editor.on('selection-change', (function (range, source) {
        if (this.onEditorChangeSelection) {
          this.onEditorChangeSelection(range, source);
        }
      }).bind(this));
      editor.addModule('enterHandler', {
        keydown: this.captureReturn
      });
      this.setEditorContents(editor, this.props.content);
    },

    focus: function focus() {
      this.state.editor.focus();
    },

    onEditorChange: function onEditorChange(value, delta, source) {
      if (value.indexOf(ExtraEnter) > 0) {
        value = value.replace(ExtraEnter, "");
        this.state.editor.setHTML(value);
        this.state.editor.setSelection(1, 1);
      }
      if (this.props.onContentChanged) {
        this.props.onContentChanged(value);
      }
    },

    captureReturn: function captureReturn() {
      if (this.props.captureReturn) {
        this.props.captureReturn();
      }
    },

    getEditorContents: function getEditorContents() {
      return this.state.content;
    },

    setEditorContents: function setEditorContents(editor, value) {
      var sel = editor.getSelection();
      editor.setHTML(value);
      if (sel) this.setEditorSelection(editor, sel);
    },

    isControlled: function isControlled() {
      return 'value' in this.props;
    },

    getEditorConfig: function getEditorConfig() {
      var config = {
        element: this.getEditorElement(),
        mode: Medium.inlineRichMode,
        tags: {
          'innerLevel': ['a', 'b', 'i'],
          'break': 'br',
          'horizontalRule': 'hr',
          'paragraph': 'p'
        },
        cssClasses: {
          editor: 'Medium',
          pasteHook: 'Medium-paste-hook',
          placeholder: 'Medium-placeholder',
          clear: 'Medium-clear'
        },
        attributes: {
          remove: ['style', 'class']
        },
        pasteAsText: false
      };
      return config;
    },

    getEditorElement: function getEditorElement() {
      return this.refs.editor.getDOMNode();
    },

    componentDidMount: function componentDidMount() {
      var editor = this.createEditor(this.getEditorConfig());
      this.setState({ editor: editor });
      editor.focus();
      console.log(editor);
      //editor.setHTML(this.props.content);
    },

    renderItems: function renderItems(item, index) {
      return React.createElement('span', {
        className: "ql-format-button ql-" + item.type,
        title: item.label,
        key: index });
    },

    renderGroups: function renderGroups() {
      var self = this;
      var items = this.props.items || defaultItems;
      //console.log(items);
      var groups = items.map(function (item, index) {
        return React.createElement(
          'span',
          { className: "ql-format-" + item.type, key: index },
          item.items.map(self.renderItems)
        );
      });
      return groups;
    },

    render: function render() {
      //var visibility = (this.state.showToolbar) ? 'visible': 'hidden';
      var visibility = 'visible';
      var self = this;
      return React.createElement(
        'div',
        { className: 'katap-medium-rte' },
        React.createElement(
          'div',
          {
            ref: 'toolbar',
            className: 'katap-medium-toolbar',
            style: { visibility: visibility } },
          self.renderGroups()
        ),
        React.createElement('div', { className: 'katap-medium-container', ref: 'editor' })
      );
    }

  });

  APP.MediumComponent = MediumComponent;

  window.Kattappa = APP;
})(window);

(function (window) {
  var APP = window.Kattappa || {};

  var initialState = {
    blocks: []
  };

  var Action = APP.Action;

  var Editor = React.createClass({
    displayName: 'Editor',

    getInitialState: function getInitialState() {
      return initialState;
    },

    getDefaultProps: function getDefaultProps() {
      return {
        blockUrl: ''
      };
    },

    componentDidMount: function componentDidMount() {
      var self = this;
      if (this.props.blockUrl !== '') {
        fetch(self.props.blockUrl, {
          credentials: 'same-origin',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            var error = new Error(response.statusText);
            error.response = response;
            throw error;
          }
        }).then(function (json) {
          if (self.props.processData) {
            self.setState({
              blocks: self.props.processData(json)
            });
          } else {
            console.warn('Provide a function to process blocks.');
          }
        })['catch'](function (e) {
          console.error(e);
        });
      }
    },

    handleBlockAction: function handleBlockAction(action, position) {
      var newBlocks = this.state.blocks;
      if (action === Action.REMOVE) {
        if (APP.Blocks[newBlocks[position].type].isEmpty(newBlocks[position].content) || confirm('Sure?')) {
          newBlocks.splice(position, 1);
        } else {
          return;
        }
      } else if (action === Action.UP) {
        newBlocks.splice(position - 1, 2, newBlocks[position], newBlocks[position - 1]);
      } else if (action === Action.DOWN) {
        newBlocks.splice(position, 2, newBlocks[position + 1], newBlocks[position]);
      }
      this.setState({
        blocks: newBlocks
      });
    },

    addBlock: function addBlock(type, position) {
      if (position < 0 || position > this.state.blocks.length) {
        return;
      }
      var newBlock = {
        type: type,
        content: APP.Blocks[type].Empty(),
        key: APP.uuid()
      };
      var newBlocks = this.state.blocks;
      newBlocks.splice(position + 1, 0, newBlock);
      this.setState({
        blocks: newBlocks
      });
    },

    contentChange: function contentChange(position, content) {
      var newBlocks = this.state.blocks;
      newBlocks[position].content = content;
      this.setState({
        blocks: newBlocks
      });
    },

    getToolbar: function getToolbar(index) {
      return React.createElement(APP.BlockControl, {
        blockAction: this.handleBlockAction,
        position: index,
        length: this.state.blocks.length });
    },

    renderBlocks: function renderBlocks() {
      var self = this;
      var blocks = this.props.blocks || this.state.blocks;
      if (blocks.length < 1) {
        return React.createElement(APP.Toolbar, {
          position: 0,
          addBlock: this.addBlock });
      }
      var rndr = blocks.map(function (block, index) {

        return React.createElement("div", { key: block.key, className: "katap-container" }, self.getToolbar(index), React.createElement(APP.Blocks[block.type].React, {
          ref: 'block' + index,
          position: index,
          content: block.content,
          addBlock: self.addBlock,
          onContentChanged: self.contentChange }), React.createElement(APP.Toolbar, {
          position: index,
          addBlock: self.addBlock }));
      });
      return rndr;
    },

    passBlocks: function passBlocks() {
      if (this.props.onSave) {
        this.props.onSave(this.state.blocks);
      }
    },

    render: function render() {
      if (this.state.blocks.length > 0) {
        return React.createElement(
          'div',
          { className: 'katap-listing' },
          React.createElement(
            'button',
            {
              onClick: this.passBlocks,
              className: 'katap-savebtn' },
            'Save'
          ),
          this.renderBlocks()
        );
      }
      return React.createElement(
        'div',
        { className: 'katap-listing' },
        this.renderBlocks()
      );
    }
  });

  APP.Editor = Editor;
  window.Kattappa = APP;
})(window);
//# sourceMappingURL=maps/kattappa.js.map