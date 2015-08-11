(function(window) {

  var APP = window.LegoBlocks || {};
  var Types = APP.Blocks.Embed.Types || {};

  var Instagram = React.createClass({

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
        regex: /https?:\/\/instagram\.com\/p\/([^\/]+)\/?.*/gi
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
          <div className="legob-embed legob-instagram">
          <iframe
          src={'//instagram.com/p/'+this.state.id+'/embed'}
          frameBorder={0}
          allowFullScreen={true} />
          </div>
          );
      }
      return (
        <div className="legob-embed">Invalid instagram URL.</div>
        );
    }
  });
  
  Types.instagram = Instagram;
  
  APP.Blocks.Embed.Types = Types
  window.LegoBlocks = APP;
})(window);
