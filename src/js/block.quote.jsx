(function(window) {
  var APP = window.Kattappa || {};

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
      var content = {
        content: content,
        credit: this.props.content.credit
      };
      this.props.onContentChanged(this.props.position, content);
    },

    onCreditChange: function(e) {
      var content = {
        content: this.props.content.content,
        credit: e.target.value
      };
      this.props.onContentChanged(this.props.position, content);
    },

    render: function() {
      return (
        <blockquote className="katap-text">
          <input
            className="katap-blockquote-credit"
            type="text"
            placeholder="Credit"
            onChange={this.onCreditChange}
            value={this.props.content.credit} />
          <APP.QuillComponent
            content={this.props.content.content}
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
      return {
        content: '',
        credit: ''
      };
    },
    Description: 'Block Quote',
    isEmpty: function(content) {
      return (content.replace(/(<([^>]+)>)/ig,'') === '');
    }
  };
  window.Kattappa = APP;

})(window);
