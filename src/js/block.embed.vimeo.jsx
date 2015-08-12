(function(window) {

  var APP = window.Katappa || {};
  var Types = APP.Blocks.Embed.Types || {};

  var Vimeo = React.createClass({

    getInitialState: function() {
      return {
        message: 'Wait',
        id: '',
        valid: false
      };
    },

    getDefaultProps: function() {
      return {
        url: '',
        regex: /(?:http[s]?:\/\/)?(?:www.)?vimeo\.co(?:.+(?:\/)([^\/].*)+$)/
      };
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
      this.setState({
        message: 'OK.',
        id: match[1],
        valid: true
      });
      this.props.checkContent(true);
    },

    render: function() {
      if(this.state.valid) {
        return (
          <div className="katapembed katapvimeo">
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
        <div className="katapembed">Invalid vimeo URL.</div>
      );
    }
  });
  
  Types.vimeo = Vimeo;
  
  APP.Blocks.Embed.Types = Types
  window.Katappa = APP;
})(window);
