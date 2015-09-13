'use strict';

devConstruct.controller('PageHeadController', function ($rootScope, $scope, $http, $timeout) {
    $scope.$on('$viewContentLoaded', function () {
        console.log('PageHeadController');
    });
});