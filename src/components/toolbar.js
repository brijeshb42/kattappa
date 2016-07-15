import React from 'react';

import Action from '../utils/action';
import Blocks from '../blocks/';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
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
              onClick={() => this.props.addBlock(typ)}>
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
