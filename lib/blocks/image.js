import React from 'react';

import Droppable from '../components/droppable';
require('isomorphic-fetch');

var UploadUrl = '';

if(typeof window !== 'undefined' && window.Kattappa && window.Kattappa.Blocks && window.Kattappa.Blocks.Image && window.Kattappa.Blocks.Image.UploadUrl) {
  UploadUrl = window.Kattappa.Blocks.Image.UploadUrl;
}

class BlockImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: 'Drop image here or click to add.'
    };
    this.handleImage = this.handleImage.bind(this);
    this.changeSubtext = this.changeSubtext.bind(this);
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

  render() {
    var content = this.props.content;
    if(!this.props.content || content.url === "") {
      return (
        <div className="katap-image">
          <Droppable
            onDrop={this.handleImage}>
            <p>{this.state.message}</p>
          </Droppable>
        </div>
      );
    } else {
      return (
        <div className="katap-image">
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
  uploadUrl: UploadUrl
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
    return (content === '');
  }
};

export default Image;
