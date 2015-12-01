//inside of Gulpfile.js
var gulp = require('gulp');
var connect = require('gulp-connect');
var usemin = require('gulp-usemin');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');

gulp.task('connect', function() {
  connect.server();
});

gulp.task('copy-html-files', function() {
  gulp.src(['/pages/*', '!./index.html'])
  .pipe(gulp.dest('build/'));
});

gulp.task('usemin', function() {
  gulp.src('!./index.html')
    .pipe(usemin({
      css: [minifyCss(), 'concat', rev()],
      js: [uglify(), rev()]
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('build', ['copy-html-files', 'usemin']);