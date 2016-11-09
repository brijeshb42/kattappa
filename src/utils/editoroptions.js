import MediumEditor from 'medium-editor';
import HTMLJanitor from 'html-janitor';


const janitorConfig = {
  tags: {
    p: {},
    a: {
      href: true,
      target: true,
    },
    strong: {},
    b: {},
    em: {},
    i: {},
    u: {},
    br: {},
    strike: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    ul: {},
    li: {},
  }
};

const janitor = new HTMLJanitor(janitorConfig);

function dumbToSmartQuotes(str) {
  str = str.replace(/([a-zA-Z0-9.,?!;:\'\"])\"/g, '$1”');
  str = str.replace(/\"/g, '“');
  str = str.replace(/=“(.*?)”/g, '="$1"')

  str = str.replace(/([a-zA-Z0-9.,?!;:\"\'])\'/gi, '$1’');
  str = str.replace(/\'/g, '‘');
  str = str.replace(/=‘(.*?)’/g, "='$1'");
  return str;
}

function getClipboardContent(event, win, doc) {
  var dataTransfer = event.clipboardData || win.clipboardData || doc.dataTransfer,
    data = {};

  if (!dataTransfer) {
    return data;
  }

  // Use old WebKit/IE API
  if (dataTransfer.getData) {
    var legacyText = dataTransfer.getData('Text');
    if (legacyText && legacyText.length > 0) {
      data['text/plain'] = legacyText;
    }
  }

  if (dataTransfer.types) {
    for (var i = 0; i < dataTransfer.types.length; i++) {
      var contentType = dataTransfer.types[i];
      data[contentType] = dataTransfer.getData(contentType);
    }
  }

  return data;
}


export const CustomPasteHandler = MediumEditor.extensions.paste.extend({
    cleanPastedHTML: true,
    forcePlainText: true,
    cleanPastedHTML: true,
    cleanReplacements: [[/<!--[^>]*-->/gi, '']],
    cleanAttrs: ['class', 'dir', 'style', 'name', 'id'],
    cleanTags: [
      'label', 'meta', 'aside', 'h1',
      'span', 'code', 'pre', 'img', 'code',
    ],
    handlePaste: function (event) {
      event.preventDefault();
      let html = '';
      let data = getClipboardContent(event, this.window, this.document);
      let pastedHTML = data['text/html'];
      let pastedPlain = data['text/plain'];
      console.log(pastedHTML);
      if (!pastedHTML) {
        MediumEditor.extensions.paste.prototype.handlePaste.apply(this, arguments);
        return;
      } else {
        html = dumbToSmartQuotes(janitor.clean(pastedHTML));
      }
      if (html) {
        this.pasteHTML(html);
      }
    },
    handlePasteBinPaste: function (event) {
      event.preventDefault();
      this.removePasteBin();
      let html = '';
      let data = getClipboardContent(event, this.window, this.document);
      let pastedHTML = data['text/html'];
      let pastedPlain = data['text/plain'];
      if (!pastedHTML) {
        MediumEditor.extensions.paste.prototype.handlePaste.apply(this, arguments);
        return;
      } else {
        html = dumbToSmartQuotes(janitor.clean(pastedHTML));
      }
      if (html) {
        this.pasteHTML(html);
      }
    }
});

// export const AutoList = MediumEditor.Extension.extend({
//   name: 'autolist',
//   init: function(){
//     this.subscribe('editableKeypress', this.onKeypress.bind(this));
//   },
//   onKeypress: function (keyPressEvent) {
//    if (MediumEditor.util.isKey(keyPressEvent, [MediumEditor.util.keyCode.SPACE])) {
//       var list_start = this.base.getSelectedParentElement().textContent;
//       console.log(list_start);
//       console.log(this.base.getExtensionByName('orderedlist'));
//       if (list_start == "1."){
//         console.log(this.base.getSelectedParentElement());
//         this.base.execAction('insertorderedlist');
//         this.base.getSelectedParentElement().textContent = this.base.getSelectedParentElement().textContent.slice(2).trim();
//       }
//       else if( list_start == "*"){
//         this.base.execAction('insertunorderedlist');
//         this.base.getSelectedParentElement().textContent = this.base.getSelectedParentElement().textContent.slice(1).trim();
//       }
//     }
//   },
// });


const getConfig = () => {
  return {
    toolbar: {
        buttons: [
          'bold',
          'italic',
          'underline',
          'anchor',
          'strikethrough',
        ]
    },
    autoLink: false,
    imageDragging: false,
    placeholder: {
        text: 'Write your story...'
    },
    paste: {
      forcePlainText: true,
      cleanPastedHTML: true,  
      cleanReplacements: [[/<!--[^>]*-->/gi, '']],
      cleanAttrs: ['class', 'dir', 'style', 'name', 'id'],
      cleanTags: ['label', 'meta', 'aside', 'span']
    },
    disableExtraSpaces: false,
    extensions: {
      imageDragging: {},
      paste: new CustomPasteHandler(),
      // autolist: new AutoList(),
    }
  };
};


export default getConfig;
