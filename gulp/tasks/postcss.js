'use strict';

const gulp = require('gulp');
const gulpif = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');

const config = require('../config');

let processors = [
  require('postcss-import'),
  require('autoprefixer')({ browsers: ['last 1 version'] }),
  require('cssnext')()
];

if (config.production) {
  processors.push( require('cssnano') );
}

gulp.task('postcss', () => {
  return gulp.src(config.css.src)
  .pipe( gulpif( !config.production, sourcemaps.init() ) )
  .pipe( postcss(processors) )
  .pipe( gulpif( !config.production, sourcemaps.write('.') ) )
  .pipe( gulp.dest(config.css.dest) );
});
