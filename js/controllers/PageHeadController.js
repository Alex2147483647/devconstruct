devConstruct.controller('PageHeadController', function ($rootScope, $scope, $http, $timeout, Categories) {
    $scope.$on('$viewContentLoaded', function () {
        $rootScope.categories = Categories.find({});
    });
});