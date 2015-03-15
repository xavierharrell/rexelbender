var changed    = require('gulp-changed');
var gulp = require('gulp');
var config = require('../config').svg;
var imagemin   = require('gulp-imagemin');
var svg2png = require('gulp-svg2png');
var handleErrors = require('../util/handleErrors');
var svgSprite 	= require('gulp-svg-sprite');
var browserSync  = require('browser-sync');


gulp.task('svg', function(){
	return gulp.src(config.src)
	 .pipe(changed(config.src)) // Ignore unchanged files
	 // .pipe(svgSprite(config.svgConfig))
	 // .on('error', handleErrors)
	.pipe(imagemin(config.options))
	// .pipe(gulp.dest(config.dest))
	.pipe(svg2png())
	.pipe(gulp.dest(config.dest))
	.pipe(browserSync.reload({stream:true}));
});