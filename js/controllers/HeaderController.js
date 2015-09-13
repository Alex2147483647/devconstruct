'use strict';

devConstruct.controller('HeaderController', function ($rootScope, $scope, $http, $timeout) {
    $scope.$on('$viewContentLoaded', function () {
        console.log('PageHeadController');
        $rootScope.listCategories = Categories.find({
            where: {
                type: "freelance"
            }
        });
    });
});