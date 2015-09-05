var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    less            = require('gulp-less'),
    header          = require('gulp-header'),
    livereload      = require('gulp-livereload'),
    minifyCss       = require('gulp-minify-css')
    sourceMaps      = require('gulp-sourcemaps'),
    autoPrefixer    = require('gulp-autoprefixer'),
    onError         = require('../utils/handleErrors'),
    util            = require('../utils');


var src = util.assetSrc + '*.less';

var dest = util.assetDest + 'css';

var apConfig = {
    browsers: ['last 2 versions'],
    cascade: false
};

module.exports = function() {
    return gulp.src(src)
        .pipe(util.isProd() ? sourceMaps.init() : gutil.noop())
        .pipe(less())
        .on('error', onError)
        .pipe(util.isProd() ? sourceMaps.write() : gutil.noop())
        .pipe(util.isProd() ? autoPrefixer(apConfig) : gutil.noop())
        .pipe(util.isProd() ? minifyCss() : gutil.noop())
        .pipe(util.isProd() ? header(util.banner, { pkg : util.pkg }) : gutil.noop())
        .pipe(gulp.dest(dest))
        .pipe(util.isProd() ? gutil.noop() : livereload());
};
