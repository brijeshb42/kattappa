import Actions from './action';
import { uuid } from './index';

export const addBlock = (blocks, currentBlockPosition, BlockList, type, position, splitter) => {
  if(position < -1 || position > blocks.length) {
    return blocks;
  }
  if (!BlockList[type]) {
    return blocks;
  }
  if (currentBlockPosition >= 0) {
    const currentBlock = blocks[currentBlockPosition];
    if (currentBlock.type === 'text' && type === 'text') {
      return blocks;
    }
    if (currentBlock.type !== BlockList.hr.Name && BlockList[currentBlock.type].isEmpty(currentBlock.data)) {
      if (type === currentBlock.type) {
        return blocks;
      }
      blocks.splice(position, 1);
      position--;
    }
    if (currentBlock.type === BlockList.text.Name && currentBlock.data.indexOf(splitter) >= 0) {
      const splitBlocks = splitSingleBlock(currentBlock, splitter);
      if (splitBlocks !== null) {
        blocks.splice(position, 1);
        let pos = position;
        splitBlocks.forEach(block => {
          blocks.splice(pos++, 0, block);
        });
      }
    }
  }  
  if (BlockList[type].maximumBlocks !== 0) {
    let blocksOfType = 0;
    blocks.forEach((block, index) => {
      if(block.type === type) {
        blocksOfType++;
      }
    });
    if(blocksOfType >= BlockList[type].maximumBlocks) {
      return blocks;
    }
  }
  var newBlock = {
    type: type,
    data: BlockList[type].Empty(),
    key: uuid()
  };
  blocks.splice(position + 1, 0, newBlock);
  return blocks;
};

export const removeBlock = (blocks, currentBlockPosition, BlockList, position) => {
  return blocks.splice(position, 1);
};


export const splitSingleBlock = (block, splitter) => {
  const stringsTmp = block.data.split(splitter);
  if (stringsTmp.length <= 1) {
    return null;
  }
  const strings = [];
  stringsTmp.forEach((str) => {
    if(str !== "") {
      strings.push(str);
    }
  });
  if (strings.length < 1) {
    return null;
  }
  const newBlocks = [];
  let newBlock = null;
  strings.forEach(function(str) {
    newBlock = {
      type: 'text',
      data: str,
      key: uuid(),
    };
    newBlocks.push(newBlock);
  });
  return newBlocks;
};

export const splitBlock = (blocks, currentBlockPosition, BlockList, splitter) => {
  const position = currentBlockPosition;
  if (blocks[position].type !== BlockList.text.Name) {
    return blocks;
  }
  const block = blocks[position];
  if(block.type !== Blocks.text.Name || block.data.indexOf(splitter) < 0) {
    return blocks;
  }
  const splitBlocks = splitSingleBlock(block, position);
  if (splitBlocks === null) {
    return blocks;
  }
  blocks.splice(position, 1);
  let pos = position;
  splitBlocks.forEach(block => {
    blocks.splice(pos++, 0, block);
  });
  return blocks;
};

export const arrangeBlock = (blocks, currentBlockPosition, BlockList, action, position) => {

};

export const isEmpty = (blocks, BlockList) => {

};
