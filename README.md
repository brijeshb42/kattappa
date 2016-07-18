>Note: This project is highly under development as it is being integrated into our CMS and the APIs are not consistent and can change at anytime. New features are added (or something is removed) based on the requirements of the CMS.

## Kattappa [demo](http://bitwiser.in/kattappa/)

A block based Rich Text editor.

It uses:

- [ReactJS](http://facebook.github.io/react/) for its UI.
- [scribe](https://github.com/guardian/scribe) for rich text editing support.

### Installation
* For `browserify/webpack` users:
    * `npm install kattappa`.
    * In es5:
        - `var Kattappa = require('kattappa');`
    * In es6:
        - `import Kattappa from 'kattappa'`


* Or Download the latest release [here](https://github.com/brijeshb42/kattappa/releases/latest).

### Usage

See [usage](https://github.com/brijeshb42/kattappa/blob/es6/src/demo.js);

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
        - [x] Facebook

* Extra features:
    * Blocks can be rearranged.
    * Existing blocks can be deleted.
    * Automatic image upload if `UploadUrl` is provided.

#### Todo
* Add instructions to create custom blocks.

### Made while working @ [http://scroll.in](http://scroll.in)

Currently being used in our internal CMS.
