(function(window) {
  var APP = window.Kattappa || {};

  var items = [
    {
      label:'Text',
      type:'group',
      items: [
        { type:'link', label:'Link'}
      ]
    }
  ];

  var H2 = React.createClass({

    captureReturn: function() {
      console.log('enter');
      this.props.addBlock("Text", this.props.position);
    },

    onContentChanged: function(content) {
      this.props.onContentChanged(this.props.position, content);
    },

    render: function() {
      return (
        <h2 className="katap-h2">
          <APP.QuillComponent
            content={this.props.content}
            captureReturn={this.captureReturn}
            onContentChanged={this.onContentChanged} />
        </h2>
      );
    }

  });

  var H3 = React.createClass({

    captureReturn: function() {
      console.log('enter');
      this.props.addBlock("Text", this.props.position);
    },

    onContentChanged: function(content) {
      this.props.onContentChanged(this.props.position, content);
    },

    render: function() {
      return (
        <h3 className="katap-h3">
          <APP.QuillComponent
            content={this.props.content}
            captureReturn={this.captureReturn}
            onContentChanged={this.onContentChanged} />
        </h3>
      );
    }

  });

  var H4 = React.createClass({

    captureReturn: function() {
      console.log('enter');
      this.props.addBlock("Text", this.props.position);
    },

    onContentChanged: function(content) {
      this.props.onContentChanged(this.props.position, content);
    },

    render: function() {
      return (
        <h4 className="katap-h4">
          <APP.QuillComponent
            content={this.props.content}
            captureReturn={this.captureReturn}
            onContentChanged={this.onContentChanged} />
        </h4>
      );
    }

  });
  
  //APP.BlockTypes.Text = 'Text';
  APP.Blocks.H2 = {
    Name: 'H2',
    React: H2,
    Icon: '',
    Empty: function() {
      return '';
    },
    Description: 'Heading 2',
    isEmpty: function(content) {
      if(content.replace(/(<([^>]+)>)/ig,'') === '') {
        return true;
      }
      return false;
    }
  };

  // APP.Blocks.H3 = {
  //   Name: 'H3',
  //   React: H3,
  //   Icon: '',
  //   Empty: '',
  //   isEmpty: function(content) {
  //     if(content.replace(/(<([^>]+)>)/ig,'') === '') {
  //       return true;
  //     }
  //     return false;
  //   }
  // };

  // APP.Blocks.H4 = {
  //   Name: 'H4',
  //   React: H4,
  //   Icon: '',
  //   Empty: '',
  //   isEmpty: function(content) {
  //     if(content.replace(/(<([^>]+)>)/ig,'') === '') {
  //       return true;
  //     }
  //     return false;
  //   }
  // };
  window.Kattappa = APP;

})(window);
