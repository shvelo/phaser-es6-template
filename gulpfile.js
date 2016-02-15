var gulp = require('gulp'),
  webpack = require('webpack-stream'),
  zip = require('gulp-zip'),
  del = require('del'),
  rename = require("gulp-rename"),
  webserver = require('gulp-webserver'),
  ghPages = require('gulp-gh-pages');

gulp.task('default', ['webpack', 'phaser']);
gulp.task('watch', ['default'], function () {
  return gulp.watch('src/**', ['webpack']);
});
gulp.task('clean', function () {
  return del('{dist/**,dist.zip}');
});
gulp.task('dist', ['copy-js', 'phaser-dist', 'copy-html', 'copy-assets']);

gulp.task('server', function () {
  return gulp.src('.')
    .pipe(webserver());
});
gulp.task('deploy', ['dist'], function () {
  return gulp.src('./dist/**')
    .pipe(ghPages());
});

gulp.task('webpack', function () {
  return gulp.src('src/game.jsx')
    .pipe(webpack(
      require('./webpack.config.js')
    ))
    .pipe(gulp.dest('js'));
});

gulp.task('phaser', function () {
  return gulp.src('node_modules/phaser/build/phaser.js')
    .pipe(gulp.dest('lib'));
});

gulp.task('copy-assets', function () {
  return gulp.src('assets/**', { base: "assets" })
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('copy-html', function () {
  return gulp.src('index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('phaser-dist', function () {
  return gulp.src('node_modules/phaser/build/phaser.min.js')
    .pipe(rename('phaser.js'))
    .pipe(gulp.dest('dist/lib'));
});

gulp.task('copy-js', ['webpack'], function () {
  return gulp.src('js/**', { base: 'js' })
    .pipe(gulp.dest('dist/js'));
});

gulp.task('zip', function () {
  return gulp.src('dist/**', { base: 'dist' })
    .pipe(zip('dist.zip'))
    .pipe(gulp.dest('.'));
});
