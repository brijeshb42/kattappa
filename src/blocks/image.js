import React from 'react';

import Droppable from '../components/droppable';
import Keys from '../utils/keys';
import {UrlRegex} from '../utils';


class BlockImage extends React.Component {

  constructor(props) {
    super(props);
    this.handleImage = this.handleImage.bind(this);
    this.changeItem = this.changeItem.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  componentDidMount() {
    var content = this.props.content;
    if(!content || content.url === "") {
      this.refs.img.focus();
    }
    this.onFocus();
  }

  onFocus() {
    this.props.setCurrentBlock(this.props.position);
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

  imageLoaded(e) {
    if (e.target.src.indexOf('blob:') === 0) {
      URL.revokeObjectURL(e.target.src);      
    }
  }

  render() {
    var content = this.props.content;
    return (
      <div className="katap-block katap-image" onClick={this.onFocus}>
      {(!content || content.url === '') ? (
        <div>
          <input
            ref="img"
            type="text"
            onFocus={this.onFocus}
            placeholder="Paste URL of image and press enter"
            onKeyDown={this.handleKeyPress} />
          <Droppable
            onFocus={this.onFocus}
            onDrop={this.handleImage}>
            <p>{this.props.message}</p>
          </Droppable>
        </div>
      ) : (
        <div>
          <img
            src={content.url}
            onLoad={this.imageLoaded}
            onClick={this.onFocus} />
          <input
            type="text"
            className="katap-image-subtext"
            placeholder="Image subtext"
            onFocus={this.onFocus}
            onChange={this.changeItem.bind(this, 'subtext')}
            value={content.subtext} />
          <input
            type="text"
            className="katap-image-subtext"
            placeholder="Hyperlink"
            onFocus={this.onFocus}
            onChange={this.changeItem.bind(this, 'hyperlink')}
            value={content.hyperlink} />
        </div>
      )}
      </div>
    );
    // if(!content || content.url === "") {
    //   return (
    //     <div className="katap-block katap-image">
          
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div className="katap-block katap-image">
          
    //     </div>
    //   );
    // }
  }
}

BlockImage.defaultProps = {
  message: 'Or Drop image here or click to add.',
  onFilesAdded: (files) => {
    console.log(files);
  }
};

let Image = {
  Name: 'image',
  React: BlockImage,
  Icon: 'image',
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
