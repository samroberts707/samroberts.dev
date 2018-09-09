'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var sassSource = './sass/';
var jsSource = './js/';
var sassDest = '../website/static/css/';
var jsDest = '../website/static/js/';

gulp.task('sass', function () {
  return gulp.src(sassSource+'**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(sassDest));
});

gulp.task('sass:watch', function () {
  gulp.watch(sassSource+'**/*.scss', ['sass']);
});
