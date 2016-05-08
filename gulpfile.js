var gulp = require('gulp');
var sass = require('gulp-sass');

//Watch task
gulp.task('default', function () {
    gulp.watch('./src/sass/**/*.scss', function (event) {
        console.log('Watched event :' + event.type + ' for ' + event.path)
    });
    gulp.watch('./src/sass/**/*.scss', ['styles']);
});


gulp.task('styles', function () {
    //use gulp.src('./src/sass/**/*.scss',{base:'./src'}) to retain the folder structure.
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});



