var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    connect     = require('gulp-connect'),
    livereload  = require('gulp-livereload'),
    util        = require('../utils');

module.exports = function() {
    livereload.listen({
        port: 35729,
        start: true
    });
    gutil.log('The env is : ',  gutil.colors.magenta((util.isProd()) ? '"prod"' : '"dev"'));
    // connect.server({
    //     port: 5000,
    //     root: util.dest
    // });
    gulp.watch(util.assetSrc + '*.less', ['less']);
    gulp.watch(util.assetSrc + '**/*.js', ['browserify']);
    gulp.watch(util.src + '**//*.html', ['html']);
};
