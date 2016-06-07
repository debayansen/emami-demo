'use strict';

angular.module("frankross")
    .config(function($routeProvider,$locationProvider){
        $routeProvider
            .when('/', {
                templateUrl : 'app/home/index.html',
                controller  : 'homeCtrl'
            })
            .when('/prescriptions', {
                controller  : 'prescriptionsCtrl',
                templateUrl : 'app/prescriptions/index.html'
            })
            .when('/healthtips', {
                controller  : 'healthCtrl',
                templateUrl : 'app/healthtips/index.html'
            })
            .when('/prescriptions', {
                controller  : 'offersCtrl',
                templateUrl : 'app/offers/index.html'
            })
            .when('/aboutUs', {
                controller  : 'aboutUsCtrl',
                templateUrl : 'app/aboutus/index.html'
            })
            .when('/contactUs', {
                controller  : 'contactUsCtrl',
                templateUrl : 'app/contactus/index.html'
            })
            .when('/login', {
                controller  : 'userLogin',
                templateUrl : 'app/user/login.html'
            })
            .when('/register', {
                controller  : 'userRegister',
                templateUrl : 'app/user/register.html'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    })
;
