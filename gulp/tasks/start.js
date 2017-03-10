/* eslint-env node */
/* eslint strict: 0, no-empty: 0 */
'use strict';

const path = require('path');
const gulp = require('gulp');
const shell = require('gulp-shell');
const runSequence = require('run-sequence');
const config = require('../../package.json').app;

gulp.task('start', () => {
  runSequence(['mvn:run', 'watch']);
});

gulp.task('mvn:run', () => {
  return gulp.src('.', {read: false})
  .pipe(shell([
    'mvn clean spring-boot:run'
  ]))
});