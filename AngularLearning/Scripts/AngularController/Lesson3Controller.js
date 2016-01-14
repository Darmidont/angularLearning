(function () {
    //'use strict';

    //angular
    //    .module('app')
    //    .controller('Lesson3Controller', Lesson3Controller);

    //Lesson3Controller.$inject = ['$location']; 

    //function Lesson3Controller($location) {
    //    /* jshint validthis:true */
    //    var vm = this;
    //    vm.title = 'Lesson3Controller';

    //    activate();

    //    function activate() { }
    //}
    var app = angular.module('MyApp', []);
    app.controller('Lesson3Controller', function ($scope) {
        $scope.products =
        [
            {
                name : 'Test1',
                price: 25,
                description: "description1",
                reviews:
                    [
                        {
                            stars: 5,
                            body: 'I love this',
                            author:'dd@dd.com'
                        },
                        {
                            stars: 3,
                            body: 'fignya',
                            author: 'test@dd.com'
                        },
                    ]
            },

            {
                name: 'Test2',
                price: 25,
                description: "description1",
                reviews:
                    [
                        {
                            stars: 4,
                            body: 'temp',
                            author: 'dd@dd.com'
                        },
                        {
                            stars: 2,
                            body: 'fignya',
                            author: 'test@dd.com'
                        },
                    ]
            },
        ];
    });
})();
