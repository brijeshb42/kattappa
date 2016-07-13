import React from 'react';

import Action from './utils/action';
import BlockControl from './components/blockcontrol';
import Toolbar from './components/toolbar';
import {uuid} from './utils';
import Blocks from './blocks';
import EmbedTypes from './blocks/embeds';
import Keys from './utils/keys';
import * as OP from './utils/blocks';

const splitterString = '<p>==</p>';


export default class Editor extends React.Component {

  constructor(props) {
    super(props);

    this.currentBlock = -1;

    this.handleBlockAction = this.handleBlockAction.bind(this);
    this.handleSplit = this.handleSplit.bind(this);
    this.getBlocks = this.getBlocks.bind(this);
    this.addBlock = this.addBlock.bind(this);
    this.addNewBlock = this.addNewBlock.bind(this);
    this.contentChange = this.contentChange.bind(this);
    this.getToolbar = this.getToolbar.bind(this);
    this.renderBlocks = this.renderBlocks.bind(this);
    this.splitBlock = this.splitBlock.bind(this);
    this.setCurrentBlock = this.setCurrentBlock.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleSplit);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleSplit);
  }

  handleSplit(e) {
    if (e.which == Keys.ESC) {
      this.handleBlockAction(Action.REMOVE, this.currentBlock, true);
    } else if (e.altKey && e.ctrlKey && e.which === Keys.S) {
      console.log('splitter');
      this.splitBlock(this.currentBlock);
    }
  }

  setCurrentBlock(index) {
    if (index === -1) {}
    this.currentBlock = index;
  }

  splitBlock(position) {
    const splitter = this.props.splitter;
    const newBlocks = this.props.blocks;
    const currentBlock = newBlocks[position];
    if(currentBlock.type !== Blocks.text.Name || currentBlock.data.indexOf(splitter) < 0) {
      return;
    }
    const stringsTmp = currentBlock.data.split(splitter);
    const strings = [];
    stringsTmp.forEach((str) => {
      if(str !== "") {
        strings.push(str);
      }
    });
    newBlocks.splice(position, 1);
    let pos = position;
    let newBlock = {};
    strings.forEach(function(str) {
      newBlock = {
        type: Blocks.text.Name,
        data: str,
        key: uuid()
      };
      newBlocks.splice(pos++, 0, newBlock)
    });
    this.props.onChange(newBlocks);
  }

  handleBlockAction(action, position, implicit=false) {
    var newBlocks = this.props.blocks;
    var Blocks = this.props.availableBlocks;
    if(action === Action.REMOVE) {
      const isEmpty = Blocks[newBlocks[position].type].isEmpty(newBlocks[position].data);
      if (implicit && !isEmpty) {
        return;
      }
      if(isEmpty || confirm('Are you sure?')) {
        newBlocks.splice(position, 1);
        this.currentBlock = position - 1;
        if (this.currentBlock === -1 && newBlocks.length > 0) {
          this.currentBlock = 0;
        }
      } else {
        return;
      }
    } else if(action === Action.UP) {
      newBlocks.splice(position - 1, 2, newBlocks[position], newBlocks[position-1]);
      this.currentBlock = position - 1;
    } else if(action === Action.DOWN) {
      newBlocks.splice(position , 2, newBlocks[position + 1], newBlocks[position]);
      this.currentBlock = position + 1;
    }
    this.props.onChange(newBlocks);
  }

  getBlocks() {
    console.warn('This function will be deprecated in the next version.');
    return this.props.blocks;
  }

  addNewBlock(type) {
    const blocks = this.props.blocks;
    const Blocks = this.props.availableBlocks;
    const newBlocks = OP.addBlock(blocks, this.currentBlock, Blocks, type, this.currentBlock, this.props.splitter);
    this.props.onChange(newBlocks);
  }

  addBlock(type, position) {
    const blocks = this.props.blocks;
    if(position < -1 || position > blocks.length) {
      return;
    }
    const newBlocks = this.props.blocks;
    const Blocks = this.props.availableBlocks;
    if(!Blocks[type]) {
      return;
    }
    if(Blocks[type].maximumBlocks !== 0) {
      let blocksOfType = 0;
      blocks.forEach((block, index) => {
        if(block.type === type) {
          blocksOfType++;
        }
      });
      if(blocksOfType >= Blocks[type].maximumBlocks) {
        return;
      }
    }
    var newBlock = {
      type: type,
      data: Blocks[type].Empty(),
      key: uuid()
    };
    newBlocks.splice(position + 1, 0, newBlock);
    this.props.onChange(newBlocks);
  }

  contentChange(position, content) {
    var newBlocks = this.props.blocks;
    newBlocks[position].data = content;
    this.props.onChange(newBlocks);
  }

  getToolbar(index) {
    return (
      <BlockControl
        blockAction={this.handleBlockAction}
        position={index}
        className="katap-control-toolbar katap-clearfix"
        length={this.props.blocks.length} />
    );
  }

  renderBlocks() {
    var self = this;
    var blocks = this.props.blocks;
    const Blocks = this.props.availableBlocks;
    if(blocks.length < 1) {
      return (
        <Toolbar
          position={0}
          addBlock={this.addBlock}
          availableBlocks={Blocks} />
      );
    }
    var rndr = blocks.map((block, index) => {

      var Block = Blocks[block.type].React;
      if(!Blocks[block.type]) {
        return null;
      }

      return (
        <div key={block.key} className="katap-container">
          {self.getToolbar(index)}
          <Block
            ref={"block"+index}
            position={index}
            content={block.data}
            addBlock={self.addBlock}
            onContentChanged={self.contentChange}
            UploadUrl={self.props.UploadUrl}
            EmbedTypes={self.props.EmbedTypes}
            splitBlock={self.splitBlock}
            setCurrentBlock={self.setCurrentBlock}
            {...self.props} />
        </div>
      );
    });
    // <Toolbar position={index} addBlock={self.addBlock} availableBlocks={Blocks} />
    return rndr;
  }

  render() {
    if(this.props.blocks.length > 0) {
      return (
        <div className='katap-listing'>
          <Toolbar
            position={-1}
            addBlock={this.addNewBlock}
            availableBlocks={this.props.availableBlocks} />
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
  splitter: splitterString
};
