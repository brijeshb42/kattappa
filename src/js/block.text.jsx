(function(window) {
  var APP = window.LegoBlocks || {};

  var BlockText = React.createClass({

    captureReturn: function() {
      this.props.addBlock("Text", this.props.position);
    },

    onContentChanged: function(content) {
      this.props.onContentChanged(this.props.position, content);
    },

    render: function() {
      return (
        <div className="legob-text">
          <APP.QuillComponent
            content={this.props.content}
            captureReturn={this.captureReturn}
            onContentChanged={this.onContentChanged} />
        </div>
      );
    }

  });
  
  APP.Blocks.Text = {
    Name: 'Text',
    React: BlockText,
    Icon: '',
    Empty: function() {
      return '';
    },
    Description: 'Text',
    isEmpty: function(content) {
      return (content.replace(/(<([^>]+)>)/ig,'') === '');
    }
  };
  window.LegoBlocks = APP;

})(window);
