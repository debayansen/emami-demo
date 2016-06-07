'use strict';

// (function(){
angular.module('frankross',['ngMaterial','ngRoute','home', 'aboutUs', 'contactUs', 'loginModule']);
var login = angular.module("loginModule",[]);
var home = angular.module('home',[]);
var about = angular.module('aboutUs',[]);
var contact = angular.module('contactUs',[]);


    angular.module('frankross').directive('frHeader', function(){
            //Header directive
            return{
                restrict   : 'E',
                templateUrl: 'app/partials/header.html'
            };
        })
        .directive('frFooter', function(){
            //Footer directive
            return{
                restrict   : 'E',
                templateUrl: 'app/partials/footer.html'
            };
        })
        ;

    login.controller('userRegister',["$scope","$http", function($scope,$http){ // FOR User Registraation
            var details = {
                "name": $scope.name,
                "email": $scope.email,
                "pwd":$scope.pwd,
                "cpwd": $scope.cpwd,
                "mobile": $scope.mob
            };
            $scope.register = function(){
                $http({
                    method: 'POST',
                    url: '/api/v4/user',
                    headers: {
                        "Accept":"application/json"
                    },
                    data:{
                        "user":{
                            "email": details.email,
                            "password": details.pwd,
                            "name": details.name,
                            "primary_phone": details.mobile,
                            "primary_phone_type": "Mobile"
                        }
                    }
                })
                .then(
                    function(response){
                        $scope.status = response.status;
                        $scope.data = response.data;
                        if($scope.status == 201){
                            console.log("User Created Successfull");
                        }
                        else{
                            console.log("Invalid User Denied!!!");
                        }
                    }
                );
                confirmPwd(details.pwd,details.cpwd);
                // console.log(details);
            }
            console.log($scope.otpID);

            $scope.otpVerify = function(){
                alert(1);
                // '/api/v4/customer/otps/:otp_id/verify.json'
                console.log(details.mobile);
                console.log($scope.user.otpID);
                var optID = $scope.user.otpID;
                var urlPath = '/api/v4/customer/otps/'+optID+'/verify.json';
                console.log(urlPath);
                $http({
                    method: 'POST',
                    url:urlPath,
                    headers: {
                        "Accept":"application/json"
                    },
                    data:{
                        "phone_number":$scope.user.mob
                    }
                })
                .then(
                    function(response){
                        $scope.status = response.status;
                        $scope.data = response.data;
                        if($scope.status == 201){
                            console.log("Login Successfull");
                            console.log($scope.status);
                        }
                        else{
                            console.log("Login Denied!!!");
                            console.log($scope.status);
                        }
                    }
                );
            };

            var confirmPwd = function(pwd,cpwd){
                if(pwd == cpwd){
                    console.log("Passwords Match");
                }else{
                    console.log("Passwords don't match!!!");
                }
            };
        }])
        .controller('userLogin',["$scope","$http", function($scope, $http){ // FOR SIGIN API + details
            // $scope.email = "user@examle.com";
            // $scope.pwd = "password";
            $scope.greet = function(){
                $http({
                    method: 'POST',
                    url: '/api/v4/login',
                    headers: {
                        "Accept":"application/json"
                    },
                    data:{
                        "user":{
                            "email": $scope.email,
                            "password":$scope.pwd
                        }
                    }
                })
                .then(
                    function(response){
                        $scope.status = response.status;
                        $scope.data = response.data;
                        if($scope.status == 201){
                            console.log("Login Successfull");
                            console.log($scope.data);
                            var user = {
                                "email":$scope.email,
                                "pwd":$scope.pwd,
                                "auth_token":$scope.data.user.auth_token
                            };
                            // console.log(user);
                            // $scope.result = details(user.auth_token);
                        }
                        else{
                            console.log("Login Denied!!!");
                        }
                    }
                );
            };
            var details = function(code){
                console.log(code);
                var data, status;
                $http({
                    method: 'GET',
                    url: '/api/v5/user',
                    headers: {
                         "X-Auth-Token": code
                    }
                })
                .then(function(response){
                    status = response.status;
                    data = response.data;
                    console.log(data);
                    console.log(status);
                });
                return data;
            };
        }])
        ;

    home.controller('homeCtrl', function($scope) {
            $scope.message = '';
            $scope.message += 'Look! You are in the Home page.';
        })
        .controller('sideNavCtrl', function ($scope, $timeout, $mdSidenav, $log) {
            $scope.toggleLeft = buildDelayedToggler('left');
            $scope.toggleRight = buildToggler('right');
            $scope.isOpenRight = function(){
              return $mdSidenav('right').isOpen();
            };
            /**
             * Supplies a function that will continue to operate until the
             * time is up.
             */
            function debounce(func, wait, context) {
              var timer;
              return function debounced() {
                var context = $scope,
                    args = Array.prototype.slice.call(arguments);
                $timeout.cancel(timer);
                timer = $timeout(function() {
                  timer = undefined;
                  func.apply(context, args);
                }, wait || 10);
              };
            }
            /**
             * Build handler to open/close a SideNav; when animation finishes
             * report completion in console
             */
            function buildDelayedToggler(navID) {
              return debounce(function() {
                $mdSidenav(navID)
                  .toggle()
                  .then(function () {
                    $log.debug("toggle " + navID + " is done");
                  });
              }, 200);
            }
            function buildToggler(navID) {
              return function() {
                $mdSidenav(navID)
                  .toggle()
                  .then(function () {
                    $log.debug("toggle " + navID + " is done");
                  });
              }
            }
          })
        .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
            $scope.close = function () {
              $mdSidenav('left').close()
                .then(function () {
                  $log.debug("close LEFT is done");
                });
            };
        })
        .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
            $scope.close = function () {
              $mdSidenav('right').close()
                .then(function () {
                  $log.debug("close RIGHT is done");
                });
            };
        })
        .controller('cityList', function($scope, $http){ // FOR GET CITY LIST API
            $http({
              method: "GET",
              url:"/api/v4/customer/cities",
              header:{
                  "Accept":"application/json",
                //   "X-Auth-Token": "P-dyc74jxskybLTJqMKL"
              }
            })
            .then(function(response) {
            $scope.myWelcome = response.data;
            console.log($scope.myWelcome);
            });
        })
        ;

    about.controller('aboutUsCtrl', function($scope) {
            $scope.message = '';
            $scope.message += 'Look! I are in the About Us page.';
        });

    // contact.controller('contactUsCtrl', function($scope) {
    //         $scope.message = '';
    //         $scope.message += 'Look! I am an Contact Us page.';
    //     });
// })()
