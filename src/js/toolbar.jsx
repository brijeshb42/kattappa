(function(window) {
  var APP = window.Katappa || {};

  var Action = APP.Action;
  var blocks = APP.Blocks;

  var Toolbar = React.createClass({
    getInitialState: function() {
      return {
        visible: false,
        types: Object.keys(blocks)
      };
    },

    toggleState: function(e) {
      var nodes = Array.prototype.slice.call(e.currentTarget.children);
      var index = nodes.indexOf( e.target );
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
    },

    addBlock: function(type, position) {
      this.props.addBlock()
    },

    render: function() {
      var self = this;
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
          {this.state.types.map(function(typ, pos) {
              return (
                <button
                  title={typ}
                  key={pos}>
                  {blocks[typ].Description}
                </button>
              );
            })}
        </div>
      );
    }
  });

  /*
  ** Handles block positioning. Can remove a block or move it up/down as required.
  */
  var BlockControl = React.createClass({

    getDefaultProps: function() {
      onlyRemove: false
    },

    handleClick: function(e) {
      //console.log(e);
      var nodes = Array.prototype.slice.call(e.currentTarget.children);
      var index = nodes.indexOf(e.target);
      if(index < 0) {
        return;
      }
      var action = nodes[index].getAttribute("data-action");
      this.props.blockAction(action, this.props.position);
    },

    getToolbar: function(index) {
      // if(index === 0 && this.props.length < 2) {
      //   return null;
      // } 
      if(this.props.onlyRemove) {
        return (
          <div
            className="katap-control-toolbar"
            onClick={this.handleClick}>
            <button title="Remove" data-action={Action.REMOVE} key={Action.REMOVE}>&times;</button>
          </div>
        );
      }
      var buttons = [];
      if(index === 0 && this.props.length < 2) {
        buttons.push(<button title="Remove" data-action={Action.REMOVE} key={Action.REMOVE}>&times;</button>);
      } else if(index === 0) {
        buttons.push(<button title="Remove" data-action={Action.REMOVE} key={Action.REMOVE}>&times;</button>);
        buttons.push(<button title="Move Down" data-action={Action.DOWN} key={Action.DOWN}>↓</button>);
      } else if(index === this.props.length-1) {
        buttons.push(<button title="Remove" data-action={Action.REMOVE} key={Action.REMOVE}>&times;</button>);
        buttons.push(<button title="Move Up" data-action={Action.UP} key={Action.UP}>↑</button>);
      } else {
        buttons.push(<button title="Remove" data-action={Action.REMOVE} key={Action.REMOVE}>&times;</button>);
        buttons.push(<button title="Move Up" data-action={Action.UP} key={Action.UP}>↑</button>);
        buttons.push(<button title="Move Down" data-action={Action.DOWN} key={Action.DOWN}>↓</button>);
      }
      return (
        <div
          className="katap-control-toolbar"
          onClick={this.handleClick}>
          {buttons}
        </div>
      );
    },

    render: function() {
      return this.getToolbar(this.props.position);
    }
  });

  APP.Toolbar = Toolbar;
  APP.BlockControl = BlockControl;
  window.Katappa = APP;

})(window);
