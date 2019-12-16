import React from 'react';

import Droppable from '../components/droppable';
import Keys from '../utils/keys';
import {UrlRegex} from '../utils';


class BlockImage extends React.Component {

  constructor(props) {
    super(props);
    this.imgEl = null;
    this.handleImage = this.handleImage.bind(this);
    this.changeItem = this.changeItem.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);
  }

  componentDidMount() {
    if (!this.props.shouldPasteUrl) return;
    var content = this.props.content;
    if(!content || content.url === "") {
      this.imgEl.focus();
    }
  }

  handleImage(files) {
    const newContent = this.props.content;
    this.props.onFilesAdded(files, (url) => {
      if (url && url !== '') {
        newContent.url = url;
        this.props.onContentChanged(this.props.position, newContent);
      }
    }, (err) => {
      alert('Error while uploading files.');
    });
  }

  changeItem(key, e) {
    if(this.props.onContentChanged) {
      var newContent = this.props.content;
      newContent[key] = e.target.value;
      this.props.onContentChanged(this.props.position, newContent);
    }
  }

  handleKeyPress(e) {
    if(e.which === Keys.ENTER) {
      if(UrlRegex.test(e.target.value)) {
        const newContent = {};
        newContent.subtext = this.props.content.subtext;
        newContent.url = e.target.value;
        if(this.props.onContentChanged) {
          this.props.onContentChanged(this.props.position, newContent);
        }
      } else {
        alert('Enter a valid URL.');
      }
      UrlRegex.lastIndex = 0;
    }
  }

  imageLoaded(e) {
    if (e.target.src.indexOf('blob:') === 0) {
      URL.revokeObjectURL(e.target.src);
    } else {
      const newContent = this.props.content;
      newContent.width = e.target.naturalWidth;
      newContent.height = e.target.naturalHeight;
      this.props.onContentChanged(this.props.position, newContent);
    }
  }

  render() {
    var content = this.props.content;
    return (
      <div className="katap-block katap-image">
      {(!content || content.url === '') ? (
        <div>
          {
            this.props.shouldPasteUrl
            && <input
              ref={(node) => {this.imgEl=node}}
              type="text"
              placeholder="Paste URL of image and press enter"
              onKeyDown={this.handleKeyPress} />
          }
          <Droppable
            onDrop={this.handleImage}>
            <p>{this.props.message}</p>
          </Droppable>
        </div>
      ) : (
        <div>
          <img src={content.url} onLoad={this.imageLoaded} alt="Not loaded"/>
          <input
            type="text"
            className="katap-image-subtext"
            placeholder="Image subtext"
            onChange={this.changeItem.bind(this, 'subtext')}
            value={content.subtext} />
          <input
            type="text"
            className="katap-image-subtext"
            placeholder="Image Alt Text"
            onChange={this.changeItem.bind(this, 'alttext')}
            value={content.alttext} />
          <input
            type="text"
            className="katap-image-subtext"
            placeholder="Hyperlink"
            onChange={this.changeItem.bind(this, 'hyperlink')}
            value={content.hyperlink} />
        </div>
      )}
      </div>
    );
  }
}

BlockImage.defaultProps = {
  message: 'Or Drop image here or click to add.',
  shouldPasteUrl: true,
  onFilesAdded: (files) => {
    console.log(files);
  }
};

let Image = {
  Name: 'image',
  React: BlockImage,
  Icon: '',
  Empty: () => ({
    url: '',
    subtext: '',
    alttext: '',
    hyperlink: '',
  }),
  maximumBlocks: 0,
  Description: 'Image',
  isEmpty: function(content) {
    return (content.url === '');
  }
};

export default Image;
