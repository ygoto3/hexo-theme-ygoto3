'use strict';

const gulp = require('gulp');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');
const webpack = require('webpack-stream');

const config = require('../config');

const wpconf = merge => {
  let wpc = Object.assign(merge || {}, {
  
    output: {
      filename: config.js.output.filename,
      sourceMapFilename: config.js.output.sourceMapFilename,
      libraryTarget: 'umd'
    },
  
    resolve: {
      extensions: [ '', '.ts', '.js', '.css' ]
    },
  
    module: {
  
      loaders: [{
        test: /\.ts$/,
        loader: 'babel-loader!ts-loader'
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true
        }
      }]
  
    }
  
  });

  if (!config.production) {
    wpc.devtool = "#source-map";
    wpc.debug = true;
  }

  return wpc;
};

gulp.task('webpack', () => {
  gulp.src(config.js.src)
  .pipe( webpack( wpconf() ) )
  .pipe( gulpif( config.production, uglify() ) )
  .pipe( gulp.dest(config.js.dest) );
});
