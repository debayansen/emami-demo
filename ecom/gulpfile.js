// Required Dependencies here
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sasslint = require('gulp-sass-lint'),
    jshint = require('gulp-jshint'),
    plumber = require('gulp-plumber'),
    watch = require('gulp-watch');

// Named Tasks
    //For scripts
    gulp.task('scripts',function(){
        gulp.src('assets/js/*.js')
            .pipe(uglify())
            .pipe(gulp.dest('assets/js/'));
        console.log("Scripts have been compressed and checked.");

    });

    //For Styles
    gulp.task('styles',function(){
        gulp.src('assets/css/**/*.scss')
            .pipe(plumber())
            // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(sass())
            .pipe(gulp.dest('assets/css/'));
        console.log("Styles have been compressed and checked.");
    });


    //For Templates - Jade
    gulp.task("template", function(){
        gulp.src('app/**/*.scss')
            .pipe(plumber())
            // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(jade())
            .pipe(gulp.dest('assets/templates/'));
    });



// Watch Tasks
        gulp.task('watch', function(){
            // gulp.watch('assets/css/**/*.css',['styles']);
            // gulp.watch('assets/js/*.js',['scripts']);
            console.log("Watcher function completed.");
        });

// Default Tasks
    gulp.task('default',function(){
        gulp.watch(['scripts','styles',''watch]);
        console.log("Gulp Started");
    });
