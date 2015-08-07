'use strict';

/**
 * Watch files, and do things when they changes.
 * Recompile less if needed.
 * Reinject files
 */

var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var watch      = require('gulp-watch');
var inject     = require('gulp-inject');
var plumber    = require('gulp-plumber');
var less       = require('gulp-less');
var bowerFiles = require('main-bower-files');

var toInject   = require('./config/filesToInject');
var toExclude  = require('./config/bowerFilesToExclude');

module.exports = function () {

  livereload.listen();

  gulp.watch('bower.json', function () {
    gulp.src('client/index.html')
      .pipe(inject(gulp.src(bowerFiles(), { read: false }), {
        name: 'bower',
        relative: 'true',
        ignorePath: toExclude
      }))
      .pipe(gulp.dest('client'));
  });

  watch([
    'client/**/*.less'
  ], function () {
    gulp.src('client/styles/app.less')
      .pipe(plumber())
      .pipe(less())
      .pipe(gulp.dest('client/styles'))
      .pipe(livereload());
  });

  var coreFiles = [
    'client/app',
    'client/app/**/*.html',
    'client/app/**/*.js',
    'client/components',
    'client/components/**/*.html',
    'client/components/**/*.js',
    '!client/**/*.less',
    '!client/**/*.spec.js',
    '!client/**/*.e2e.js',
  ];

  var lastInjection = Date.now();

  watch(coreFiles, { events: ['add', 'unlink'] }, function () {
    if (Date.now() - lastInjection < 100) { return; }
    lastInjection = Date.now();
    gulp.src('client/index.html')
      .pipe(inject(gulp.src(toInject), { relative: true }))
      .pipe(gulp.dest('client'));
  });

  watch(coreFiles, livereload.changed);
  watch(['client/index.html', 'client/app/app.js'], livereload.changed);

};
