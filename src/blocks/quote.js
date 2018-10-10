import React from 'react';

import { baseOptions } from '../components/scribe-options';
import BlockText from './text';
import TextComponent from '../components/scribe';

class BlockQuote extends BlockText.React {

  constructor(props) {
    super(props);
    this.onContentChanged = this.onContentChanged.bind(this);
    this.onCreditChange = this.onCreditChange.bind(this);
  }

  onContentChanged(content) {
    var modContent = {
      content: content,
      credit: this.props.content.credit
    };
    if(this.props.onContentChanged) {
      this.props.onContentChanged(this.props.position, modContent);
    }
  }

  onCreditChange(e) {
    var modContent = {
      content: this.props.content.content,
      credit: e.target.value
    };
    if(this.props.onContentChanged) {
      this.props.onContentChanged(this.props.position, modContent);
    }
  }

  render() {
    return (
      <blockquote className="katap-block katap-text">
        <TextComponent
          options={baseOptions}
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
      content: '<p><br></p>',
      credit: ''
    };
  },
  maximumBlocks: 0,
  Description: 'Block Quote',
  isEmpty: function(content) {
    return (content['content'].replace(/(<([^>]+)>)/ig,'') === '');
  }
};

BlockQuote.defaultProps = {
  content: Quote.Empty()
};

export default Quote;
