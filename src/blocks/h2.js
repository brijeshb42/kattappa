import React from 'react';

import MediumComponent from '../components/medium';
import getConfig from '../utils/editoroptions';
import BlockText from './text';


class BlockH2 extends BlockText.React {

  captureReturn() {
    this.options = getConfig();
    this.props.addBlock("text", this.props.position);
  }

  render() {
    return (
      <h2 className="katap-block katap-h2">
        <MediumComponent
          //showToolbar={false}
          options={this.options}
          content={this.props.content}
          captureReturn={this.captureReturn}
          enterCapture={true}
          onContentChanged={this.onContentChanged} />
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
