import React from 'react';
import BaseEmbed from './base';

class Instagram extends BaseEmbed {
  render() {
    if(this.state.valid) {
      return (
        <div className="katap-embed katap-instagram">
          <iframe
            src={'//instagram.com/p/'+this.state.id+'/embed'}
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
  regex: /https?:\/\/instagram\.com\/p\/([^\/]+)\/?.*/gi
};

export default Instagram;
