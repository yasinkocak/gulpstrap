var gulp = require('gulp'),
	del = require('del'),
	config = require('../config');

/**
 * Clean Task
 *
 * This task will run when te developer executes "gulp clean" on the
 * command line. We'll use this configuration object to know
 * wich directory should be cleaned when this task is executed.
 */

gulp.task('clean', del.bind(null, config.clean));