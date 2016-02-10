var gulp = require('gulp'),
  webpack = require('webpack-stream'),
  bower = require('gulp-bower'),
  mainBowerFiles = require('main-bower-files'),
  zip = require('gulp-zip'),
  del = require('del'),
  webserver = require('gulp-webserver'),
  ghPages = require('gulp-gh-pages');

gulp.task('default', ['webpack', 'lib']);
gulp.task('watch', ['default'], function () {
  return gulp.watch('src/**', ['webpack']);
});
gulp.task('clean', function () {
  return del('{dist/**,dist.zip}');
});
gulp.task('dist', ['copy-js', 'copy-lib', 'copy-html', 'copy-assets']);

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

gulp.task('bower', function () {
  return bower()
    .pipe(gulp.dest('bower_components'));
});

gulp.task('lib', function () {
  return gulp.src(mainBowerFiles(), { base: "bower_components" })
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

gulp.task('copy-lib', function () {
  return gulp.src("lib/**", { base: "lib" })
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