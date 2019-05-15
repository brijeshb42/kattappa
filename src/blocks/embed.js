import React from 'react';
import url from 'url';
import {UrlRegex} from '../utils';
import Keys from '../utils/keys';

var Types = require('./embeds');

function getDomain(link) {
  var a = url.parse(link);
  return a.hostname === 'youtu.be' ? 'youtube.com' : a.hostname;
}

let Embed = {
  Name: 'embed',
  Icon: '',
  Empty: function() {
    return {
      url: '',
      subtext: '',
      meta: {},
    };
  },
  maximumBlocks: 0,
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
      url: '',
      className: '',
      urlInput: ''
    };
    this.urlInputNode = null;
    this.getClassName = this.getClassName.bind(this);
    this.checkUrls = this.checkUrls.bind(this);
    this.handleUrl = this.handleUrl.bind(this);
    this.checkContent = this.checkContent.bind(this);
    this.renderBlock = this.renderBlock.bind(this);
    this.changeSubtext = this.changeSubtext.bind(this);
    this.updateMeta = this.updateMeta.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
  }

  getClassName() {
    return 'katap-block katap-embed '+(this.props.className || this.state.className);
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
      this.setState({
        urlInput: ''
      })
    } else {
      if(!isProp) {
        alert("Enter a valid url");
        this.setState({
          urlInput: ''
        })

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
      this.urlInputNode.focus()
    }
    this.checkUrls(this.props.content.url, true);
  }

  checkContent(ok, msg) {
    if(ok && this.props.onContentChanged) {
      const newData = this.props.content;
      newData.url = this.state.url;
      this.props.onContentChanged(this.props.position, newData);
    } else {
      alert(msg);
    }
  }

  changeSubtext(e) {
    if(this.props.onContentChanged) {
      const newContent = this.props.content;
      newContent.subtext = e.target.value;
      //console.log(newContent);
      this.props.onContentChanged(this.props.position, newContent);
    }
  }

  updateMeta(newMeta) {
    const newContent = this.props.content;
    newContent.meta = newMeta;
    this.props.onContentChanged(this.props.position, newContent);
  }

  onDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      className: 'katap-embed-dragover'
    });
  }

  onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'move';
    return false;
  }

  onDrop(e) {
    if (e.preventDefault) e.preventDefault(); 
    if (e.stopPropagation) e.stopPropagation();
    this.setState({
      className: ''
    });
    let dropURL = e.dataTransfer.getData("URL");
    if (dropURL === "") {
      dropURL = e.dataTransfer.getData("text");
    }
    if (dropURL !== "") {
      this.checkUrls(dropURL, false);
    }
  }

  onDragLeave(e) {
    this.setState({
      className: 'katap-block katap-embed'
    });
  }

  renderBlock() {
    var Types = this.props.EmbedTypes;
    var EmbedType = Types[this.state.domain];
    return (
      <EmbedType
        url={this.state.url}
        checkContent={this.checkContent}
        content={this.props.content}
        updateMeta={this.updateMeta} />
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
        <div
          className={this.getClassName()}
          onDragEnter={this.onDragEnter}
          onDragOver={this.onDragOver}
          onDragLeave={this.onDragLeave}
          onDrop={this.onDrop}>
          <p>Drop links here or paste below</p>
          <input
            ref={(node) => {this.urlInputNode=node}}
            type="text"
            placeholder="Enter URL and press enter"
            onChange={(event) => {
              this.setState({
                urlInput: event.target.value
              })
            }}
            onKeyUp={this.handleUrl}
            value={this.state.urlInput}
             />
          <p>Supported embeds: {Object.keys(this.props.EmbedTypes).join(', ')}</p>
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
