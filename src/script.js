import 'normalize.css/normalize.css'
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import './kattappa.scss';
import './style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import Kattappa from './index';

var initBlock = [{
  type: "text",
  data: '',
  key: Kattappa.uuid()
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
    success.call(null, {url: files[0].preview});
    console.log('Success');
  }
}

class Container extends React.Component {

  constructor(props) {
    super(props);

    this.save = this.save.bind(this);
    this.getBlocks = this.getBlocks.bind(this);
  }

  getBlocks() {
    return initBlock;
  }

  save() {
    console.log(this.refs.kattappa.getBlocks());
  }

  render() {
    return (
      <div>
        <button onClick={this.save}>Save</button>
        <Editor
          ref="kattappa"
          availableBlocks={Blocks}
          EmbedTypes={EmbedTypes}
          splitter="<p><br></p>"
          getBlocks={this.getBlocks}
          onFilesAdded={onFilesAdded} />
      </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('editor-content'));
