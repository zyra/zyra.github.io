import { task, src, watch, dest } from 'gulp';
import { server, reload } from 'gulp-connect';

import * as pug from 'gulp-pug';
import * as sass from 'gulp-sass';
import * as autoPrefixer from 'gulp-autoprefixer';
import * as concat from 'gulp-concat';
import * as cleanCSS from 'gulp-clean-css';
import * as rollup from 'gulp-rollup';
import * as rollupTs from 'rollup-plugin-typescript';
import * as rename from 'gulp-rename';
import * as typescript from 'typescript';
import * as uglify from 'gulp-uglify';

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

task('build:js', () => {
  return src(BUILD_PATHS.js)
    .pipe(rollup({
      entry: 'src/main.ts',
      format: 'cjs',
      plugins: [
        rollupTs({ typescript })
      ]
    }))
    .pipe(rename('main.js'))
    .pipe(uglify())
    .pipe(dest('www'))
    .pipe(reload());
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
    .pipe(cleanCSS({
      compatibility: 'ie9'
    }))
    .pipe(dest('www'))
    .pipe(reload());
});

task('build', ['build:js', 'build:html', 'build:css']);

task('serve', ['build'], () => {
  watch(WATCH_PATHS.js, <any>['build:js']);
  watch(WATCH_PATHS.html, <any>['build:html']);
  watch(WATCH_PATHS.css, <any>['build:css']);
  server({
    root: 'www',
    livereload: true
  });
});