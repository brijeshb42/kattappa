import Actions from './action';
import { uuid } from './index';


const getNewBlocks = (blocks, BlockList, splitBlocks, type, position) => {
  if (splitBlocks !== null) {
    blocks.splice(position, 1);
    let pos = position;
    splitBlocks.forEach(block => {
      blocks.splice(pos++, 0, block);
    });
  }
  if (BlockList[type].maximumBlocks !== 0) {
    let blocksOfType = 0;
    blocks.forEach((block, index) => {
      if(block.type === type) {
        blocksOfType++;
      }
    });
    if(blocksOfType >= BlockList[type].maximumBlocks) {
      return null;
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

export const addBlock = (blocks, currentBlockPosition, BlockList, type, position, splitter, refs, onChange) => {
  if(position < -1 || position > blocks.length) {
    return;
  }
  if (!BlockList[type]) {
    return;
  }
  if (currentBlockPosition >= 0) {
    const currentBlock = blocks[currentBlockPosition];
    if (currentBlock.type === 'text' && type === 'text') {
      return;
    }
    if (currentBlock.type !== BlockList.hr.Name && BlockList[currentBlock.type].isEmpty(currentBlock.data)) {
      if (type === currentBlock.type) {
        return;
      }
      blocks.splice(position, 1);
      position--;
    }
    if (currentBlock.type === BlockList.text.Name /*&& currentBlock.data.indexOf(splitter) >= 0*/) {
      let splitBlocks = null;
      if (currentBlock.data.indexOf(splitter) >= 0) {
        splitBlocks = splitSingleBlock(currentBlock, splitter);
        if (splitBlocks !== null) {
          // blocks.splice(position, 1);
          // let pos = position;
          // splitBlocks.forEach(block => {
          //   blocks.splice(pos++, 0, block);
          // });
          const newBlocks = getNewBlocks(blocks, BlockList, splitBlocks, type, position);
          if (newBlocks) {
            onChange(newBlocks);
            return;
          }
        }
      }
      // else {
      //   const txt = refs['block' + currentBlockPosition].splitBlockAtCurrentCursorPosition();
      //   setTimeout(() => {
      //     splitBlocks = splitSingleBlock({ data: txt, type: BlockList.text.Name, key: currentBlock.key}, splitter);
      //     if (splitBlocks !== null) {
      //       const newBlocks = getNewBlocks(blocks, BlockList, splitBlocks, type, position);
      //       if (newBlocks) {
      //         onChange(newBlocks);
      //         return;
      //       }
      //     }
      //   });
      // }
    }
    if (BlockList[type].maximumBlocks !== 0) {
      let blocksOfType = 0;
      blocks.forEach((block, index) => {
        if(block.type === type) {
          blocksOfType++;
        }
      });
      if(blocksOfType >= BlockList[type].maximumBlocks) {
        return;
      }
    }
    var newBlock = {
      type: type,
      data: BlockList[type].Empty(),
      key: uuid()
    };
    blocks.splice(position + 1, 0, newBlock);
    onChange(blocks);
  }
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
