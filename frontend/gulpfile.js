'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var spawn = require('child_process').spawn;

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

gulp.task('runserver', function() {
    var runserver = spawn(
      '../venv/bin/python',
      ['manage.py', 'runserver', '8000', '--settings', 'website.settings_local'],
      {
        stdio: 'inherit',
        cwd: '../website/'
      }
    );

    runserver.on('close', function(code) {
        if (code !== 0) {
            console.error('Django runserver exited with error code: ' + code);
        } else {
            console.log('Django runserver exited normally.');
        }
    });
});

gulp.task('default',['build','runserver']);
