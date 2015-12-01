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
      url: '',
      subtext: ''
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
    this.changeSubtext = this.changeSubtext.bind(this);
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
      this.refs.input.value = '';
    } else {
      if(!isProp) {
        alert("Enter a valid url");
        this.refs.input.value = '';
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
    if(this.props.content.url === '') {
      this.refs.input.focus();
    }
    this.checkUrls(this.props.content.url, true);
  }

  checkContent(ok, msg) {
    if(ok && this.props.onContentChanged) {
      var newData = this.props.content;
      newData.url = this.state.url;
      this.props.onContentChanged(this.props.position, newData);
    } else {
      alert(msg);
    }
  }

  changeSubtext(e) {
    if(this.props.onContentChanged) {
      var newContent = {
        url: this.props.content.url,
        subtext: e.target.value
      };
      //console.log(newContent);
      this.props.onContentChanged(this.props.position, newContent);
    }
  }

  renderBlock() {
    var Types = this.props.EmbedTypes;
    var EmbedType = Types[this.state.domain];
    return (
      <EmbedType
        url={this.state.url}
        checkContent={this.checkContent}
        content={this.props.content} />
    );
  }

  render() {
    let content = this.props.content;
    if(this.state.loaded) {
      return (
        <div className="katap-block">
          {this.renderBlock()}
          <input
            type="text"
            placeholder="Embed subtext"
            onChange={this.changeSubtext}
            value={content.subtext} />
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
