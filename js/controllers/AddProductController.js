MetronicApp.controller('AddProductController', function ($rootScope, $scope, $http, $timeout, Products) {
    $scope.$on('$viewContentLoaded', function () {


        $scope.add_prod = function () {
            Products.create({

                "title": "121123",
                "user_id": "123",
                "category_id": "123",
                "description": "123",
                "price": "123",
                "currency": "$",
                "sales": "123"
            }).$promise.then(function (cat) {
                    console.log(cat);
                });
        }


        Metronic.initAjax();
    });


});
