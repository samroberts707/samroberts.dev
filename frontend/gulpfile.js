'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

var sassSource = './sass/';
var jsSource = './js/';
var sassDest = '../website/static/css/';
var jsDest = '../website/static/js/';

gulp.task('sass', function() {
  return gulp.src(sassSource + '**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(sassDest));
});

gulp.task('javascript', function() {
  return gulp.src(jsSource + '**/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(jsDest));
});

gulp.task('sass:watch', function() {
  gulp.watch(sassSource+'**/*.scss', ['sass']);
});

gulp.task('js:watch', function() {
  gulp.watch(jsSource + '**/*.js', ['javascript'])
})

gulp.task('build',['sass:watch','js:watch']);
