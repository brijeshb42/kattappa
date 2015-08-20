var gulp = require('gulp');

module.exports = function(tasks) {
    tasks.forEach(function(task) {
        gulp.task(task, require('./tasks/' + task));
    });

    return gulp;
};
