var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    browserify  = require('browserify'),
    uglify      = require('gulp-uglify'),
    source      = require('vinyl-source-stream'),
    buffer      = require('vinyl-buffer'),
    onError     = require('../utils/handleErrors'),
    util        = require('../utils'),
    libs        = require('../utils/libs');

var entry = util.assetSrc + 'js/vendor.js';

module.exports = function() {

  var bundler = browserify({
      debug: false
  });

  Object.keys(libs).forEach(function(lib) {
    bundler.require(lib, {expose: libs[lib]});
  });

  var stream = bundler
    .bundle()
    .pipe(source('./'))
    .on('error', onError)
    .pipe(buffer())
    .pipe(util.isProd() ? uglify({mangle: false}) : gutil.noop())
    .pipe(gulp.dest(util.assetDest+'js/kattappa.vendor.js'));

  return stream;
};
