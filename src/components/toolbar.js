import React from 'react';

import Blocks from '../blocks/';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.toggleState = this.toggleState.bind(this);
    this.addBlock = this.addBlock.bind(this);
  }

  toggleState(e) {
    var nodes = Array.prototype.slice.call(e.currentTarget.children);
    var index = nodes.indexOf(e.target);
    if(index < 0) {
      return;
    }
    this.setState({
      visible: !this.state.visible
    });
    if(!this.state.visible || index === 0) {
    } else {
      this.props.addBlock(nodes[index].getAttribute('title'), this.props.position);
    }
  }

  addBlock(type, position) {
    this.props.addBlock()
  }

  render() {
    var Blocks = this.props.availableBlocks;
    if(!this.state.visible) {
      return (
        <div
          className="katap-toolbar"
          onClick={this.toggleState}>
          <button title="Add block">+</button>
        </div>
      );
    }
    return (
      <div
        className="katap-toolbar"
        onClick={this.toggleState}>
        <button title="Close">&times;</button>
        {Object.keys(Blocks).map(function(typ, pos) {
          return (
            <button
              title={typ}
              key={pos}>
              {Blocks[typ].Description}
            </button>
          );
        })}
      </div>
    );
  }
}

Toolbar.defaultProps = {
  availableBlocks: Blocks
};

export default Toolbar;
