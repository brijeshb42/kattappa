(function(window) {
  var APP = window.Katappa || {};

  var initialState = {
    blocks: []
  };

  var Action = APP.Action;

  var Editor = React.createClass({
    getInitialState: function() {
      return initialState;
    },

    getDefaultProps: function() {
      return {
        blockUrl: ''
      };
    },

    componentDidMount: function() {
      var self = this;
      if(this.props.blockUrl !== '') {
        fetch(self.props.blockUrl, {
          credentials: 'same-origin',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(function(response) {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            var error = new Error(response.statusText);
            error.response = response;
            throw error;
          }
        }).then(function(json) {
          if(self.props.processData) {
            self.setState({
              blocks: self.props.processData(json)
            });
          } else {
            console.warn('Provide a function to process blocks.');
          }
        }).catch(function(e) {
          console.error(e);
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
          React.createElement("div", {key: block.key, className: "katap-container"},
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
          <div className='katap-listing'>
            <button
              onClick={this.passBlocks}
              className="katap-savebtn">Save</button>
            {this.renderBlocks()}
          </div>
        );
      }
      return (
        <div className='katap-listing'>
          {this.renderBlocks()}
        </div>
      );
    }
  });
  
  APP.Editor = Editor;
  window.Katappa = APP;

})(window);

