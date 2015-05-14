var changed    = require('gulp-changed');
var gulp = require('gulp');
var config = require('../config').svg;
var svg2png = require('gulp-svg2png');
var svgSymbols = require('gulp-svg-symbols');
var handleErrors = require('../util/handleErrors');
var svgSprite 	= require('gulp-svg-sprite');
var browserSync  = require('browser-sync');


gulp.task('svg', function(){
	return gulp.src(config.src)
	 .pipe(changed(config.src)) // Ignore unchanged files
	 .pipe(svgSprite(config.sprite))
	 .on('error', handleErrors)
	.pipe(gulp.dest(config.dest))
	.pipe(browserSync.reload({stream:true}));
});