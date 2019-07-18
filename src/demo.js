import './kattappa.scss';
import './style.scss';
//Todo: remove react-hot-reload for production build
import 'react-hot-loader';

import React from 'react';
import ReactDOM from 'react-dom';

import Kattappa from './';
import { hot } from 'react-hot-loader/root';

var initBlock = [{
  type: "text",
  data: '<p>Hello World</p>',
  key: Kattappa.uuid()
}, {
  type: "image",
  key: Kattappa.uuid(),
  data: {
    url: "http://www.nutritionsecrets.com/wp-content/uploads/2015/04/Feature3_image2_vitD.jpg",
    subtext: "nutritionsecrets.com",
    hyperlink: "",
  }
}];

const { Blocks, Editor } = Kattappa;

const { EmbedTypes } = Blocks.embed;

function getBlocks() {
  return initBlock;
}

function onChange(position, content) {
  initBlock[position].data = content;
}

function onSave(blocks) {
  console.log(blocks);
}

function onFilesAdded(files, success=null, error=null) {
  if (success) {
    success.call(null, files[0].preview);
    console.log('Success');
  }
}

class Container extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      blocks: initBlock,
    };

    this.save = this.save.bind(this);
    this.getBlocks = this.getBlocks.bind(this);
    this.onChange = (blocks) => this.setState({ blocks });
  }

  getBlocks() {
    return this.state.blocks;
  }

  save() {
    console.log(this.state.blocks);
  }

  render() {
    return (
      <div>
        <button onClick={this.save}>console.log</button>
        <Editor
          blocks={this.state.blocks}
          onChange={this.onChange}
          availableBlocks={Blocks}
          EmbedTypes={EmbedTypes}
          splitter="<p><br></p>"
          getBlocks={this.getBlocks}
          onFilesAdded={onFilesAdded} />
      </div>
    );
  }
}

const HotContainer = hot(Container);

ReactDOM.render(<HotContainer />, document.getElementById('editor-content'));
