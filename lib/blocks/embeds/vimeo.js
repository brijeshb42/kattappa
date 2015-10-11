import React from 'react';
import BaseEmbed from './base';

class Vimeo extends BaseEmbed {
  render() {
    if(this.state.valid) {
      if(!this.state.preview) {
        return (
          <div className="katap-embed katap-vimeo">
            <p>Vimeo - <a href={this.props.url} target="_blank">{this.props.url}</a></p>
            <button className="katap-show-preview-btn" onClick={this.showPreview}>Preview</button>
          </div>
        );
      }
      return (
        <div className="katap-embed katap-vimeo">
          <iframe
            src={'//player.vimeo.com/video/'+this.state.id}
            frameBorder={0}
            width={580}
            height={320}
            allowFullScreen={true} />
        </div>
      );
    }
    return (
      <div className="katap-embed">Invalid Vimeo URL.</div>
    );
  }
}

Vimeo.defaultProps = {
  url: '',
  regex: /(?:http[s]?:\/\/)?(?:www.)?vimeo\.co(?:.+(?:\/)([^\/].*)+$)/
};

export default Vimeo;
