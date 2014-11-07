var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	jshint = require('gulp-jshint'),
	notify = require('gulp-notify'),
	config = require('../config').lint;

gulp.task('lint', function() {
	return gulp.src(config.src)
		.pipe(jshint())
		.pipe(jshint.reporter(config.reporter))
		.pipe(notify({ message: "JS Hinting task complete"}));
});