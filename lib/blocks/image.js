import React from 'react';

import Droppable from '../components/droppable';
import Keys from '../utils/keys';
import {UrlRegex} from '../utils';
require('isomorphic-fetch');

var UploadUrl = '';

if(typeof window !== 'undefined' && window.Kattappa && window.Kattappa.Blocks && window.Kattappa.Blocks.Image && window.Kattappa.Blocks.Image.UploadUrl) {
  UploadUrl = window.Kattappa.Blocks.Image.UploadUrl;
}

class BlockImage extends React.Component {

  constructor(props) {
    super(props);
    this.handleImage = this.handleImage.bind(this);
    this.changeSubtext = this.changeSubtext.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    var content = this.props.content;
    if(!content || content.url === "") {
      React.findDOMNode(this.refs.img).focus();
    }
  }

  handleImage(files) {
    var UploadUrl = this.props.uploadUrl;
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

  changeSubtext(e) {
    if(this.props.onContentChanged) {
      var newContent = {
        url: this.props.content.url,
        subtext: e.target.value
      };
      //console.log(newContent);
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
            onChange={this.changeSubtext}
            value={content.subtext}
          />
        </div>
      );
    }
  }
}

BlockImage.defaultProps = {
  uploadUrl: UploadUrl,
  message: 'Or Drop image here or click to add.'
};

let Image = {
  Name: 'Image',
  React: BlockImage,
  Icon: '',
  Empty: function() {
    return {
      url: '',
      subtext: ''
    };
  },
  Description: 'Image',
  UploadUrl: UploadUrl,
  isEmpty: function(content) {
    return (content.url === '');
  }
};

export default Image;
