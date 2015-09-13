/* Setup general page controller */
devConstruct.controller('GeneralPageController', ['$rootScope', '$scope', 'settings', function ($rootScope, $scope, settings) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
        Metronic.initAjax();
    });
}]);
