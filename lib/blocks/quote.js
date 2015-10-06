import React from 'react';

import BlockText from './text';

// var mediumOptions = {
//     toolbar: {
//         buttons: [
//           'bold',
//           'italic',
//           'underline',
//           'anchor',
//           'strikethrough',
//           'removeFormat'
//         ]
//     },
//     autoLink: true,
//     imageDragging: false,
// };

class BlockQuote extends BlockText.React {

  constructor(props) {
    super(props);
    this.onContentChanged = this.onContentChanged.bind(this);
    this.onCreditChange = this.onCreditChange.bind(this);
  }

  onContentChanged(content) {
    var content = {
      content: content,
      credit: this.props.content.credit
    };
    if(this.props.onContentChanged) {
      this.props.onContentChanged(this.props.position, content);
    }
  }

  onCreditChange(e) {
    var content = {
      content: this.props.content.content,
      credit: e.target.value
    };
    if(this.props.onContentChanged) {
      this.props.onContentChanged(this.props.position, content);
    }
  }

  render() {
    console.log(this.props);
    var TextComponent = this.props.rteBlock;
    return (
      <blockquote className="katap-block katap-text">
        <TextComponent
          content={this.props.content.content}
          onContentChanged={this.onContentChanged} />
        <input
          className="katap-blockquote-credit"
          type="text"
          placeholder="Credit"
          onChange={this.onCreditChange}
          value={this.props.content.credit} />
      </blockquote>
    );
  }
}


let Quote = {
  Name: 'quote',
  React: BlockQuote,
  Icon: '',
  Empty: function() {
    return {
      content: '',
      credit: ''
    };
  },
  Description: 'Block Quote',
  isEmpty: function(content) {
    return (content['content'].replace(/(<([^>]+)>)/ig,'') === '');
  }
};

BlockQuote.defaultProps = {
  content: Quote.Empty()
};

export default Quote;
