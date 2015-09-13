devConstruct.controller('PageHeadController', function ($rootScope, $scope, $http, $timeout, Categories) {
    $scope.$on('$viewContentLoaded', function () {
        console.log('AppController');
        $rootScope.listCategories = Categories.find({
            where: {
                type: "freelance"
            }
        });
    });
});