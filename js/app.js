//(function (window, angular, undefined) {
    /*jshint globalstrict:true*/
    /*global angular:false*/
    'use strict';

angular.module('appDevConstruct', [
    'ngRoute',
        "lbServices",
        'services.breadcrumbs'
    ]);

angular.module('appDevConstruct').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.otherwise({redirectTo: '/404'});
    }]);

angular.module('appDevConstruct').controller('AppController', function ($scope) {

    });

angular.module('appDevConstruct').controller('HeaderController', ['$scope', '$location', '$route', 'lbServices', 'breadcrumbs',
        function ($scope, $location, $route, breadcrumbs) {
            $scope.location = $location;
            $scope.breadcrumbs = breadcrumbs;
        }
    ]);
//})(window, window.angular);