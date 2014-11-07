var gulp = require('gulp'),
	inSequence = require('run-sequence'),
	config = require('../config.js');

/**
 * Default Task
 *
 * This task will run when te developer executes "gulp" on the
 * command line. We'll use this configuration object to know
 * wich task should be fired when this task is executed.
 */

gulp.task('default', function() {
	inSequence.apply(this, config.tasks);
});