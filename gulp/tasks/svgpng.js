var gulp = require('gulp');
var svg2png = require('gulp-svg2png');
var config = require('../config').svgpng;


gulp.task('svgpng',['svg', 'images'], function() {
    return gulp.src(config.src)
    	.pipe(svg2png())
    	.pipe(gulp.dest(config.dest));
});