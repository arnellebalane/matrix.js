import gulp from 'gulp';
import jshint from 'gulp-jshint';
import jscs from 'gulp-jscs';
import stylish from 'gulp-jscs-stylish';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
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


gulp.task('compress', ['lint'], () => {
    return gulp.src('src/**/*.js')
        .pipe(uglify())
        .pipe(rename(function(path) {
            path.extname = '.min.js';
        }))
        .pipe(gulp.dest('build'));
});


gulp.task('default', ['lint', 'compress']);
