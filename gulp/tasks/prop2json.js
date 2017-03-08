/* eslint-env node */
/* eslint strict: 0, no-empty: 0 */
'use strict';

const gulp = require('gulp');
const props2json = require('gulp-props2json');

gulp.task('prop', () => {
  return gulp.src([
    './src/main/resources/templates/i18n/*.properties',
    ])
    .pipe(props2json({
      minify: false,
      complexTypes: true,
    }))
    .pipe(gulp.dest('./src/main/resources/js/props/'));
});