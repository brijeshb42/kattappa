//import Quill from 'quill';
import {uuid} from './utils';

import Editor from './editor';
import Blocks from './blocks';
import BaseEmbed from './blocks/embeds/base';
import MediumComponent from './components/medium';
import DroppableComponent from './components/droppable';


module.exports = {
  Editor: Editor,
  Blocks: Blocks,
  uuid: uuid,
  BaseEmbed: BaseEmbed,
  MediumComponent: MediumComponent,
  DroppableComponent: DroppableComponent
};
