import React from 'react';

import { baseOptions } from '../utils/editoroptions';
import BlockText from './text';
import TextComponent from '../components/scribe';

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
    return (
      <blockquote className="katap-block katap-text">
        <TextComponent
          content={this.props.content.content}
          options={ baseOptions }
          onFocus={this.onFocus}
          onContentChanged={this.onContentChanged} />
        <input
          className="katap-blockquote-credit"
          type="text"
          placeholder="Credit"
          onFocus={this.onFocus}
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

/*

        <TextComponent
          content={this.props.content.credit}
          onChange={this.onCreditChange}
          inline
          enterCapture />*/
