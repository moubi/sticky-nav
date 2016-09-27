'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import concat from 'gulp-concat';
import shell from 'gulp-shell';
import del from 'del';

const SOURCE_DIRECTORY = './src';

/**
 * Compile scss files into css
 */
gulp.task("compile-scss", (cb) => {
  gulp.src("assets/scss/**/*.scss")
    .pipe(sass({ outputStyle: 'compressed' })
    .on("error", sass.logError))
    .pipe(concat("style.css"))
    .pipe(gulp.dest("dist/css/"));
    cb();
});

/**
 * Watching for changes in scss files
 */
gulp.task("watch-scss", (cb) => {
  gulp.watch("assets/scss/**/*.scss", ["compile-scss"]);
  cb();
});

/**
 * Bundle the new code
 */
gulp.task("deploy", ["clean-dist"], (cb) => {
  gulp.src("./").pipe(shell(["webpack"]));
  cb();
});

/**
 * Clean old html and js from dist
 */
gulp.task("clean-dist", (cb) => {
  del(["dist/*.js", "dist/*.html"]);
  cb();
});

/**
 * Watching for index.html changes
 */
gulp.task("watch-deploy", ['deploy'], (cb) => {
  gulp.watch("index.html", ["deploy"]);
  cb();
});
