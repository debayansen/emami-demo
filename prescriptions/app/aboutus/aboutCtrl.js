function(){
    angular.module('frankross',['ngMaterial','ngRoute'])
        .controller('aboutCtrl', function($scope) {
            $scope.message = 'Look! You are here in the About Us page.';
        });

}()
