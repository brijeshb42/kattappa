import React from 'react';
import {BaseEmbed} from 'kattappa';

class Vine extends BaseEmbed {

  constructor(props) {
    super(props);
    this.loadExternalScript = this.loadExternalScript.bind(this);
  }

  loadExternalScript() {
    var scriptUrl = this.props.scriptUrl;
    var tag = document.createElement('script');
    tag.src = scriptUrl;
    tag.async = 1;
    window.document.body.appendChild(tag);
  }

  componentDidMount() {
    super.validate();
    this.loadExternalScript();
  }

  render() {
    if(this.state.valid) {
      return (
        <div className="katap-embed katap-vimeo">
          <iframe
            className="vine-embed"
            src={'//vine.co/v/'+this.state.id+'/embed/simple'}
            frameBorder={0}
            width={600}
            height={600}
            allowFullScreen={true} />
        </div>
      );
    }
    return (
      <div className="katap-embed">Invalid Vimeo URL.</div>
    );
  }


}

Vine.defaultProps = {
  regex: /https?:\/\/vine\.co\/v\/([a-zA-Z0-9].*)\/?/,
  scriptUrl: '//platform.vine.co/static/scripts/embed.js'
};

export default Vine;
