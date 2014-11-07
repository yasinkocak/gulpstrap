var gulp = require('gulp'),
	less = require('gulp-less'),
	gulpif = require('gulp-if'),
	autoprefixer = require('gulp-autoprefixer'),
	minifyCSS = require('gulp-minify-css'),
	notify = require('gulp-notify'),
	config = require('../config').assets.css;

/**
 * Less Compilation Task
 *
 * This task will compile your Less, including minification and
 * and auto-prefixing. Less is one of the CSS pre-precessors
 * supoorted, along with the Sass CSS processor.
 */

gulp.task('less', function() {
	return gulp.src(config.src)
		.pipe(less())
		.on('error', console.error.bind(console))
		.pipe(gulpif(config.autoprefixer, autoprefixer(config.autoprefixer)))
		.pipe(gulpif(config.minify, minifyCSS()))
		.pipe(gulp.dest(config.output))
		.pipe(notify({ message: 'Less task complete' }));
});