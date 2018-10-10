import React from 'react';
import BaseEmbed from './base';

class Instagram extends BaseEmbed {
  render() {
    if(this.state.valid) {
      if(!this.state.preview) {
        return (
          <div className="katap-embed katap-instagram">
            <p>Instagram - <a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.url}</a></p>
            <button className="katap-show-preview-btn" onClick={this.showPreview}>Preview</button>
          </div>
        );
      }
      return (
        <div className="katap-embed katap-instagram">
          <iframe
            src={'//instagram.com/p/'+this.state.id+'/embed'}
            title={`instagram-embed-${this.state.id}`}
            frameBorder={0}
            allowFullScreen={true} />
        </div>
      );
    }
    return (
      <div className="katap-embed">Invalid Instagram URL.</div>
    );
  }
}

Instagram.defaultProps = {
  url: '',
  regex: /https?:\/\/(?:www\.){0,1}instagram\.com\/p\/([^/]+)\/?.*/gi
};

export default Instagram;
