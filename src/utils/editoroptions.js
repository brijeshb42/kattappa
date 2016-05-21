export default {
    toolbar: {
        buttons: [
          'bold',
          'italic',
          'underline',
          'anchor',
          'strikethrough'
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
      imageDragging: {}
    }
};
