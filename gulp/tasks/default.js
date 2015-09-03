var gulp        = require('gulp');

module.exports = function() {
    gulp.start('html', 'less', 'watch', 'browserify-vendor', 'browserify');
};
