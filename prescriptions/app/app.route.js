'use strict';

angular.module("frankross",['ngRoute'])
        .config(function($routeProvider,$locationProvider){
                    $routeProvider.when('/', {
                            templateUrl : 'app/home/index.html',
                            controller  : 'homeCtrl'
                        })
                        .when('/prescriptions', {
                            // controller  : 'app/aboutus/aboutUsCtrl',
                            templateUrl : 'app/prescriptions/index.html'
                        })
                        .when('/healthtips', {
                            // controller  : 'app/aboutus/aboutUsCtrl',
                            templateUrl : 'app/healthtips/index.html'
                        })
                        .when('/prescriptions', {
                            // controller  : 'app/aboutus/aboutUsCtrl',
                            templateUrl : 'app/prescriptions/index.html'
                        })
                        .when('/aboutUs', {
                            controller  : 'aboutUsCtrl',
                            templateUrl : 'app/aboutus/index.html'
                        })
                        .when('/contactUs', {
                            controller  : 'contactUsCtrl',
                            templateUrl : 'app/contactus/index.html'
                        })
                        .otherwise({
                            redirectTo: '/'
                        });
                    $locationProvider.html5Mode(true);
                });
