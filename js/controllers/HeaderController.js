'use strict';

devConstruct.controller('HeaderController', function ($rootScope, $scope, $http, $timeout) {
    $scope.$on('$viewContentLoaded', function () {
        console.log('HeaderController');
        $rootScope.listCategories = Categories.find({
            where: {
                type: "freelance"
            }
        });
    });
});