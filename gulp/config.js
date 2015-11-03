'use strict';

const src = './src';
const dest = './source';

module.exports = {

  production: process.env.NODE_ENV === 'production',

  js: {
    src: `${src}/ts/index.ts`,
    dest: `${dest}/js`,
    output: {
      filename: 'app.js',
      sourceMapFilename: 'app.js.map',
    }
  },

  css: {
    src: `${src}/css/index.css`,
    dest: `${dest}/css`
  }

};
