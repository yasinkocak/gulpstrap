var gulp = require('gulp'),
	compass = require('gulp-compass'),
	gulpif = require('gulp-if'),
	minifyCSS = require('gulp-minify-css'),
	notify = require('gulp-notify'),
	config = require('../config').assets.css;

/**
 * Sass Compilation Task
 *
 * This task will compile your Sass, including minification and
 * and auto-prefixing. Sass is one of the CSS pre-precessors
 * supoorted, along with the Less CSS processor.
 */

gulp.task('sass', function() {
	return gulp.src(config.src)
		.pipe(compass(config.options))
		.on('error', console.error.bind(console))
		.pipe(gulpif(config.minify, minifyCSS()))
		.pipe(gulp.dest(config.output))
		.pipe(notify({ message: 'Sass task complete' }));

});