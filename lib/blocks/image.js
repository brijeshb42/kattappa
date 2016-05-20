import React from 'react';

import Droppable from '../components/droppable';
import Keys from '../utils/keys';
import {UrlRegex} from '../utils';
require('isomorphic-fetch');

var UploadUrl = '';

class BlockImage extends React.Component {

  constructor(props) {
    super(props);
    this.handleImage = this.handleImage.bind(this);
    this.changeItem = this.changeItem.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    var content = this.props.content;
    if(!content || content.url === "") {
      this.refs.img.focus();
    }
  }

  handleImage(files) {
    var UploadUrl = this.props.UploadUrl;
    var self = this;
    var file = files[0];
    if(file.type.indexOf("image/") !== 0) {
      alert("Provide a valid image file.");
      return;
    }
    var newContent = {};
    newContent.subtext = this.props.content.subtext;
    if(UploadUrl !== "") {
      var data = new FormData();
      data.append("image", file);
      fetch(UploadUrl, {
        method: 'POST',
        credentials: 'same-origin',
        body: data
      }).then(function(response) {
        if(response.status >= 200 && response.status < 300) {
          return response.json();
        } else {
          var error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
      }).then(function(json) {
        if(json.type && json.type === "success") {
          if(self.props.onContentChanged) {
            newContent.url = json.message;
            self.props.onContentChanged(self.props.position, newContent);
          }
        } else {
          alert('Could not upload.');
        }
      }).catch(function(error) {
        console.error(error);
        alert('Error while uploading. Retry.');
      });
    } else if(this.props.onContentChanged){
      newContent.url = file.preview;
      this.props.onContentChanged(this.props.position, newContent);
    }
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
        var newContent = {};
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

  render() {
    var content = this.props.content;
    if(!content || content.url === "") {
      return (
        <div className="katap-block katap-image">
          <input
            ref="img"
            type="text"
            placeholder="Paste URL of image and press enter"
            onKeyDown={this.handleKeyPress} />
          <Droppable
            onDrop={this.handleImage}>
            <p>{this.props.message}</p>
          </Droppable>
        </div>
      );
    } else {
      return (
        <div className="katap-block katap-image">
          <img src={content.url} />
          <input
            type="text"
            className="katap-image-subtext"
            placeholder="Image subtext"
            onChange={this.changeItem.bind(this, 'subtext')}
            value={content.subtext} />
          <input
            type="text"
            className="katap-image-subtext"
            placeholder="Hyperlink"
            onChange={this.changeItem.bind(this, 'hyperlink')}
            value={content.hyperlink} />
        </div>
      );
    }
  }
}

BlockImage.defaultProps = {
  UploadUrl: '',
  message: 'Or Drop image here or click to add.'
};

let Image = {
  Name: 'image',
  React: BlockImage,
  Icon: '',
  Empty: () => ({
    url: '',
    subtext: '',
    hyperlink: ''
  }),
  maximumBlocks: 0,
  Description: 'Image',
  isEmpty: function(content) {
    return (content.url === '');
  }
};

export default Image;
