import sanitizeHtml from 'sanitize-html';

const options = {
  // tags: {
  //   p: {},
  //   a: {href: true, alt: true, title: true},
  //   b: {},
  //   i: {},
  //   u: {},
  //   strong: {},
  //   em: {},
  //   strike: {},
  //   blockquote: {}
  // },
  allowedTags: [ 'b', 'i', 'em', 'strong', 'a', 'strike', 'p', 'ul', 'li', 'ol', 'blockquote'],
  allowedAttributes: {
    'a': [ 'href', 'title', 'alt' ]
  }
};

const BR_SEP = /<br\/?>/gi;

const cleanupBreaks = (html) => {
  let cleanHTML = '';
  const mainNode = document.createElement('div');
  mainNode.innerHTML = html;
  var childNodes = mainNode.childNodes;
  for (let i = 0; i < childNodes.length; i++) {
    var node = childNodes[i];
    if(node.innerHTML.length < 2) {
      continue;
    }
    if(node.tagName.toLowerCase() !== 'p') {
      cleanHTML += node.outerHTML;
      continue;
    }
    if(node.innerHTML.trim() == '<br>' || node.innerHTML.length <= 1) {
      continue;
    }
    var parts = node.innerHTML.split(BR_SEP);
    var txt = '';
    if(parts.length < 1) {
      txt = node.innerHTML.replace(/&nbsp;/g, ' ').trim();
      if(txt.length < 1) {
        continue;
      }
      cleanHTML += '<'+node.tagName.toLowerCase()+'>'+ txt +'</'+node.tagName.toLowerCase()+'>';
    }
    for(var j=0; j<parts.length; j++) {
      if(parts[j].length < 1) {
        continue;
      }
      txt = parts[j].replace(/&nbsp;/g, ' ').trim();
      if(txt.length < 1) {
        continue;
      }
      cleanHTML += '<'+node.tagName.toLowerCase()+'>'+ txt +'</'+node.tagName.toLowerCase()+'>';
    }
  }
  if(cleanHTML === '') {
    return html;
  }
  console.log('cleaned');
  console.log(cleanHTML);
  return cleanHTML;
};

// let janitor = new Janitor(options)

export default (html) => {
  console.log('original');
  console.log(html);
  return cleanupBreaks(sanitizeHtml(html));
}
