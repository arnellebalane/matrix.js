var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');
var mocha = require('gulp-mocha');

gulp.task('jshint', function() {
    gulp.src(['src/**/*.js', 'tests/**/*.js', 'Gulpfile.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'));
});

gulp.task('compress', function() {
    gulp.src('src/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('test', function() {
    gulp.src('tests/**/*.js', { read: false })
        .pipe(mocha());
});

gulp.task('test:matrix:add', function() {
    gulp.src('tests/matrix.add.tests.js', { read: false })
        .pipe(mocha());
});

gulp.task('test:matrix:identity', function() {
    gulp.src('tests/matrix.identity.tests.js', { read: false })
        .pipe(mocha());
});

gulp.task('test:matrix:multiply', function() {
    gulp.src('tests/matrix.multiply.tests.js', { read: false })
        .pipe(mocha());
});

gulp.task('test:matrix:transpose', function() {
    gulp.src('tests/matrix.transpose.tests.js', { read: false })
        .pipe(mocha());
});

gulp.task('test:matrix:valid', function() {
    gulp.src('tests/matrix.valid.tests.js', { read: false })
        .pipe(mocha());
});

gulp.task('default', ['jshint', 'test', 'compress']);