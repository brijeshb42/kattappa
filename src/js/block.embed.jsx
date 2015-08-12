(function(window) {
  var APP = window.Katappa || {};

  var urlRegExp =/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
  
  function getDomain(url) {
    var a = window.document.createElement("a");
    a.href = url;
    return a.hostname;
  }

  var Embed = React.createClass({

    getInitialState: function() {
      return {
        loaded: false,
        domain: '',
        url: ''
      };
    },

    getDefaultProps: function() {
      return {
        content: ''
      };
    },

    checkUrls: function(url, isProp){
      if(urlRegExp.test(url)) {
        var domain = getDomain(url);
        for(var key in APP.Blocks.Embed.Types) {
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
    },

    handleUrl: function(event) {
      if(event.keyCode === APP.Keys.ENTER) {
        this.checkUrls(event.target.value, false);
      }
    },

    componentDidMount: function() {
      this.refs.input.getDOMNode().focus();
      this.checkUrls(this.props.content, true);
    },

    checkContent: function(ok) {
      if(ok) {
        this.props.onContentChanged(this.props.position, this.state.url);
      } else if(this.props.content === this.state.url) {
      } else {
        this.setState({
          loaded: false
        });
      }
    },

    renderBlock: function() {
      return (
        React.createElement(APP.Blocks.Embed.Types[this.state.domain], {
          url: this.state.url,
          checkContent: this.checkContent
        })
      );
    },

    render: function() {
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
  });

  APP.Blocks.Embed = {
    Name: 'Embed',
    React: Embed,
    Icon: '',
    Empty: function() {
      return '';
    },
    Description: 'Embed',
    isEmpty: function(content) {
      return (content === '');
    },
    Types: {}
  };
  window.Katappa = APP;

})(window);
