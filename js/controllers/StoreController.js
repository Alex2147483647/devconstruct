MetronicApp.controller('StoreController', function ($rootScope, $scope, $http, $timeout, $stateParams, Products) {

    //$scope.$on('ngRepeatFinished', function (ev) {
    //    if ($stateParams.url > 0) {
    //        jQuery('input[type=checkbox][value="' + $stateParams.url + '"]').trigger('click');
    //    }
    //    //$rootScope.filterOrders();
    //
    //});
    //
    //$scope.$on('$viewContentLoaded', function () {
    //    $rootScope.single_product = $rootScope.products = [];
    //
    //    if ($scope.$state.current.name == 'product') {
    //        Products.findOne({
    //            filter: {
    //                where: {
    //                    id: $stateParams.url
    //                }
    //            }
    //        }).$promise.then(function (prod) {
    //                $rootScope.single_product = prod;
    //                $rootScope.single_product.category_name = '';
    //                Categories_developers.findOne({
    //                    filter: {
    //                        where: {
    //                            category_id: $rootScope.single_product.category_id
    //                        }
    //                    }
    //                }).$promise.then(function (cat) {
    //                        $rootScope.single_product.category_name = cat.name[0];
    //                    });
    //            });
    //    } else if ($scope.$state.current.name == 'store') {
    //
    //
    //        var result = Products.findOne({
    //            filter: {
    //                where: {id: "1"}
    //
    //            }
    //        });
    //
    //
    //        console.log(result);
    //
    //
    //        // TODO fix this select
    //        var query = {};
    //        if ($stateParams.url != "") {
    //            query = {
    //                filter: {
    //                    where: {
    //                        category_id: $stateParams.url
    //                    }
    //                }
    //            };
    //        }
    //
    //
    //        Products.find(query).$promise.then(function (prods) {
    //            $rootScope.products = prods;
    //            $rootScope.products.forEach(function (product, index) {
    //                Categories_developers.findOne({
    //                    filter: {
    //                        where: {
    //                            category_id: product.category_id
    //                        }
    //                    }
    //                }).$promise.then(function (cat) {
    //                        $rootScope.products[index].category_name = cat.name[0];
    //                    });
    //
    //
    //            });
    //        });
    //
    //
    //    }
    //
    //    Metronic.initAjax();
    //});


});
