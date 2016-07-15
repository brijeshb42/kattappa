import React from 'react';

import TextComponent from '../components/scribe';
import BaseBlock from './base';
import { baseTextOptions } from '../components/scribe-options';

class BlockText extends BaseBlock {

  constructor(props) {
    super(props);
    this.captureReturn = this.captureReturn.bind(this);
    this.splitBlock = this.splitBlock.bind(this);
  }

  captureReturn() {
    this.props.addBlock(Text.Name, this.props.position);
  }

  splitBlock(e) {
    this.props.splitBlock(this.props.position);
  }

  render() {
    return (
      <div className="katap-block katap-text" onClick={this.onFocus}>
        <TextComponent
          content={this.props.content}
          options={baseTextOptions}
          onFocus={this.onFocus}
          onContentChanged={this.onContentChanged} />
      </div>
    );
  }
}

let Text = {
  Name: 'text',
  React: BlockText,
  Icon: 'text-height',
  Empty: function() {
    return '<p><br></p>';
  },
  maximumBlocks: 0,
  Description: 'Text',
  isEmpty: function(content) {
    return (content.replace(/(<([^>]+)>)/ig,'') === '');
  },
};

export default Text;
