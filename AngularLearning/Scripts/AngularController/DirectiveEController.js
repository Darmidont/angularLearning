(function () {
    var app = angular.module('MyApp', []);
    app.controller('DirectiveEController', function ($scope) {
        $scope.description = 'Test';
    });

    app.directive('productDescription', function() {
        return {
            restrict: 'E',
            templateUrl: '/Html/test.html'
        };
    });
})();