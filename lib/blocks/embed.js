import React from 'react';
import url from 'url';

var Types = require('./embeds');

if(typeof window !== 'undefined' && window.Kattappa && window.Kattappa.Embed && window.Kattappa.Embed.Types) {
  Types = window.Kattappa.Embed.Types;
}

import Keys from '../utils/keys';

var urlRegExp =/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;

function getDomain(link) {
  var a = url.parse(link);
  return a.hostname;
}

let Embed = {
  Name: 'Embed',
  Icon: '',
  Empty: function() {
    return '';
  },
  Description: 'Embed',
  isEmpty: function(content) {
    return (content === '');
  },
  Types: Types
};

class BlockEmbed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      domain: '',
      url: ''
    };

    this.checkUrls = this.checkUrls.bind(this);
    this.handleUrl = this.handleUrl.bind(this);
    this.checkContent = this.checkContent.bind(this);
    this.renderBlock = this.renderBlock.bind(this);
  }

  checkUrls(url, isProp){
    if(urlRegExp.test(url)) {
      var domain = getDomain(url);
      for(var key in Types) {
        if(domain.indexOf(key) > -1) {
          this.setState({
            loaded: true,
            domain: key,
            url: url
          });
          return;
        }
      }
      alert('This URL is not supported.');
      this.refs.getDOMNode().value = '';
    } else {
      if(!isProp) {
        alert("Enter a valid url");
      }
    }
  }

  handleUrl(event) {
    if(event.keyCode === Keys.ENTER) {
      this.checkUrls(event.target.value, false);
    }
  }

  componentDidMount() {
    this.refs.input.getDOMNode().focus();
    this.checkUrls(this.props.content, true);
  }

  checkContent(ok) {
    if(ok && this.props.onContentChanged) {
      this.props.onContentChanged(this.props.position, this.state.url);
    } else if(this.props.content === this.state.url) {
    }
  }

  renderBlock() {
    return (
      React.createElement(Types[this.state.domain], {
        url: this.state.url,
        checkContent: this.checkContent
      })
    );
  }

  render() {
    if(this.state.loaded) {
      return this.renderBlock();
    } else {
      return (
        <div className="katap-embed">
          <input
            ref="input"
            type="text"
            placeholder="Enter URL and press enter"
            onKeyUp={this.handleUrl} />
        </div>
      );
    }
  }
}

BlockEmbed.defaultProps = Embed.Empty();

Embed.React = BlockEmbed;

export default Embed;
