(function(window) {

  var APP = window.LegoBlocks || {};
  var Types = APP.Blocks.Embed.Types || {};

  var Youtube = React.createClass({

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
        regex: /^.*(?:(?:youtu\.be\/)|(?:youtube\.com)\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*)/
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
          <div className="legob-embed legob-youtube">
          <iframe
            src={'//youtube.com/embed/'+this.state.id}
            frameBorder={0}
            width={580}
            height={320}
            allowFullScreen={true} />
          </div>
        );
      }
      return (
        <div className="legob-embed">Invalid youtube URL.</div>
      );
    }
  });
  
  Types.youtu = Youtube;
  
  APP.Blocks.Embed.Types = Types
  window.LegoBlocks = APP;
})(window);
