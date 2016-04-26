import gulp from 'gulp';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import plumber from 'gulp-plumber';
import gutil from 'gulp-util';


const PATHS = {
    'javascripts': [
        'src/**/*.js',
        'tests/**/*.js'
    ]
};
const BUILD_DIRECTORY = 'build';


gulp.task('compile', () => {
    return gulp.src(PATHS.javascripts, { base: '.' })
        .pipe(plumber())
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest(BUILD_DIRECTORY));
});


gulp.task('build', ['compile']);


gulp.task('watch', () => {
    return gulp.watch(PATHS.javascripts, ['compile']);
});


gulp.task('default', ['build', 'watch']);
