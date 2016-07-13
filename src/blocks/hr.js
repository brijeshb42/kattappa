import React from 'react';

class BlockHR extends React.Component {

  constructor(props) {
    super(props);
    this.setPosition = this.setPosition.bind(this);
  }

  componentDidMount() {
    this.setPosition();
  }

  componentWillUnmount() {
    this.props.setCurrentBlock(this.props.position - 1);
  }

  setPosition() {
    this.props.setCurrentBlock(this.props.position);
  }

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
    return '-';
  },
  maximumBlocks: 0,
  Description: 'Break',
  isEmpty: function(content) {
    return content !== '-';
  }
};

export default HR;
