var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    uglify          = require('gulp-uglify'),
    babel           = require('gulp-babel'),
    onError         = require('../utils/handleErrors'),
    util            = require('../utils');


var entry = util.assetSrc + '**//*.js';
var exit = 'kattappa.js';

module.exports = function() {
    
    var debug = util.isDev() ? true : false;

    return gulp.src(entry)
        .pipe(babel())
        .on('error', onError)
        .pipe(util.isProd() ? uglify({mangle: false}) : gutil.noop())
        .pipe(gulp.dest('./npm'));
};
