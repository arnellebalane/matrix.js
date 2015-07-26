import gulp from 'gulp';
import jshint from 'gulp-jshint';
import jscs from 'gulp-jscs';
import stylish from 'gulp-jscs-stylish';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import gutil from 'gulp-util';


gulp.task('lint', () => {
    return gulp.src(['src/**/*.js', 'tests/**/*.js', 'gulpfile.js'])
        .pipe(jshint())
        .pipe(jscs())
        .on('error', gutil.noop)
        .pipe(stylish.combineWithHintResults())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});


gulp.task('compile', () => {
    return gulp.src(['src/**/*.js', 'tests/**/*.js'], { base: '.' })
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});


gulp.task('watch', () => {
    return gulp.watch(['src/**/*.js', 'tests/**/*.js'], ['compile']);
});


gulp.task('default', ['compile', 'watch']);
