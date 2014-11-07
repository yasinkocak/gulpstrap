var gulp = require('gulp'),
	autowatch = require('gulp-autowatch'),
	config = require('../config');

/**
 * Watch Task
 *
 * This task will run when te developer executes "gulp watch"
 * on the command line. We'll use this configuration object 
 * to know wich paths schould be watched when this task is executed
 * 
 */

gulp.task('watch', function(cb) {
	autowatch(gulp, config.watchers);
	return cb();
});

/*
Grunt watch error - Waiting…Fatal error: watch ENOSPC
The system has a limit to how many files can be watched by a user. 
You can run out of watches pretty quickly if you have Grunt running with other programs like Dropbox. 
This command increases the maximum amount of watches a user can have. 
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
 */