//(function (window, angular, undefined) {
    /*jshint globalstrict:true*/
    /*global angular:false*/
    'use strict';

angular.module('devConstruct', [
    'ngRoute',
        "lbServices",
        'services.breadcrumbs'
    ]);

angular.module('devConstruct').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.otherwise({redirectTo: '/404'});
    }]);

angular.module('devConstruct').controller('AppController', function ($scope) {

    });

angular.module('devConstruct').controller('HeaderController', ['$scope', '$location', '$route', 'lbServices', 'breadcrumbs',
        function ($scope, $location, $route, breadcrumbs) {
            $scope.location = $location;
            $scope.breadcrumbs = breadcrumbs;
        }
    ]
);
//})(window, window.angular);