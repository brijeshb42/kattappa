import React from 'react';
import OL from './ol';
import {uuid} from '../utils';

class BlockUL extends OL.React {
  render() {
    return (
      <ul className="katap-block katap-list">
      {this.renderListItem()}
      </ul>
    );
  }
}

let UL = {
  Name: 'UL',
  React: BlockUL,
  Icon: '',
  Empty: function() {
    return [{
      content: '',
      key: uuid()
    }];
  },
  Description: 'Unordered List',
  isEmpty: function(content) {
    for(var i = 0; i<content.length; i++) {
      if(content[i].content.replace(/(<([^>]+)>)/ig,'') !== '') {
        return false
      }
    }
    return true;
  }
};

BlockUL.defaultProps = {
  content: UL.Empty()
};

export default UL;
