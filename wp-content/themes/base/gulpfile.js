var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var stylus = require('gulp-stylus');

gulp.task('stylus', function() {
  gulp.src(['assets/css/app.styl'])
    .pipe(stylus())  
    .pipe(autoprefixer())
    .pipe(gulp.dest('assets/css/')) 
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('**/*.php').on('change', livereload.changed);
  gulp.watch("assets/stylus/**/*.styl", ['stylus']);				
});

gulp.task('default', ['stylus', 'watch']);


