//(function (window, angular, undefined) {
    /*jshint globalstrict:true*/
    /*global angular:false*/
    'use strict';

    angular.module('app', [
        'ui.router',
        "lbServices",
        'services.breadcrumbs'
    ]);

    angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.otherwise({redirectTo: '/404'});
    }]);

    angular.module('app').controller('AppController', function ($scope) {

    });

    angular.module('app').controller('HeaderController', ['$scope', '$location', '$route', 'lbServices', 'breadcrumbs',
        function ($scope, $location, $route, breadcrumbs) {
            $scope.location = $location;
            $scope.breadcrumbs = breadcrumbs;
        }
    ]);
//})(window, window.angular);