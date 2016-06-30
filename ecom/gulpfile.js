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
    autoprefixer = require('gulp-autoprefixer')
    ;

//Named tasks
//---------------------------Scripts------------------------------------
gulp.task('libfiles', function(){
    gulp.src('bower_components/**/*.min.js')
        .pipe(uglify())
        .pipe(order([
            "angular.min.js",
            "angular-ui-router.min.js",
            "angular1_animate.min.js",
            "angular1_aria.min.js",
            "angular1_messages.min.js",
            "angular1-material.min.js"
        ]))
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('assets/js/'));

});
gulp.task('scripts', function(){
    gulp.src('app/**/*.js')
        .pipe(uglify())
        .pipe(order([
            "app.js",
            "app-route.js",
            "home.js",
            "user.js",
            "category.js",
            "product.js",
            "order.js"
        ]))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('assets/js/'));
});
// gulp.task('scripts', function(){
//
// });

//---------------------------Styles-------------------------------------
gulp.task('sass', function(){
    gulp.src('assets/sass/main.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('assets/css/'));
    console.log("Sass tasks Completed");
});
gulp.task('libstyles', function(){
    gulp.src('bower_components/**/*.min.css')
        .pipe(order([
            "angular-material.min.css"
        ]))
        .pipe(concat('lib.css'))
        .pipe(gulp.dest('assets/css/'));
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
// gulp.task('default', ['minscripts','styles','scripts','templates','watch']);
// gulp.task('default', ['minscripts','scripts','minstyles','styles','browser-sync','watch']);
