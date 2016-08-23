export const baseOptions = {
  tags: {
    p: {},
    br: false,
    b: {},
    strong: {},
    i: {},
    em: {},
    strike: {},
    ol: {},
    ul: {},
    li: {},
    a: { href: true, target: true, },
    h2: {},
    h3: {},
    u: {},
  },
};


export const baseTextOptions = Object.assign({}, baseOptions, {
  tags: Object.assign({}, baseOptions.tags, {
    blockquote: {},
  })
});


export const baseInlineOptions = {
  tags: {
    br: false,
    b: {},
    strong: {},
    em: {},
    i: {},
    u: {},
    a: { href: true, target: true },
    strike: {},
  },
};


export const toolbarButtons = [{
  command: 'bold',
  icon: 'bold',
}, {
  command: 'italic',
  icon: 'italic',
}, {
  command: 'underline',
  icon: 'underline',
}, {
  command: 'link',
  icon: 'link',
}, {
  command: 'strikeThrough',
  icon: 'strikethrough',
}];


const normalizeLink = (link) => {
  if (link.indexOf('@') >= 0) {
    return 'mailto:' + link;
  }
  if (link.indexOf('+') == 0) {
    return 'tel:' + link;
  }
  if (link.indexOf('http://') != 0 || link.indexOf('https://')) {
    return 'http://' + link;
  }
  return link;
};


export const linkCommand = function () {
  return function (scribe) {
    const linkPromptCommand = new scribe.api.Command('createLink');
    linkPromptCommand.nodeName = 'A';

    linkPromptCommand.execute = function (passedLink) {
      const selection = new scribe.api.Selection();
      const range = selection.range;
      const anchorNode = selection.getContaining((node) => {
        return node.nodeName === this.nodeName;
      });

      // const initialLink = anchorNode ? anchorNode.href : '';
      if (anchorNode) {
        range.selectNode(anchorNode);
        selection.selection.removeAllRanges();
        selection.selection.addRange(range);
      }
      if (passedLink) {
        scribe.api.SimpleCommand.prototype.execute.call(this, normalizeLink(passedLink));
      }
    };

    linkPromptCommand.queryState = function() {
      const selection = new scribe.api.Selection();
      return !! selection.getContaining(function (node) {
        return node.nodeName === this.nodeName;
      }.bind(this));
    };

    linkPromptCommand.getCurrentLink = function() {
      const selection = new scribe.api.Selection();
      const range = selection.range;
      const anchorNode = selection.getContaining((node) => {
        return node.nodeName === this.nodeName;
      });
      return anchorNode ? anchorNode.href : '';
    };

    scribe.commands.setLink = linkPromptCommand;
  };
};

export const isEditorEmpty = (scribe) => {
  var childNodes = scribe.el.childNodes;
  var blockCount = childNodes.length;

  if (blockCount === 0) {
    return true;
  } else if (blockCount === 1) {
    var node = childNodes[0];
    var nodeName = node.nodeName.toLowerCase();

    if (nodeName === 'p' && node.textContent === '')   {
      return true;
    }
  }

  return false;
};
