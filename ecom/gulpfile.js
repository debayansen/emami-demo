'use strict';

//Required dependencies
var gulp    = require('gulp'),
    order   = require('gulp-order'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat'),
    install = require('gulp-install'),
    plumber = require('gulp-plumber'),
    rename  = require('gulp-rename'),
    sass    = require('gulp-sass'),
    jshint  = require('gulp-jshint'),
    browserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer'),
    ;

//Named tasks
//---------------------------Scripts------------------------------------

//---------------------------Styles-------------------------------------
gulp.task('minstyles', function(){
    gulp.src('assets/css/*.css')
        .pipe(order([
            "animate.css",
            "bootstrap.css"
        ]))
        .pipe(concat('lib.css'))
        .pipe(gulp.dest('build/css/'))
        .pipe(browserSync.stream());
});

gulp.task('styles', function(){
    gulp.src('assets/css/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('assets/css/'));

    console.log("Style tasks Complete");
});

//---------------------------browserSync--------------------------------

//---------------------------testing------------------------------------



//Watch tasks
gulp.task('watch', function(){
    // gulp.watch('src/js/*.js',['scripts']);
    // gulp.watch('src/css/**/*.scss',['styles']);
    // gulp.watch('src/css/**/*.scss',['styles']);
    // gulp.watch('src/templates/**/*.jade',['templates']);
    // gulp.watch('build/pages/**/*.html',['index']);
    console.log("Watch Task completed");
});

//default tasks
