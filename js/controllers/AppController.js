'use strict';

devConstruct.controller('AppController', function ($rootScope, $scope, $http, $timeout, $stateParams, Categories) {
    $scope.$on('$viewContentLoaded', function () {
        console.log(Categories);
    });
});