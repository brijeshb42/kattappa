var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    source          = require('vinyl-source-stream'),
    livereload      = require('gulp-livereload'),
    uglify          = require('gulp-uglify'),
    sourceMaps      = require('gulp-sourcemaps'),
    buffer          = require('vinyl-buffer'),
    browserify      = require('browserify'),
    babel           = require('babelify'),
    onError         = require('../utils/handleErrors'),
    util            = require('../utils'),
    libs            = require('../utils/libs');


var entry = util.assetSrc + 'index.js';
var exit = 'kattappa.js';

module.exports = function() {
    
    var debug = util.isDev() ? true : false;

    var bundler = browserify(
        entry, {
            debug: debug,
            extension: ['.js', '.jsx'],
            standalone: 'Kattappa'
        });
    Object.keys(libs).forEach(function(lib) {
        bundler.external(libs[lib]);
    });

    return bundler
        .transform(babel)
        .bundle()
        .on('error', onError)
        .pipe(source(exit))
        .pipe(buffer())
        .pipe(util.isProd() ? buffer() : gutil.noop())
        .pipe(util.isProd() ? uglify({mangle: false}) : gutil.noop())
        .pipe(gulp.dest(util.assetDest + 'js'))
        .pipe(livereload());
};
