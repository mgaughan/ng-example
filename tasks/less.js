'use strict';

/**
 * Compile less
 */

var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var less    = require('gulp-less');

module.exports = function () {
  return gulp.src('client/styles/app.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('client/styles'));
};
