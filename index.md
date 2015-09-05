---
layout: pagepost
title: Kattappa - A block based rich text editor.
---

## Kattappa

A block based Rich Text editor.

<a href="//bitwiser.in/kattappa/demo.html" class="mui-btn mui-btn-primary mui-btn-lg">Demo</a>

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
        * `<link rel="stylesheet" type="text/css" href="bower_components/kattappakattappa.css">`. (Used for basic styling of the blocks. You can extend these to be what you want.)
    * Javascript:
        * `<script type="text/javascript" src="bower_components/react/react-with-addons.min.js"></script>`
        * `<script type="text/javascript" src="bower_components/quill/dist/quill.min.js"></script>`
        * `<script src="bower_components/fetch/fetch.js"></script>`
        * `<script type="text/javascript" src="kattappa.js"></script>`

* Or Download the latest release [here](https://github.com/brijeshb42/kattappa/releases/latest).

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
    * Automatic image upload if UploadUrl is provided.

#### Todo
* Add instructions to create custom blocks.
