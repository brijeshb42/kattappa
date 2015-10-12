import React from 'react';
import {BaseEmbed} from 'kattappa';

class Facebook extends BaseEmbed {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Wait',
      id: '',
      valid: false,
      html: ''
    };
    this.validate = this.validate.bind(this);
    this.loadExternalScript = this.loadExternalScript.bind(this);
  }

  componentDidMount() {
    this.validate();
  }

  showPreview() {
    this.setState({
      preview: !this.state.preview
    });
    this.loadExternalScript();
  }

  loadExternalScript() {
    if(window.FB && window.FB.init) {
      FB.init({
        xfbml      : true,
        version    : 'v2.3'
      });
      return;
    }
    var tag = document.createElement('script');
    tag.src = this.props.scriptUrl;
    tag.async = 1;
    window.document.body.appendChild(tag);
  }

  validate() {
    var match;
    match = this.props.regex.exec(this.props.url);
    this.props.regex.lastIndex = 0;
    if(!match) {
      this.props.checkContent(false);
      this.setState({
        message: 'error.'
      });
      return;
    }
    let html = '<div class="fb-video" data-href="'+this.props.url+'" data-allowfullscreen="true" data-width="100%"></div>';
    if(this.props.url.indexOf('/posts/') > 0) {
      html = '<div class="fb-post" data-href="'+this.props.url+'" data-width="100%"></div>';
    }
    this.setState({
      message: 'Loading Facebook embed...',
      id: match[1],
      valid: true,
      html: html
    });
    this.props.checkContent(true);
    this.loadExternalScript();
  }

  render() {
    if(this.state.valid) {
      if(!this.state.preview) {
        return (
          <div className="katap-embed katap-instagram">
            <p>Facebook - <a href={this.props.url} target="_blank">{this.props.url}</a></p>
            <button className="katap-show-preview-btn" onClick={this.showPreview}>Preview</button>
          </div>
        );
      }
      return (
        <div
          className="katap-embed katap-facebook"
          dangerouslySetInnerHTML={{__html: this.state.html}} />
      );
    }
    return (
      <div className="katap-embed katap-twitter">
        This fb URL is not supported.
      </div>
    );
  }
}

Facebook.defaultProps = {
  url: '',
  regex: /https?:\/\/www\.facebook\.com\/(.*)\/(videos|posts)\/.*/gi,
  scriptUrl: '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3'
};

export default Facebook;
