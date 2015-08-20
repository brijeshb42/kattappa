var gulp        = require('gulp');

module.exports = function() {
    gulp.start('html', 'less', 'browserify', 'watch', 'browserify-vendor');
};
