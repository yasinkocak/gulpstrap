var gulp = require('gulp'),
	config = require('../config.js');

/**
 * Copy Task
 *
 * This task will run when te developer executes "gulp copy" on the
 * command line. We'll use this configuration object to know
 * wich files should be duplicated when this task is executed.
 */

gulp.task('copy', ['clean'], function() {
	return gulp.src(config.duplicate, { dot: true }).pipe(gulp.dest(config.baseDir));
});