/* eslint-env node */
/* eslint strict: 0, no-empty: 0 */
'use strict';

const path = require('path');
const gulp = require('gulp');
const newer = require('gulp-newer');
const props2json = require('gulp-props2json');
const runSequence = require('run-sequence');
const config = require('../../package.json').app;

gulp.task('prop', (next) => {
  runSequence('prop2json', 'build:prop', next);
});

gulp.task('prop2json', () => {
  return gulp.src([
    './src/main/resources/i18n/*.properties',
    ])
    .pipe(props2json({
      minify: false,
      complexTypes: true,
    }))
    .pipe(gulp.dest('./src/main/resources/static/js/props/'));
});

gulp.task('build:prop', () => {
  return gulp.src(path.join(config.dir.i18n, '*.properties'))
    .pipe(newer('./target/classes/i18n/'))
    .pipe(gulp.dest('./target/classes/i18n/'));
});