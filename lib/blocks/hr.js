import React from 'react';

class BlockHR extends React.Component {

  render() {
    return (
      <hr className="katap-block katap-hr" />
    );
  }

}

let HR = {
  Name: 'hr',
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
