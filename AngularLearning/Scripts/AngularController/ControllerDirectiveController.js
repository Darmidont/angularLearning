(function () {
    var app = angular.module('MyApp', []);
    //app.controller('ControllerDirectiveController', function ($scope) {
    //    $scope.description = 'Test';
    //});

    app.directive('productPanel', function () {
        return {
            restrict: 'E',
            templateUrl: '/Html/product-panel.html',
            controller:function($scope) {
                $scope.description = 'Test';
            }
        };
    });
})();