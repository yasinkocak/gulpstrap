var gulp = require('gulp'),
	gulpif = require('gulp-if'),
	concat = require('gulp-concat'),
	stripDebug = require('gulp-strip-debug'),
	uglify = require('gulp-uglify'),
	config = require('../config.js').assets.js;

/**
 * JavaScript File Concatenation
 *
 * This task will concatenate and minify your JavaScript files 
 * in order. This provides a quick and simple way to reduce
 * the number of HTTP requests your application executes.
 * 
 */

gulp.task('scripts', function() {
	return gulp.src(config.src)
		.pipe(gulpif(config.combine, concat('app.min.js')))
		.pipe(gulpif(config.stripDebug, stripDebug()))
		.pipe(gulpif(config.minify, uglify()))
		.pipe(gulp.dest(config.output));
});