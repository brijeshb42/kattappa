import React from 'react';

import Action from './utils/action';
import BlockControl from './components/blockcontrol';
import Toolbar from './components/toolbar';
import {uuid} from './utils';
import Blocks from './blocks';
import EmbedTypes from './blocks/embeds';

const splitterString = '<p>==</p>';

export default class Editor extends React.Component {

  constructor(props) {
    super(props);

    this.handleBlockAction = this.handleBlockAction.bind(this);
    this.getBlocks = this.getBlocks.bind(this);
    this.addBlock = this.addBlock.bind(this);
    this.contentChange = this.contentChange.bind(this);
    this.getToolbar = this.getToolbar.bind(this);
    this.renderBlocks = this.renderBlocks.bind(this);
    this.splitBlock = this.splitBlock.bind(this);
  }

  splitBlock(position) {
    const splitter = this.props.splitter;
    const newBlocks = this.props.blocks;
    const currentBlock = newBlocks[position];

    if(currentBlock.type !== Blocks.text.Name) {
      return;
    }

    const splitterRegex = /((?:<[a-zA-Z\d]{1,}>){1,2}<br>(?:<\/[a-zA-Z\d]{1,}>){1,2})/gi;
    const stringsFix = currentBlock.data.replace(splitterRegex, splitter);
    const stringsTmp = stringsFix.split(splitter);

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

  handleBlockAction(action, position) {
    var newBlocks = this.props.blocks;
    var Blocks = this.props.availableBlocks;
    if(action === Action.REMOVE) {
      if(Blocks[newBlocks[position].type].isEmpty(newBlocks[position].data) || window.confirm('Are you sure?')) {
        newBlocks.splice(position, 1);
      } else {
        return;
      }
    } else if(action === Action.UP) {
      newBlocks.splice(position - 1, 2, newBlocks[position], newBlocks[position-1]);
    } else if(action === Action.DOWN) {
      newBlocks.splice(position , 2, newBlocks[position + 1], newBlocks[position]);
    }
    this.props.onChange(newBlocks);
  }

  getBlocks() {
    console.warn('This function will be deprecated in the next version.');
    return this.props.blocks;
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
    var rndr = blocks.map(function(block, index) {

      if(!Blocks[block.type]) {
        return null;
      }

      var Block = Blocks[block.type].React;

      // customize block behaviour by passing props
      var blockProps = Blocks[block.type].props

      return (
        <div key={block.key || block.id || index} className="katap-container">
          {self.getToolbar(index)}
          <Block
            position={index}
            content={block.data}
            addBlock={self.addBlock}
            onContentChanged={self.contentChange}
            UploadUrl={self.props.UploadUrl}
            EmbedTypes={self.props.EmbedTypes}
            splitBlock={self.splitBlock}
            {...blockProps}
            {...self.props} />
          <Toolbar position={index} addBlock={self.addBlock} availableBlocks={Blocks} />
        </div>
      );
    });
    return rndr;
  }

  render() {
    if(this.props.blocks.length > 0) {
      return (
        <div className='katap-listing'>
          <Toolbar
            position={-1}
            addBlock={this.addBlock}
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
