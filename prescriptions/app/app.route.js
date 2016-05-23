angular.module("frankross",['ngRoute'])
    .config(function($routeProvider,$locationProvider){
        $routeProvider
            .when('/', {
                templateUrl : 'home/index.html',
                controller  : 'homeCtrl'
            })
            .when('/aboutUs', {
                templateUrl : 'aboutus/index.html',
                controller  : 'aboutUsCtrl'
            })
            .when('/contactUs', {
                templateUrl : 'contactus/index.html',
                controller  : 'contactUsCtrl'
            })
            .when('/contactUs', {
                templateUrl : 'contactus/index.html',
                controller  : 'contactUsCtrl'
            })
            .when('/contactUs', {
                templateUrl : 'contactus/index.html',
                controller  : 'contactUsCtrl'
            })
            .when('/contactUs', {
                templateUrl : 'contactus/index.html',
                controller  : 'contactUsCtrl'
            })
            .when('/contactUs', {
                templateUrl : 'contactus/index.html',
                controller  : 'contactUsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5mode(true);
    });
 
