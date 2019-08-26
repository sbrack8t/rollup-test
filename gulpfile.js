(function(factory) {
  typeof define === 'function' && define.amd ? define(factory) : factory();
})(function() {
  'use strict';

  const { dest, src } = require('gulp');
  const rollup = require('gulp-rollup-each');
  const babel = require('rollup-plugin-babel');
  const resolve = require('rollup-plugin-node-resolve');
  const commonjs = require('rollup-plugin-commonjs');
  // import path from 'path';

  function bundle() {
    return src('src/**/*.js')
      .pipe(
        rollup(
          {
            plugins: [
              babel({
                babelrc: false,
                presets: [
                  [
                    'env',
                    {
                      modules: false,
                      targets: {
                        chrome: '58',
                        ie: '11'
                      },
                      useBuiltIns: true //enables babel and import babel into your inputFile.js
                    }
                  ]
                ],
                plugins: [
                  'external-helpers',
                  'transform-regenerator',
                  'transform-object-assign'
                ]
              })
            ]
          },
          () => {
            return {
              format: 'cjs',
              name: 'bundled'
            };
          }
        )
      )
      .pipe(dest('dist'));
  }

  const gessoBundle = (exports.gessoBundle = bundle);

  exports.default = gessoBundle;
});
