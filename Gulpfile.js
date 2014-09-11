var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');
var mocha = require('gulp-mocha');

gulp.task('jshint', function() {
    return gulp.src(['src/**/*.js', 'tests/**/*.js', 'Gulpfile.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('compress', function() {
    return gulp.src('src/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('test', function() {
    return gulp.src('tests/**/*.js', { read: false })
        .pipe(mocha());
});