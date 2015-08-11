(function(window) {
  var APP = window.LegoBlocks || {};

  var initialState = {
    blocks: []
  };

  var Action = APP.Action;

  var Editor = React.createClass({
    getInitialState: function() {
      return initialState;
    },

    componentDidMount: function() {
      if(this.props.blocks) {
        this.setState({
          blocks: this.props.blocks
        })
      }
    },

    handleBlockAction: function(action, position) {
      var newBlocks = this.state.blocks;
      if(action === Action.REMOVE) {
        if(APP.Blocks[newBlocks[position].type].isEmpty(newBlocks[position].content) || confirm('Sure?')) {
          newBlocks.splice(position, 1);
        } else {
          return;
        }
      } else if(action === Action.UP) {
        newBlocks.splice(position - 1, 2, newBlocks[position], newBlocks[position-1]);
      } else if(action === Action.DOWN) {
        newBlocks.splice(position , 2, newBlocks[position + 1], newBlocks[position]);
      }
      this.setState({
        blocks: newBlocks
      });
    },

    addBlock: function(type, position) {
      if(position < 0 || position > this.state.blocks.length) {
        return;
      }
      var newBlock = {
        type: type,
        content: APP.Blocks[type].Empty(),
        key: APP.uuid()
      };
      var newBlocks = this.state.blocks;
      newBlocks.splice(position+1, 0, newBlock);
      this.setState({
        blocks: newBlocks
      });
    },

    contentChange: function(position, content) {
      var newBlocks = this.state.blocks;
      newBlocks[position].content = content;
      this.setState({
        blocks: newBlocks
      });
    },

    getToolbar: function(index) {
      return (
        <APP.BlockControl
          blockAction={this.handleBlockAction}
          position={index}
          length={this.state.blocks.length} />
      );
    },

    renderBlocks: function() {
      var self = this;
      var blocks = this.props.blocks || this.state.blocks;
      if(blocks.length < 1) {
        return (
          <APP.Toolbar
            position={0}
            addBlock={this.addBlock} />
        );
      }
      var rndr = blocks.map(function(block, index) {

        return (
          React.createElement("div", {key: block.key, className: "legob-container"},
            self.getToolbar(index),
            React.createElement(APP.Blocks[block.type].React, {
              ref: 'block'+index, 
              position: index, 
              content: block.content, 
              addBlock: self.addBlock, 
              onContentChanged: self.contentChange}), 
            React.createElement(APP.Toolbar, {
              position: index, 
              addBlock: self.addBlock})
          )
        );
      });
      return rndr;
    },

    passBlocks: function() {
      if(this.props.onSave) {
        this.props.onSave(this.state.blocks);
      }
    },

    render: function() {
      if(this.state.blocks.length > 0) {
        return (
          <div className='legob-listing'>
            <button
              onClick={this.passBlocks}
              className="legob-savebtn">Save</button>
            {this.renderBlocks()}
          </div>
        );
      }
      return (
        <div className='legob-listing'>
          {this.renderBlocks()}
        </div>
      );
    }
  });
  
  APP.Editor = Editor;
  window.LegoBlocks = APP;

})(window);

