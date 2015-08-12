(function(window) {
  var APP = window.Katappa || {};

  var UploadUrl = "";

  var BlockImage = React.createClass({

    getInitialState: function() {
      return {
        message: 'Drop image here or click to add.'
      };
    },

    handleImage: function(files) {
      var self = this;
      var file = files[0];
      if(file.type.indexOf("image/") !== 0) {
        alert("Provide a valid image file.");
        return;
      }
      if(APP.Blocks.Image.UploadUrl !== "") {
        var data = new FormData();
        data.append("image", file);
        fetch(APP.Blocks.Image.UploadUrl, {
          method: 'POST',
          credentials: 'same-origin',
          body: data
        }).then(function(response) {
          if(response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            var error = new Error(response.statusText);
            error.response = response;
            throw error;
          }
        }).then(function(json) {
          if(json.type && json.type === "success") {
            //console.log(json);
            if(self.props.onContentChanged) {
              self.props.onContentChanged(self.props.position, json.message);
            }
          } else {
            alert('Could not upload.');
          }
        }).catch(function(error) {
          console.log(error);
          alert('Error while uploading. Retry.');
        });
      } else if(this.props.onContentChanged){
        this.props.onContentChanged(this.props.position, file.preview);
      }
    },

    render: function() {
      if(this.props.content === "") {
        return (
          <div className="katap-image">
            <APP.Droppable
              onDrop={this.handleImage}>
              <p>{this.state.message}</p>
            </APP.Droppable>
          </div>
        );
      } else {
        return (
          <div className="katap-image">
            <img src={this.props.content} />
          </div>
        );
      }
    }

  });
  
  //APP.BlockTypes.Text = 'Text';
  APP.Blocks.Image = {
    Name: 'Image',
    React: BlockImage,
    Icon: '',
    Empty: function() {
      return '';
    },
    Description: 'Image',
    UploadUrl: UploadUrl,
    isEmpty: function(content) {
      return (content === '');
    }
  };
  window.Katappa = APP;

})(window);
