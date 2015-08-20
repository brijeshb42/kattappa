var gulp    = require('gulp'),
    util    = require('../utils'),
    del     = require('del');


module.exports = function() {
    del([util.dest, util.assetSrc+'css'], function (err, paths) {
        console.log('Deleted files/folders:\n', paths.join('\n'));
    });
};
