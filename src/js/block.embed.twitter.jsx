(function(window) {

  var APP = window.LegoBlocks || {};
  var Types = APP.Blocks.Embed.Types || {};

  var oEmbedUrl = '/tweet?url=';
  var loaded = false;

  var Twitter = React.createClass({

    getInitialState: function() {
      return {
        message: 'Wait',
        id: '',
        valid: false,
        html: ''
      };
    },

    getDefaultProps: function() {
      return {
        url: '',
        regex: /https?\:\/\/twitter\.com\/(?:[a-zA-Z0-9_]+)\/(?:status)\/([0-9]+)\/?(.*){0,}/gi
      };
    },

    loadExternalScript: function() {
      if(loaded) {
        console.log('already loaded');
        if(window.twttr) {
          twttr.widgets.load();
        }
        return;
      }
      var scriptUrl = '//platform.twitter.com/widgets.js';
      var tag = document.createElement('script');
      tag.src = scriptUrl;
      tag.async = 1;

      tag.onload = function() {
        loaded = true;
        if(window.twttr) {
          console.log('loaded now');
          twttr.widgets.load();
        }
      };

      window.document.body.appendChild(tag);
    },

    componentDidMount: function() {
      this.validate();
    },

    validate: function() {
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
      var self = this;
      fetch(oEmbedUrl+this.props.url)
        .then(function(response) {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            var error = new Error(response.statusText);
            error.response = response;
            throw error;
          }
        }).then(function(json) {
          if(json.html) {
            self.setState({
              html: '<div>'+json.html+'</div>'
            });
            self.loadExternalScript();
          }
        }).catch(function(error) {
          console.log(error);
          self.setState({
            message: 'Error while loading tweet.'
          });
        });
      this.setState({
        message: 'Loading...',
        id: match[1],
        valid: true
      });
      this.props.checkContent(true);
    },

    render: function() {
      console.log('rndr');
      console.log(this.state);
      if(this.state.valid) {
        if(this.state.html === '') {
          return (
            <div className="legob-embed legob-twitter">
            {this.state.message}
            </div>
          );
        }
        return (
          <div
            className="legob-embed legob-twitter"
            dangerouslySetInnerHTML={{__html: this.state.html}} />
        );
      }
      return (
        <div className="legob-embed">Invalid twitter URL.</div>
      );
    }
  });
  
  Types.twitter = Twitter;
  
  APP.Blocks.Embed.Types = Types
  window.LegoBlocks = APP;
})(window);
