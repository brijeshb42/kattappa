import React from 'react';

import BaseBlock from './base';

class BlockHR extends BaseBlock {

  render() {
    return (
      <hr className="katap-block katap-hr" onClick={this.setPosition} />
    );
  }

}

let HR = {
  Name: 'hr',
  React: BlockHR,
  Icon: 'ellipsis-h',
  Empty: function() {
    return '';
  },
  maximumBlocks: 0,
  Description: 'Break',
  isEmpty: function(content) {
    return true;
  }
};

export default HR;
