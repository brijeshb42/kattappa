(function(window) {
  var APP = window.Kattappa || {};

  var Action = APP.Action;

  var LI = React.createClass({

    captureReturn: function() {
      this.props.addItem(this.props.position);
    },

    onContentChanged: function(content) {
      //console.log(content);
      this.props.onContentChanged(this.props.position, content);
    },

    render: function() {
      return (
        <APP.QuillComponent
          content={this.props.content}
          captureReturn={this.captureReturn}
          onContentChanged={this.onContentChanged} />
      );
    }

  });

  var OL = React.createClass({
    onContentChanged: function(position, content) {
      this.props.content[position].content = content;
      this.props.onContentChanged(this.props.position, this.props.content);
    },

    addItem: function(position) {
      if(position < 0 || position >= this.props.content.length) {
        return;
      }
      var content = this.props.content;
      content.push({
        content: '',
        key: APP.uuid()
      });
      this.props.onContentChanged(this.props.position, content);
    },

    handleItemRemove: function(action, position) {
      console.log(position);
      if(this.props.content.length < 2) {
        return;
      }
      var content = this.props.content;
      console.log(content);
      content.splice(position, 1);
      console.log(content);
      this.props.onContentChanged(this.props.position, content);
    },

    renderListItem: function() {
      var self = this;
      var li = [];
      this.props.content.map(function(item, index) {
        li.push(
          <li key={item.key}>
            <APP.BlockControl
              onlyRemove={true}
              blockAction={self.handleItemRemove}
              position={index}
              length={self.props.content.length} />
            <LI
              position={index}
              content={item.content}
              addItem={self.addItem}
              onContentChanged={self.onContentChanged} />
          </li>
        );
      });
      return li;
    },

    render: function() {
      return (
        <ol className="katap-list">
        {this.renderListItem()}
        </ol>
      );
    }
  });

  APP.Blocks.OL = {
    Name: 'OL',
    React: OL,
    Icon: '',
    Empty: function() {
      return [{
        content: '',
        key: APP.uuid()
      }];
    },
    Description: 'Ordered List',
    isEmpty: function(content) {
      for(var i = 0; i<content.length; i++) {
        if(content[i].content.replace(/(<([^>]+)>)/ig,'') !== '') {
          return false
        }
      }
      return true;
    }
  };

  window.Kattappa = APP;

})(window);
