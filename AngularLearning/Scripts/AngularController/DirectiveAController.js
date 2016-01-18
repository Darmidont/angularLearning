(function () {
    var app = angular.module('MyApp', []);
    app.controller('DirectiveAController', function ($scope) {
        $scope.description = 'Test';
    });

    app.directive('productDescription', function () {
        return {
            restrict: 'A',
            templateUrl: '/Html/test1.html'
        };
    });
})();