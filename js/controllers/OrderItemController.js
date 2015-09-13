devConstruct.controller('OrderItemController', function ($rootScope, $scope, $http, $timeout) {
    $scope.$on('$viewContentLoaded', function () {
        var seo = location.hash.split('/')[2];
        $rootScope.single_order = [];
        $http.get($rootScope.$settings.APIDomain + 'api/orders?filter[where][ready_url]=' + seo).success(function (single_order) {
            $rootScope.single_order = single_order;
            console.log(single_order);
        });

        Metronic.initAjax();
    });


});
