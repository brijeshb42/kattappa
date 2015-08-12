---
layout: page
color: teal
title: Using Kattappa
---

<a href="//bitwiser.in/kattappa/demo.html" class="mui-btn mui-btn-primary mui-btn-lg">Demo</a>

#### Load dependencies in your html:
* CSS:
    * `<link rel="stylesheet" type="text/css" href="bower_components/quill/dist/quill.base.css">`
    * (A bundled quill css comes with `Kattappa`. If you don't use bower, you can directly use:
        * `<link rel="stylesheet" type="text/css" href="kattappa.vendor.css">`)
    * `<link rel="stylesheet" type="text/css" href="kattappa.css">`. (Used for basic styling of the blocks. You can extend these to be what you want.)
* Javascript:
    * `<script type="text/javascript" src="bower_components/react/react-with-addons.min.js"></script>`
    * `<script type="text/javascript" src="bower_components/quill/dist/quill.min.js"></script>`
    * `<script src="bower_components/fetch/fetch.js"></script>`
    * (Or you can just include `<script src="kattappa.vendor.js"></script>` instead of the above 3).
    * `<script type="text/javascript" src="kattappa.js"></script>`

* Html:
    * `<div id="editor-ui"></div>`

* Script:
    * First create an `editor` instance.
    * Then mount it to the desired DOM node.

### For creating a new list of Blocks

* The editor accepts a `onSave` prop that will be passed the list of `blocks` created by the user. You can then handle the list of blocks as you like inside your function.

{% highlight javascript %}
function onSave(blocks) {
    console.log(blocks);
    // save the blocks on the server.
}

var editor = React.createElement(Kattappa.Editor, {
    onSave: onSave
});
React.render(editor, document.getElementById('editor-ui'));
{% endhighlight %}

### For already existing blocks (i.e, already saved on server)

* The editor instance accepts 3 props:
    * `blockUrl`: The url endpoint to fetch a particular set of blocks. For ex: url can be `/article/ID`.
    * `processData`: The function is then passed the json `response` from the `blockUrl`. It is supposed to return just the array of blocks out of the `response` object. Before returning the array, make sure each block contains a unique `key`.
    * `onSave`: This function is called whenever `Save` button is clicked.

{% highlight javascript %}
var blockUrl = "/blocks.json";
function processData(json) {
    for(var i=0; i < json.length; i++) {
        if(!json[i].key) {
            json[i].key = Kattappa.uuid()
        }
    }
    return json;
}

function onSave(blocks) {
    console.log(blocks);
    // save the blocks on the server.
}

var editor = React.createElement(Kattappa.Editor, {
    blockUrl: blockUrl,
    processData: processData,
    onSave: onSave
});
React.render(editor, document.getElementById('editor-ui'));
{% endhighlight %}

The editor has a `Save` button when there are 1 or more blocks. To get the current block content, you can pass a callback function `onSave` as a React `prop` that will be called whenever `Save` button is clicked. This callback receives the current `blocks` array.

{% highlight javascript %}
var editor = React.createElement(Kattappa.Editor, {
    onSave: function(blocks) {
        console.log('This is the list of current blocks.');
        console.log(blocks);
    }
});
React.render(editor, document.getElementById('editor-ui'));
{% endhighlight %}

#### Image upload

* By default, the image block just renders the image using `createObjectURL`.
* If you want the image to also be uploaded to the server, you can do this:
    * Change the value of `UploadUrl` to your server's endpoint
        * `Kattappa.Block.Image.UploadUrl = '/upload_image';`
    * If `UploadUrl` is provided, the `Image` block will send a POST request to the url with `image` key having the selected image file and it expects a `json` reponse from the server of the following format:

{% highlight javascript %}
{
    "type": "success",
    "message": "http://absoluteurl.to/the/uploaded/image.jpg"
}
{% endhighlight %}

#### Goodies

* `Kattappa` supports the following embeds out of the box:
    * Instagram
    * Youtube
    * Vimeo
* Also has Twitter embed in `kattappa.embed.js`. But this also has a dependency on server.
* The Twitter embed expects:
    * The server to implement a `/tweet` endpoint that will be called with the `url=url_to_twitter_status` query string.
    * The response from the server should be a json with the following structure:

{% highlight javascript %}
{
    "html": "The html retrived when visiting 'https://api.twitter.com/1/statuses/oembed.json?url=url_to_twitter_status' directly"
}
{% endhighlight %}

#### Todo
* Add instructions to create custom blocks.

#### Known issues
* Better handling of `Return` key press when inside one of the `Text` blocks. (Text, Quote, H2, UL, OL)
* If a Twitter embed block is rearranged to make it go upwards, the rendered part disappears from the UI.

### Made while working @ [http://scroll.in](http://scroll.in)
