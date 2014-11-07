var gulp = require('gulp'),
	changed = require('gulp-changed'),
	gulpif = require('gulp-if'),
	imagemin = require('gulp-imagemin'),
	notify = require('gulp-notify'),
	config = require('../config.js').assets.images;

/**
 * Images Task
 *
 * This task will run when te developer executes "gulp images" on the
 * command line. We'll use this configuration object to know
 * wich images should be optimize when this task is executed.
 */

gulp.task('images', function () {
	return gulp.src(config.src).pipe(changed(config.output))
	.pipe(gulpif(config.optimize, imagemin(config.options)))
	.pipe(gulp.dest(config.output))
	.pipe(notify({ message: 'Images task complete' }));
});