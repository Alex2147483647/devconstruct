'use strict';

devConstruct.controller('AppController', function ($rootScope, $scope, $http, $timeout, $stateParams, Categories) {
    $scope.$on('$viewContentLoaded', function () {

    });

    (function ($) {
        $(function () {
            console.log(Categories.find());
        });
    })(jQuery, window, angular);

});

//console.log(AppController);