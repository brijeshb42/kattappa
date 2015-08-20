var gulp            = require('gulp'),
    util            = require('../utils');

module.exports = function() {
    return gulp.src(util.src + '**//*.html')
        .pipe(gulp.dest(util.dest));
};
