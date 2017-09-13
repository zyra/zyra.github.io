import { task, src, watch, dest, start } from 'gulp';
import { server, reload } from 'gulp-connect';

import * as pug from 'gulp-pug';
import * as sass from 'gulp-sass';
import * as autoPrefixer from 'gulp-autoprefixer';
import * as concat from 'gulp-concat';
import * as cleanCSS from 'gulp-clean-css';
import * as uglify from 'gulp-uglify';
import * as browserify from 'browserify';
import * as tsify from 'tsify';
import * as source from 'vinyl-source-stream';
import * as buffer from 'vinyl-buffer';
import * as purify from 'gulp-purifycss';
import * as wbBuild from 'workbox-build';
import * as gulpSequence from 'gulp-sequence';

const BUILD_PATHS = {
  js: 'src/**/*.ts',
  html: ['src/**/*.pug', '!src/_**/*.pug', '!src/**/_*.pug'],
  css: ['src/**/*.scss', '!src/_**/*.scss']
};

const WATCH_PATHS = {
  js: BUILD_PATHS.js,
  html: 'src/**/*.pug',
  css: 'src/**/*.scss'
};

task('copy-charts', () => {
  return src('./chart.js')
    .pipe(dest('node_modules/chart.js/src/'));
});

task('build:js', ['copy-charts'], () => {
  return browserify({
    entries: './src/main.ts',
    debug: false
  })
    .plugin(tsify, { project: __dirname })
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(dest('www'));
});

task('build:html', () => {
  return src(BUILD_PATHS.html)
    .pipe(pug({
      pretty: false,
      data: {
        pageTitle: 'Open Source Software - Zyra Media'
      }
    }))
    .pipe(dest('www'))
    .pipe(reload());
});

task('build:css', () => {
  return src(BUILD_PATHS.css)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoPrefixer())
    .pipe(concat('main.css'))
    .pipe(purify(['www/**/*.js', 'www/**/*.html']))
    .pipe(cleanCSS({
      compatibility: 'ie9'
    }))
    .pipe(dest('www'))
    .pipe(reload());
});

task('build:sw', () => {
  const wbConfig = {
    globDirectory: './www/',
    swDest: './www/sw.js',
    globPatterns: ['**\/*.{html,js,css,json,jpg,svg}'],
    skipWaiting: true,
    clientsClaim: true
  };
  wbBuild.generateSW(wbConfig);
});

task('build', gulpSequence(['build:js', 'build:html'], 'build:css', 'build:sw'));
task('serve', ['build'], () => {
  watch(WATCH_PATHS.js, <any>['build:js']);
  watch(WATCH_PATHS.html, <any>['build:html']);
  watch(WATCH_PATHS.css, <any>['build:css']);
  server({
    root: 'www',
    livereload: true
  });
});