'use strict'
var gulp = require('gulp')
var rename = require('gulp-rename')
var folder = require('gulp-folder')
var babel = require('gulp-babel')
var browserSync = require('browser-sync').create()
var reload = browserSync.reload

gulp.task('serve', function () {
  browserSync.init({
    server: {baseDir: './app'},
    port: 8080
  })
})

gulp.task('babel', function () {
  gulp.src('./src/js/*.js')
    .pipe(babel({presets: ['es2015']}))
    .pipe(rename('graphs.js'))
    .pipe(gulp.dest('./app/js/'))
})

gulp.task('html', function () {
  gulp.src('./src/*.html')
    // I'll do something later... maybe
    .pipe(gulp.dest('./app/'))
})

gulp.task('fw', function () {
  folder({
    root: './app',
    folders: {
      css: './css',
      js: './js'
    }
  })
})

gulp.task('watch', function () {
  gulp.watch('./src/js/*.js', ['babel'])
  gulp.watch('./src/*.html', ['html'])
  gulp.watch('./app/*.html').on('change', reload)
  gulp.watch('./app/js/*.js').on('change', reload)
})

gulp.task('default', ['fw', 'serve', 'babel', 'html', 'watch'])
