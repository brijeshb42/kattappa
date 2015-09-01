import React from 'react';
import Action from './utils/action';
import BlockControl from './components/blockcontrol';
import Toolbar from './components/toolbar';
import {uuid} from './utils';

var Blocks = require('./blocks');
var EmbedTypes = require('./blocks/embeds');

// if(typeof window !== 'undefined' && window.Kattappa && window.Kattappa.Blocks) {
//   Blocks = window.Kattappa.Blocks;
// }

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
  }

  componentDidMount() {
    this.refreshBlocks();
  }

  refreshBlocks() {
    this.setState({
      blocks: this.props.getBlocks()
    });
  }

  handleBlockAction(action, position) {
    var newBlocks = this.state.blocks;
    if(action === Action.REMOVE) {
      if(Blocks[newBlocks[position].type].isEmpty(newBlocks[position].content) || confirm('Sure?')) {
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
      content: Blocks[type].Empty(),
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
    newBlocks[position].content = content;
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

      return (
        <div key={block.key} className="katap-container">
          {self.getToolbar(index)}
          <Block
            ref={"block"+index} position={index}
            content={block.content}
            addBlock={self.addBlock}
            onContentChanged={self.contentChange}
            UploadUrl={self.props.UploadUrl}
            EmbedTypes={self.props.EmbedTypes} />
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
  UploadUrl: '/upload_img'
};

export default Editor;
