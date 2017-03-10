/* eslint-env node */
/* eslint strict: 0, no-empty: 0 */
'use strict';

const path = require('path');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const rename = require('gulp-rename');
const gutil = require('gulp-util');
const uglify = require('gulp-uglify');
const newer = require('gulp-newer');
const eslint = require('gulp-eslint');
const plumber = require('gulp-plumber');
const browserify = require('browserify');
const browserifyCacheApi = require('browserify-cache-api');
const through2 = require('through2');
const runSequence = require('run-sequence');
const argv = require('yargs').argv;
const sourcemaps = require('gulp-sourcemaps');
const config = require('../../package.json').app;
const browserifyCache = new Map();

gulp.task('script', (next) => {
  runSequence('lint:script', 'compile:script', 'build:script', next);
});

gulp.task('lint:script', () => {
  return gulp.src([`${config.dir.scriptDir}/*.js`, `${config.dir.scriptDir}/**/index.js`, `!${config.dir.scriptDir}/**/*.min.js`])
    .pipe(plumber({
      errorHandler: function (error) {
        let taskName = 'compile:script';
        let title = `[task]${taskName} ${error.plugin}`;
        let errorMsg = `error: ${error.message}`;
        gutil.log(`${title}\n${errorMsg}`);
        this.emit('end');
      },
    }))
    .pipe(eslint({
      useEslintrc: true,
    }))
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
    .pipe(plumber.stop());
});

gulp.task('compile:script', () => {
  const execBrowserify = through2.obj((file, enc, next) => {
    if (browserifyCache.has(file.path) === false) {
      browserifyCache.set(file.path, browserify(file.path, {
        cache: {},
        packageCache: {},
        plugin: [browserifyCacheApi],
      }));
    }

    browserifyCache.get(file.path).bundle((err, res) => {
      if (err) {
        gutil.log(err.message);
        next(err);
        return;
      }
      file.contents = res;
      next(null, file);
    });
  });

  return gulp.src([`${config.dir.scriptDir}/*.js`, `${config.dir.scriptDir}/**/index.js`, `!${config.dir.scriptDir}/**/*.min.js`])
      .pipe(sourcemaps.init())
      // Requireを解決します。
      .pipe(execBrowserify).on('error', () => {
        this.emit('end');
      })
      // スクリプトを圧縮します。
      .pipe(gulpif(argv.production === true, uglify())).on('error', gutil.log)
      .pipe(rename({
        extname: '.min.js',
      }))
      .pipe(sourcemaps.write('../map'))
      .pipe(gulp.dest(config.dir.scriptPublishDir));
});

gulp.task('build:script', () => {
  return gulp.src(path.join(config.dir.scriptPublishDir, '/**/*.js'))
    .pipe(newer('./target/classes/static/js/'))
    .pipe(gulp.dest('./target/classes/static/js/'));
});
