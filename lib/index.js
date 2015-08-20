import Quill from 'quill';
import Action from './utils/action';
import Keys from './utils/keys';
import {uuid} from './utils';

import Editor from './editor';
import Blocks from './blocks';

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

module.exports = {
  Editor: Editor,
  Blocks: Blocks,
  Keys: Keys,
  Action: Action
};
