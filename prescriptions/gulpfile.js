// Required Dependencies here
var gulp    = require('gulp'),
    uglify  = require('gulp-uglify'),
    order   = require('gulp-order'),
    concat  = require('gulp-concat');
    sass    = require('gulp-sass'),
    sasslint= require('gulp-sass-lint'),
    jshint  = require('gulp-jshint'),
    plumber = require('gulp-plumber'),
    watch   = require('gulp-watch');


// Named Tasks
    //For scripts
    // gulp.task('scripts',function(){
    //     gulp.src('assets/js/*.js')
    //         .pipe(plumber())
    //         // .pipe(jshint())
    //         .pipe(order([
    //
    //         ]))
    //         .pipe(uglify())
    //         .pipe(gulp.dest('assets/js/'));
    //     console.log("Scripts have been compressed and checked.");
    //
    // });
    // gulp.task('scripts1',function(){
    //     gulp.src('assest/**/*.js')
    //         .pipe(plumber())
    //         .pipe(uglify())
    //         .pipe(concat())
    //         .pipe(gulp.dest('assets/js/*.min.js'));
    //     console.log("Scripts1 have been compressed and checked.");
    //
    // });

    //For Styles
    gulp.task('styles',function(){
        gulp.src('assets/scss/style.scss')
            .pipe(plumber())
            // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(sass())
            .pipe(gulp.dest('assets/css/'));
        console.log("Styles have been compressed and checked.");
    });


// Watch Tasks
    gulp.task('watch', function(){
        // gulp.watch('assets/js/*.js',['scripts']);
        gulp.watch('app/**/*.scss',['styles']);
        gulp.watch('assets/**/*.scss',['styles']);
        // gulp.watch('assets/js/*.js',['scripts']);

        console.log("Watcher function completed.");
    });

// Default Task
// gulp.task('default',['scripts', 'styles', 'watch']);
// gulp.task('default',['minscripts','mistyles','scripts','styles','watch']);
gulp.task('default',['styles', 'watch']);
