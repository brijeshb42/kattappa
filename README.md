## Kattappa

A block based Rich Text editor.

It uses:
* [ReactJS](http://facebook.github.io/react/) for its UI.
* [Quill](http://quilljs.com) for rich text editing support.
* [fetch](https://github.com/github/fetch) for ajax calls to server (used when image files are required to be uploaded).

### Installation
* For `browserify` users:
    * `npm install kattappa`.
    * `var Kattappa = require('kattappa');`

* To directly use in browser:
    * `bower install kattappa`.
    * CSS:
        * `<link rel="stylesheet" type="text/css" href="bower_components/quill/dist/quill.base.css">`
        * `<link rel="stylesheet" type="text/css" href="bower_components/quill/dist/quill.snow.css">`
        * `<link rel="stylesheet" type="text/css" href="kattappa.css">`. (Used for basic styling of the blocks. You can extend these to be what you want.)
    * Javascript:
        * `<script type="text/javascript" src="bower_components/react/react-with-addons.min.js"></script>`
        * `<script type="text/javascript" src="bower_components/quill/dist/quill.min.js"></script>`
        * `<script src="bower_components/fetch/fetch.js"></script>`
        * `<script type="text/javascript" src="kattappa.js"></script>`

* Or Download the latest release [here](https://github.com/brijeshb42/kattappa/releases/latest).

### Usage
It is available in the `window` global as `Kattappa`.
* Html:
    * `<div id="editor-ui"></div>`

* Script:
    * First create an `editor` instance.
    * Then mount it to the desired DOM node.

```javascript
var editor = React.createElement(Kattappa.Editor);
React.render(editor, document.getElementById('editor-ui'));
```

To get the content of the blocks, you can access the `getBlocks()` method of the editor by adding a `ref` to the editor instance and then call its `getBlocks` method.

var App = React.createClass({
    getBlocks: function() {
        console.log(this.refs.editor.getBlocks());
    },

    render: function() {
        return (
            <div>
                <button onClick={this.getBlocks}>GET</button>
                <Kattappa.Editor ref="editor" />
            </div>
        );
    }
});

React.render(<App />, document.getElementById('editor-ui'));
```

If you already have a list of blocks (that may have been previously saved on the server):
    * You can first fetch the block list from the server.
    * Pass the function that returns the `blocks` fetched.
    * Make sure each block has a `key` key. This is used by React and facilitates easy manipulation of position (up, down or remove block).
    * If the blocks don't have a `key`, you can just generate keys for each of them in the browser using the utility function provided `Kattappa.uuid()`.
    * The `key` functionality applies to each of the items in `UL` or `OL` also.

```javascript

var blockUrl = "/blocks.json";

var App = React.createClass({
    getInitialState: function() {
      return {
        loading: true,
        blocks: []
      };
    },

    componentDidMount: function() {
      var self = this;
      fetch("/blocks.json")
      .then(function(resp) {
        return resp.json();
      })
      .then(function(json) {
        var b = [];
        for(var i=0; i< json.length; i++) {
          json[i].key = Kattappa.uuid();
          b.push(json[i]);
        }
        console.log(b);
        self.setState({
          loading: false,
          blocks: b
        });
      })
    },

    setBlocks: function() {
      return this.state.blocks;
    },

    save: function() {
      console.log(this.refs.kattappa.getBlocks());
    },

    render: function() {
      console.log(this.setBlocks())
      if(this.state.loading) {
        return React.createElement('div', null, 'Loading...');
      }
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.save },
          'Save'
        ),
        React.createElement(Kattappa.Editor, {
          ref: 'kattappa',
          getBlocks: this.setBlocks })
      );
    }
});
var app = React.createElement(App);
React.render(app, document.getElementById("editor-ui"));
```

#### Image upload
* By default, the image block just renders the image using `createObjectURL`.
* If you want the image to also be uploaded to the server, you can do this:
    * Provide a `prop`, `UploadUrl` with the URL to your server's upload endpoint, to the **Editor** instance.
        * ```<Kattappa.Editor UploadUrl="/upload_image" />```
    * If `UploadUrl` is provided, the `Image` block will send a POST request to the url with `image` key having the selected image file and it expects a `json` reponse from the server of the following format:
```json
{
    "type": "success",
    "message": "http://absoluteurl.to/the/uploaded/image.jpg"
}
```
#### Goodies
* `Kattappa` supports the following embeds out of the box:
    * Instagram
    * Youtube
    * Vimeo
    * Vine


* Current Blocks:
    - [x] Text
    - [x] Quote
    - [x] Image
    - [x] Horizontal Break
    - [x] Ordered List
    - [x] Unordered List
    - [x] Embeds
        - [x] Instagram
        - [x] Vimeo
        - [x] Youtube
        - [x] Vine

* Extra features:
    * Blocks can be rearranged.
    * Existing blocks can be deleted.
    * Automatic image upload if `UploadUrl` is provided.

#### Todo
* Add instructions to create custom blocks.

### Made while working @ [http://scroll.in](http://scroll.in)

Currently being used in our internal CMS.
