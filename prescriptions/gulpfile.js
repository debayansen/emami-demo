// Required Dependencies here
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sasslint = require('gulp-sass-lint'),
    jshint = require('gulp-jshint')
    watch = require('gulp-watch');


// Named Tasks
    //For scripts
    gulp.task('scripts',function(){
        gulp.src('assets/js/*.js')
            .pipe(jshint())
            .pipe(uglify())
            .pipe(gulp.dest('assets/js/'));
        console.log("Scripts have been compressed and checked.");

    });

    //For Styles
    gulp.task('styles',function(){
        gulp.src('assets/css/**/*.scss')
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(gulp.dest('assets/css/'));
        console.log("Styles have been compressed and checked.");
    });
    // gulp.task();
    // gulp.task();

// Watch Tasks
    gulp.task('watch', function(){
        gulp.watch('assets/js/*.js',['scripts']);
        gulp.watch('assets/css/**/*.css',['styles']);
        // gulp.watch('assets/js/*.js',['scripts']);

        console.log("Watcher function completed.");
    });

// Default Task
    gulp.task('default',['scripts', 'styles', 'watch']);
