var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');
var mocha = require('gulp-mocha');
var argv = require('yargs').argv;

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
    gulp.src('tests/' + (argv.f ? argv.f : '**/*') + '.js', { read: false })
        .pipe(mocha());
});

gulp.task('default', ['jshint', 'test', 'compress']);