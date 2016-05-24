import React from 'react';
import Action from '../utils/action';

class BlockControl extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.getToolbar = this.getToolbar.bind(this);
  }

  handleClick(e) {
    var nodes = Array.prototype.slice.call(e.currentTarget.children);
    var index = nodes.indexOf(e.target);
    if(index < 0) {
      return;
    }
    var action = nodes[index].getAttribute("data-action");
    this.props.blockAction(action, this.props.position);
  }

  getToolbar(index) {
    if(this.props.onlyRemove) {
      return (
        <div
          className={this.props.className}
          onClick={this.handleClick}>
          <button title="Remove" data-action={Action.REMOVE} key={Action.REMOVE}>&times;</button>
        </div>
      );
    }
    var buttons = [];
    if(index === 0 && this.props.length < 2) {
      buttons.push(<button title="Delete" data-action={Action.REMOVE} key={Action.REMOVE}>&times;</button>);
    } else if(index === 0) {
      buttons.push(<button title="Delete" data-action={Action.REMOVE} key={Action.REMOVE}>&times;</button>);
      buttons.push(<button title="Move Down" data-action={Action.DOWN} key={Action.DOWN}>↓</button>);
    } else if(index === this.props.length-1) {
      buttons.push(<button title="Delete" data-action={Action.REMOVE} key={Action.REMOVE}>&times;</button>);
      buttons.push(<button title="Move Up" data-action={Action.UP} key={Action.UP}>↑</button>);
    } else {
      buttons.push(<button title="Delete" data-action={Action.REMOVE} key={Action.REMOVE}>&times;</button>);
      buttons.push(<button title="Move Up" data-action={Action.UP} key={Action.UP}>↑</button>);
      buttons.push(<button title="Move Down" data-action={Action.DOWN} key={Action.DOWN}>↓</button>);
    }
    return (
      <div
        className={this.props.className}
        onClick={this.handleClick}>
        {buttons}
      </div>
    );
  }

  render() {
    return this.getToolbar(this.props.position);
  }
}

BlockControl.defaultProps = {
  onlyRemove: false,
  className: "katap-control-toolbar"
};

export default BlockControl;
