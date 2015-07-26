import gulp from 'gulp';
import jshint from 'gulp-jshint';
import jscs from 'gulp-jscs';
import stylish from 'gulp-jscs-stylish';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
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
    return gulp.src(['src/**/*.js'])
        .pipe(babel())
        .pipe(gulp.dest('build'));
});


gulp.task('compress', ['compile'], () => {
    return gulp.src('build/**/*.js')
        .pipe(uglify())
        .pipe(rename(function(path) {
            path.extname = '.min.js';
        }))
        .pipe(gulp.dest('build'));
});


gulp.task('default', ['compile', 'compress']);
