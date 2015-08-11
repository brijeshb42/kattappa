var gulp        = require('gulp'),
    less        = require('gulp-less'),
    minifyCss   = require('gulp-minify-css'),
    uglify      = require('gulp-uglify'),
    sourcemaps  = require('gulp-sourcemaps'),
    babel       = require('gulp-babel'),
    rename      = require('gulp-rename'),
    usemin      = require('gulp-usemin'),
    header      = require('gulp-header');

var src = {
    html: 'dist.html',
    css: 'src/css/'
};

var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

function errorHandler (error) {
    //console.log(error);
    console.log(error.toString());
    this.emit('end');
}

gulp.task("less", function() {
    return gulp.src(src.css+"*.less")
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(minifyCss())
        .pipe(rename("legoblocks.css"))
        .pipe(sourcemaps.write('./maps'))
        .pipe(header(banner, {pkg: pkg}))
        .pipe(gulp.dest('dist'));
});

gulp.task("usemin", ['less'], function() {
    return gulp.src(src.html)
        .pipe(usemin({
            css: [less(), minifyCss()],
            html: [],
            jsv: ['concat'],
            js: [sourcemaps.init(), babel(), uglify({mangle: false}), sourcemaps.write('./maps'), header(banner, {pkg: pkg})],
            jse: [sourcemaps.init(), babel(), uglify({mangle: false}), sourcemaps.write('./maps'), header(banner, {pkg: pkg})]
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task("default", ["usemin"]);
