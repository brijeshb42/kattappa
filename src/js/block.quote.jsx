(function(window) {
  var APP = window.LegoBlocks || {};

  var BlockQuote = React.createClass({

    // focus: function() {
    //   //this.quill.focus();
    // },

    // componentDidMount: function(){
    //   //this.initiateEditor();
    //   this.focus();
    // },

    captureReturn: function() {
      this.props.addBlock("Text", this.props.position);
    },

    onContentChanged: function(content) {
      this.props.onContentChanged(this.props.position, content);
    },

    render: function() {
      return (
        <blockquote className="legob-text">
          <APP.QuillComponent
            content={this.props.content}
            captureReturn={this.captureReturn}
            onContentChanged={this.onContentChanged} />
        </blockquote>
      );
    }

  });
  
  //APP.BlockTypes.Text = 'Text';
  APP.Blocks.Quote = {
    Name: 'Quote',
    React: BlockQuote,
    Icon: '',
    Empty: function() {
      return '';
    },
    Description: 'Block Quote',
    isEmpty: function(content) {
      return (content.replace(/(<([^>]+)>)/ig,'') === '');
    }
  };
  window.LegoBlocks = APP;

})(window);
