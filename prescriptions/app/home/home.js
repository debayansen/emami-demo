// angular.module('home',[]).controller('homeCtrl', function($scope) {
//         $scope.message = '';
//         $scope.message += 'Look! You are in the Home page.';
//     })
//     .controller('sideNavCtrl', function ($scope, $timeout, $mdSidenav, $log) {
//         $scope.toggleLeft = buildDelayedToggler('left');
//         $scope.toggleRight = buildToggler('right');
//         $scope.isOpenRight = function(){
//           return $mdSidenav('right').isOpen();
//         };
//         /**
//          * Supplies a function that will continue to operate until the
//          * time is up.
//          */
//         function debounce(func, wait, context) {
//           var timer;
//           return function debounced() {
//             var context = $scope,
//                 args = Array.prototype.slice.call(arguments);
//             $timeout.cancel(timer);
//             timer = $timeout(function() {
//               timer = undefined;
//               func.apply(context, args);
//             }, wait || 10);
//           };
//         }
//         /**
//          * Build handler to open/close a SideNav; when animation finishes
//          * report completion in console
//          */
//         function buildDelayedToggler(navID) {
//           return debounce(function() {
//             $mdSidenav(navID)
//               .toggle()
//               .then(function () {
//                 $log.debug("toggle " + navID + " is done");
//               });
//           }, 200);
//         }
//         function buildToggler(navID) {
//           return function() {
//             $mdSidenav(navID)
//               .toggle()
//               .then(function () {
//                 $log.debug("toggle " + navID + " is done");
//               });
//           }
//         }
//       })
//     .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
//         $scope.close = function () {
//           $mdSidenav('left').close()
//             .then(function () {
//               $log.debug("close LEFT is done");
//             });
//         };
//     })
//     .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
//         $scope.close = function () {
//           $mdSidenav('right').close()
//             .then(function () {
//               $log.debug("close RIGHT is done");
//             });
//         };
//     })
//     .controller('cityList', function($scope, $http){ // FOR GET CITY LIST API
//         $http({
//           method: "GET",
//           url:"/api/v4/customer/cities",
//           header:{
//               "Accept":"application/json",
//             //   "X-Auth-Token": "P-dyc74jxskybLTJqMKL"
//           }
//         })
//         .then(function(response) {
//         $scope.myWelcome = response.data;
//         console.log($scope.myWelcome);
//         });
//     })
//     ;
