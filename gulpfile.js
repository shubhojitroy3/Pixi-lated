const gulp = require('gulp');
const babel = require('gulp-babel');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('.styles/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('.styles/dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('es6', () =>
    gulp.src('./app/src/app.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./app/dist'))
);