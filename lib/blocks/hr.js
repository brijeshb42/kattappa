import React from 'react';

class BlockHR extends React.Component {

  render() {
    return (
      <hr className="katap-hr" />
    );
  }

}

let HR = {
  Name: 'HR',
  React: BlockHR,
  Icon: '',
  Empty: function() {
    return '';
  },
  Description: 'Break',
  isEmpty: function(content) {
    return true;
  }
};

export default HR;
