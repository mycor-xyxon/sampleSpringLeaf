/* eslint-env node */
/* eslint strict: 0, no-empty: 0 */
'use strict';

const path = require('path');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const config = require('../../package.json').app;

gulp.task('watch', (next) => {
  runSequence(['watch:tymeleaf', 'watch:scss'], next);
});

gulp.task('watch:tymeleaf', () => {
  gulp.watch(path.join(config.dir.tymeleafDir, '/**/*.html'), ['build:tymeleaf']);
});

gulp.task('watch:scss', () => {
  gulp.watch(path.join(config.dir.styleDir, '/**/*.{scss,sass}'), ['scss']);
});
