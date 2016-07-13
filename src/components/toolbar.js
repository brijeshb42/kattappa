import React from 'react';

import Action from '../utils/action';
import Blocks from '../blocks/';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
    // this.toggleState = this.toggleState.bind(this);
    this.addBlock = this.addBlock.bind(this);
  }

  // add(type) {
  //   // console.log(e);
  //   // const node = e.target;
  //   this.props.addBlock(type, this.props.position);
  // }

  addBlock(type) {
    this.props.addBlock(type);
  }

  render() {
    var self = this;
    var Blocks = this.props.availableBlocks;
    return (
      <div className="katap-toolbar">
        {Object.keys(Blocks).map((typ, pos) => {
          return (
            <button
              title={Blocks[typ].Description}
              key={typ}
              onClick={() => this.addBlock(typ)}>
              <i className={"fa fa-lg fa-" + Blocks[typ].Icon} />
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
