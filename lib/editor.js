import React from 'react';
import Action from './utils/action';
import BlockControl from './components/blockcontrol';
import Toolbar from './components/toolbar';
import {uuid} from './utils';

var Blocks = require('./blocks');
var EmbedTypes = require('./blocks/embeds');
var RteBlock = require('./components/medium');
var splitterString = '<p>==</p>';

var initialState = {
  blocks: []
};

class Editor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      blocks: []
    };
    this.handleBlockAction = this.handleBlockAction.bind(this);
    this.getBlocks = this.getBlocks.bind(this);
    this.addBlock = this.addBlock.bind(this);
    this.contentChange = this.contentChange.bind(this);
    this.getToolbar = this.getToolbar.bind(this);
    this.renderBlocks = this.renderBlocks.bind(this);
    this.refreshBlocks = this.refreshBlocks.bind(this);
    this.splitBlock = this.splitBlock.bind(this);
  }

  componentDidMount() {
    this.refreshBlocks();
  }

  refreshBlocks() {
    this.setState({
      blocks: this.props.getBlocks()
    });
  }

  splitBlock(position) {
    var splitter = this.props.splitter;
    var blocks = this.state.blocks;
    var currentBlock = blocks[position];
    if(currentBlock.type !== Blocks.text.Name || currentBlock.data.indexOf(splitter) < 0) {
      return;
    }
    var strings = currentBlock.data.split(splitter);
    blocks.splice(position, 1);
    var pos = position;
    var newBlock = {};
    strings.forEach(function(str) {
      newBlock = {
        type: Blocks.text.Name,
        data: str,
        key: uuid()
      };
      blocks.splice(pos++, 0, newBlock)
    });
    this.setState({
      blocks: blocks
    });
    //console.log(strings);
  }

  handleBlockAction(action, position) {
    var newBlocks = this.state.blocks;
    var Blocks = this.props.availableBlocks;
    if(action === Action.REMOVE) {
      if(Blocks[newBlocks[position].type].isEmpty(newBlocks[position].data) || confirm('Sure?')) {
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
  }

  getBlocks() {
    if(!this.state.blocks) {
      this.setState({
        blocks: this.props.getBlocks()
      });
      return this.props.getBlocks();
    }
    return this.state.blocks;
  }

  addBlock(type, position) {
    if(position < 0 || position > this.state.blocks.length) {
      return;
    }
    var newBlock = {
      type: type,
      data: Blocks[type].Empty(),
      key: uuid()
    };
    var newBlocks = this.state.blocks;
    newBlocks.splice(position+1, 0, newBlock);
    this.setState({
      blocks: newBlocks
    });
  }

  contentChange(position, content) {
    var newBlocks = this.state.blocks;
    newBlocks[position].data = content;
    this.setState({
      blocks: newBlocks
    });
  }

  getToolbar(index) {
    return (
      <BlockControl
        blockAction={this.handleBlockAction}
        position={index}
        length={this.state.blocks.length} />
    );
  }

  renderBlocks() {
    var self = this;
    var blocks = this.props.blocks || this.state.blocks;
    const Blocks = this.props.availableBlocks;
    if(blocks.length < 1) {
      return (
        <Toolbar
          position={0}
          addBlock={this.addBlock}
          availableBlocks={Blocks} />
      );
    }
    var rndr = blocks.map(function(block, index) {

      var Block = Blocks[block.type].React;
      if(!Blocks[block.type]) {
        return null;
      }

      return (
        <div key={block.key} className="katap-container">
          {self.getToolbar(index)}
          <Block
            ref={"block"+index} position={index}
            content={block.data}
            addBlock={self.addBlock}
            onContentChanged={self.contentChange}
            UploadUrl={self.props.UploadUrl}
            EmbedTypes={self.props.EmbedTypes}
            splitBlock={self.splitBlock}
            rteBlock={self.props.rteBlock} 
            />
          <Toolbar position={index} addBlock={self.addBlock} />
        </div>
      );
    });
    return rndr;
  }

  render() {
    if(this.state.blocks.length > 0) {
      return (
        <div className='katap-listing'>
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
}

Editor.defaultProps = {
  availableBlocks: Blocks,
  EmbedTypes: EmbedTypes,
  getBlocks: function() {
    return [];
  },
  UploadUrl: '',
  rteBlock: RteBlock,
  splitter: splitterString
};

export default Editor;
