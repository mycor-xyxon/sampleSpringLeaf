/* eslint-env node */
/* eslint strict: 0, no-empty: 0 */
'use strict';

const path = require('path');
const gulp = require('gulp');
const newer = require('gulp-newer');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const argv = require('yargs').argv;
const runSequence = require('run-sequence');
const config = require('../../package.json').app;

gulp.task('scss', (next) => {
  runSequence('compile:scss', 'build:css', next);
});

gulp.task('compile:scss', () => {
  return gulp.src(path.join(config.dir.styleDir, '/**/*.{scss, sass}'))
    .pipe(sass({
      outputStyle: argv.production === true ? 'compressed' : 'nested',
      includePaths: config.scssIncludeLibrary,
    }).on('error', sass.logError))
    .pipe(postcss([
      cssnext({
        browsers: ['last 2 versions', 'ie 11', 'safari >= 5.1'],
      }),
    ]))
    .pipe(rename({
      extname: '.min.css',
    }))
    .pipe(gulp.dest(config.dir.stylePublishDir));
});

gulp.task('build:css', () => {
  return gulp.src(path.join(config.dir.stylePublishDir, '/**/*.css'))
    .pipe(newer('./target/classes/static/css/'))
    .pipe(gulp.dest('./target/classes/static/css/'));
});