import React from 'react';

import TextComponent from '../components/scribe';
import BaseBlock from './base';
import { baseTextOptions } from '../components/scribe-options';

class BlockText extends BaseBlock {

  constructor(props) {
    super(props);
    this.captureReturn = this.captureReturn.bind(this);
  }

  captureReturn() {
    this.props.addBlock(Text.Name, this.props.position);
  }

  splitBlockAtCurrentCursorPosition() {
    return this.refs.text.splitAtCursor();
    // console.log(this.props.content);
    // return this.props.content;
  }

  render() {
    return (
      <div className="katap-block katap-text" onClick={this.onFocus}>
        <TextComponent
          ref="text"
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
