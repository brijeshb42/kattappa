(function(window) {

  'use strict';

  var Quill = window.Quill || null;
  var React = window.React;
  if(!React) {
    throw new Error('React is required for this project to function.');
  }
  React.initializeTouchEvents(true);
  if(!Quill) {
    throw new Error('Quill is required for this project to function.');
  }

  var APP = window.LegoBlocks || {};

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
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
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

  window.LegoBlocks = APP;

  var QuillEnterHandler = function(quill, options) {
    //console.log('init enter handler');
    this.quill = quill;
    this.options = options;

    var enterKey = Quill.require('dom').KEYS.ENTER;

    if(options && options.keyup && typeof options.keyup === 'function') {
      quill.editor.root.addEventListener('keyup', function(event) {
        if(event.keyCode === enterKey) {
          event.preventDefault();
          event.stopPropagation();
          options.keyup.call(null, event);
        }
      });
    }
    if(options && options.keydown && typeof options.keydown === 'function') {
      quill.editor.root.addEventListener('keydown', function(event) {
        if(event.keyCode === enterKey) {
          event.preventDefault();
          event.stopPropagation();
          options.keydown.call(null, event);
        }
      });
    }
  };

  Quill.registerModule('enterHandler', QuillEnterHandler);

})(window);
