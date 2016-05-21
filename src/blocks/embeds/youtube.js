import React from 'react';
import BaseEmbed from './base';

class Youtube extends BaseEmbed {
  render() {
    if(this.state.valid) {
      if(!this.state.preview) {
        return (
          <div className="katap-embed katap-youtube">
            <p>Youtube Video - <a href={this.props.url} target="_blank">{this.props.url}</a></p>
            <button className="katap-show-preview-btn" onClick={this.showPreview}>Preview</button>
          </div>
        );
      }
      return (
        <div className="katap-embed katap-youtube">
        <iframe
          src={'//youtube.com/embed/'+this.state.id}
          frameBorder={0}
          width={580}
          height={320}
          allowFullScreen={true} />
        </div>
      );
    }
    return (
      <div className="katap-embed">Invalid Youtube URL.</div>
    );
  }
}

Youtube.defaultProps = {
  url: '',
  regex: /^.*(?:(?:youtu\.be\/)|(?:youtube\.com)\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*)/
};

export default Youtube;
