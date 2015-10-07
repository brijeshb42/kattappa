import React from 'react';
import url from 'url';
import {UrlRegex} from '../utils';
import Keys from '../utils/keys';

var Types = require('./embeds');

function getDomain(link) {
  var a = url.parse(link);
  return a.hostname;
}

let Embed = {
  Name: 'embed',
  Icon: '',
  Empty: function() {
    return {
      url: ''
    };
  },
  Description: 'Embed',
  isEmpty: function(content) {
    return (content === '');
  },
  EmbedTypes: Types
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
    if(url.indexOf('http') < 0) {
      url = 'https://'+url;
    }
    if(UrlRegex.test(url)) {
      var domain = getDomain(url);
      var Types = this.props.EmbedTypes;
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
    UrlRegex.lastIndex = 0;
  }

  handleUrl(event) {
    if(event.keyCode === Keys.ENTER) {
      this.checkUrls(event.target.value, false);
    }
  }

  componentDidMount() {
    this.refs.input.getDOMNode().focus();
    this.checkUrls(this.props.content.url || this.props.content, true);
  }

  checkContent(ok) {
    if(ok && this.props.onContentChanged) {
      var newData = this.props.content;
      newData.url = this.state.url;
      this.props.onContentChanged(this.props.position, newData);
    } else if(this.props.content === this.state.url) {
    }
  }

  renderBlock() {
    var Types = this.props.EmbedTypes;
    var EmbedType = Types[this.state.domain];
    return (
      <EmbedType url={this.state.url} checkContent={this.checkContent} />
    );
  }

  render() {
    if(this.state.loaded) {
      return (
        <div className="katap-block">
          {this.renderBlock()}
        </div>
      );
    } else {
      return (
        <div className="katap-block katap-embed">
          <p>Supported embeds: {Object.keys(this.props.EmbedTypes).join(', ')}</p>
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

BlockEmbed.defaultProps = {
  EmbedTypes: Types
};

Embed.React = BlockEmbed;

export default Embed;
