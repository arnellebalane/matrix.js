var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var stylish = require('gulp-jscs-stylish');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var mocha = require('gulp-mocha');
var argv = require('yargs').argv;

gulp.task('lint', function() {
    gulp.src(['src/**/*.js', 'tests/**/*.js', 'gulpfile.js'])
        .pipe(jshint())
        .pipe(jscs())
        .on('error', gutil.noop)
        .pipe(stylish.combineWithHintResults())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('compress', function() {
    gulp.src('src/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('test', function() {
    gulp.src('tests/' + (argv.f ? argv.f : '**/*') + '.js', { read: false })
        .pipe(mocha());
});

gulp.task('default', ['lint', 'test', 'compress']);
