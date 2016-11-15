import React from 'react';

import TextComponent from '../components/scribe';
// import getConfig from '../utils/editoroptions';
import { baseInlineOptions } from '../components/scribe-options';
import BlockText from './text';


class BlockH2 extends BlockText.React {

  captureReturn() {
    this.props.addBlock("text", this.props.position);
  }

  render() {
    return (
      <h2 className="katap-block katap-h2">
        <TextComponent
          //showToolbar={false}
          options={baseInlineOptions}
          content={this.props.content}
          captureReturn={this.captureReturn}
          onContentChanged={this.onContentChanged}
          placeholder="Heading"
          enterCapture />
      </h2>
    );
  }

}

let H2 = {
  Name: 'h2',
  React: BlockH2,
  Icon: '',
  Empty: function() {
    return '<p><br></p>';
  },
  maximumBlocks: 0,
  Description: 'Heading',
  isEmpty: function(content) {
    return (content.replace(/(<([^>]+)>)/ig,'') === '');
  }
};

export default H2;
