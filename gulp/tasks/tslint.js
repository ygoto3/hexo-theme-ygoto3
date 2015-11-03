'use strict';

const gulp = require('gulp');
const tslint = require('gulp-tslint');

const config = require('../config');

gulp.task('tslint', () => {
  return gulp.src([
    config.js.testSrc
  ])
  .pipe( tslint() )
  .pipe( tslint.report('prose') );
});
