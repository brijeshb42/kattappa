import React from 'react';
import BaseEmbed from './base';

class Youtube extends BaseEmbed {
  render() {
    if(this.state.valid) {
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
