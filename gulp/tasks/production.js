var gulp = require('gulp');

// Run this to compress all the things!
gulp.task('production', ['markup', 'svg', 'images', 'iconFont', 'minifyCss', 'uglifyJs']);
