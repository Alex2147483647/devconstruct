devConstruct.controller('PageHeadController', function ($rootScope, $scope, $http, $timeout, Categories) {
    $scope.$on('$viewContentLoaded', function () {
        $rootScope.listCategories = Categories.find({
            where: {
                type: "freelance"
            }
        });
    });
});