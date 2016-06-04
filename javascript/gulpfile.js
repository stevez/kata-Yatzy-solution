'use strict';
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

gulp.task('tdd', function() {
      gulp.watch(['lib/**', 'test/**'], ['mocha']);
});

gulp.task('mocha', function() {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
});

