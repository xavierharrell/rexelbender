var changed    = require('gulp-changed');
var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');
// var svg2png	   = require('gulp-svg2png');
var config     = require('../config').images;
var browserSync  = require('browser-sync');

gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    // .pipe(svg2png())
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
