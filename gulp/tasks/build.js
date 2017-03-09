/* eslint-env node */
/* eslint strict: 0, no-empty: 0 */
'use strict';

const path = require('path');
const gulp = require('gulp');
const newer = require('gulp-newer');
const runSequence = require('run-sequence');
const config = require('../../package.json').app;

gulp.task('build', () => {
  runSequence('build:tymeleaf', 'prop', 'scss');
});

gulp.task('build:tymeleaf', () => {
  return gulp.src(path.join(config.dir.tymeleafDir, '/**/*.html'))
    .pipe(newer('./target/classes/templates/'))
    .pipe(gulp.dest('./target/classes/templates/'));
});
