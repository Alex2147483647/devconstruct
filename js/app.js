/***
 Metronic AngularJS App Main Script
 ***/

/* Metronic App */
var MetronicApp = angular.module("MetronicApp", [
    "ui.router",
    "ui.bootstrap",
    "oc.lazyLoad",
    "ngSanitize",
    "lbServices"
]); 

/* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
MetronicApp.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        cssFilesInsertBefore: 'ng_load_plugins_before' // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
    });
}]);

/********************************************
 BEGIN: BREAKING CHANGE in AngularJS v1.3.x:
 *********************************************/
/**
 `$controller` will no longer look for controllers on `window`.
 The old behavior of looking on `window` for controllers was originally intended
 for use in examples, demos, and toy apps. We found that allowing global controller
 functions encouraged poor practices, so we resolved to disable this behavior by
 default.

 To migrate, register your controllers with modules rather than exposing them
 as globals:

 Before:

 ```javascript
 function MyController() {
  // ...
}
 ```

 After:

 ```javascript
 angular.module('myApp', []).controller('MyController', [function() {
  // ...
}]);

 Although it's not recommended, you can re-enable the old behavior like this:

 ```javascript
 angular.module('myModule').config(['$controllerProvider', function($controllerProvider) {
  // this option might be handy for migrating old apps, but please don't use it
  // in new ones!
  $controllerProvider.allowGlobals();
}]);
 **/

//AngularJS v1.3.x workaround for old style controller declarition in HTML
MetronicApp.config(['$controllerProvider', function ($controllerProvider) {
    // this option might be handy for migrating old apps, but please don't use it
    // in new ones!
    $controllerProvider.allowGlobals();
}]);

/********************************************
 END: BREAKING CHANGE in AngularJS v1.3.x:
 *********************************************/

/* Setup global settings */
MetronicApp.factory('settings', ['$rootScope', function ($rootScope) {
    // supported languages
    var settings = {
        layout: {
            pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
        },
        layoutImgPath: Metronic.getAssetsPath() + 'admin/layout/img/',
        layoutCssPath: Metronic.getAssetsPath() + 'admin/layout/css/'
    };

    $rootScope.settings = settings;

    return settings;
}]);

/* Setup App Main Controller */
MetronicApp.controller('AppController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.$on('$viewContentLoaded', function () {
        Metronic.initComponents(); // init core components
        Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive
        //console.log(Categories);
        //console.log(Categories.find());
    });
}]);

/***
 Layout Partials.
 By default the partials are loaded through AngularJS ng-include directive. In case they loaded in server side(e.g: PHP include function) then below partial
 initialization can be disabled and Layout.init() should be called on page load complete as explained above.
 ***/

/* Setup Layout Part - Header */
MetronicApp.controller('HeaderController', ['$scope', function ($scope) {
    $scope.$on('$includeContentLoaded', function () {
        Layout.initHeader(); // init header
    });
}]);

/* Setup Layout Part - Sidebar */
MetronicApp.controller('PageHeadController', ['$scope', function ($scope) {
    $scope.$on('$includeContentLoaded', function () {
        Demo.init(); // init theme panel
    });
}]);

/* Setup Layout Part - Footer */
MetronicApp.controller('FooterController', ['$scope', function ($scope) {
    $scope.$on('$includeContentLoaded', function () {
        Layout.initFooter(); // init footer
    });
}]);

/* Setup Rounting For All Pages */
MetronicApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url (404)
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "views/home.html",
            data: {
                pageTitle: 'Главная',
                pageSubTitle: ''
            },
            controller: "HomeController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'devConstruct',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [

                            '/assets/admin/pages/css/tasks.css',

                            '/assets/admin/pages/scripts/index3.js',
                            '/assets/admin/pages/scripts/tasks.js',
                            '/js/controllers/HomeController.js'
                        ]
                    });
                }]
            }
        })
        .state('blog', {
            url: "/blog",
            templateUrl: "views/blog.html",
            data: {
                pageTitle: 'Блог',
                pageSubTitle: 'блог devConstruct'
            }
        })
        .state('freelance', {
            url: "/freelance",
            templateUrl: "views/freelance.html",
            data: {
                pageTitle: 'Услуги',
                pageSubTitle: ''
            },
            controller: "FreelanceController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'devConstruct',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '/assets/admin/pages/css/freelance.css',
                            '/js/controllers/FreelanceController.js'
                        ]
                    });
                }]
            }
        })
        .state('freelance.add_edit', {
            url: "/add-edit",
            templateUrl: "views/add_order_item.html",
            data: {
                pageTitle: 'Добавить заказ',
                pageSubTitle: ''
            },
            controller: "FreelanceAddEditController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'devConstruct',
                        insertBefore: '#ng_load_plugins_before',
                        files: [
                            '/assets/admin/pages/css/freelance.css',
                            '/js/controllers/FreelanceAddEditController.js'
                        ]
                    });
                }]
            }
        })
        .state('freelance.add_edit.order', {
            url: "/{order_url}",
            data: {
                pageTitle: 'Редактировать заказ',
                pageSubTitle: ''
            },
            resolve: {
                order_url: ['$stateParams', function ($stateParams) {
                    return $stateParams.order_url;
                }]
            }
        })
        .state('freelance.category', {
            url: "/{category_url}",
            resolve: {
                category_url: ['$stateParams', function ($stateParams) {
                    return $stateParams.category_url;
                }]
            }
        })
        .state('freelance.order', {
            url: "/{category_url}/{order_url}",
            templateUrl: "views/order_item.html",
            data: {
                pageTitle: 'Заказ ',
                pageSubTitle: 'Спецификация проекта'
            },
            controller: "OrderItemController",
            resolve: {
                order_url: ['$stateParams', function ($stateParams) {
                    return $stateParams.order_url;
                }],
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'devConstruct',
                        insertBefore: '#ng_load_plugins_before',
                        files: [
                            '/js/controllers/OrderItemController.js'
                        ]
                    });
                }]
            }
        })
        .state('news', {
            url: "/news",
            templateUrl: "views/news.html",
            data: {
                pageTitle: 'Новости',
                pageSubTitle: 'Очень крутые новости'
            },
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'devConstruct',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '/assets/global/plugins/select2/select2.css',
                            '/assets/admin/pages/css/freelance.css'
                        ]
                    });
                }]
            }

        })
        .state('help', {
            url: "/help",
            templateUrl: "views/help.html",
            data: {
                pageTitle: 'Помощь',
                pageSubTitle: 'Вам тут помогут)'
            },
            controller: "",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load();
                }]
            }
        })
        .state("profile", {
            url: "/profile",
            templateUrl: "views/profile/main.html",
            data: {
                pageTitle: 'Профиль пользователя',
                pageSubTitle: ''
            },
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'devConstruct',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [

                            '/assets/admin/pages/css/profile.css',
                            '/assets/admin/pages/css/tasks.css',

                            '/assets/admin/pages/scripts/profile.js',
                            '/js/controllers/UserProfileController.js'
                        ]
                    });
                }]
            }
        })
        .state("profile.dashboard", {
            url: "/dashboard",
            templateUrl: "views/profile/home.html",
            data: {
                pageTitle: 'User Profile',
                pageSubTitle: 'user profile dashboard sample'
            }
        })
        .state("profile.account", {
            url: "/account",
            templateUrl: "views/profile/account.html",
            data: {
                pageTitle: 'User Account',
                pageSubTitle: 'user profile account sample'
            }
        })
        .state("profile.help", {
            url: "/help",
            templateUrl: "views/profile/help.html",
            data: {
                pageTitle: 'User Help',
                pageSubTitle: 'user profile help sample'
            }
        })
        .state("profile.reviews", {
            url: "/reviews",
            templateUrl: "views/profile/reviews.html",
            data: {
                pageTitle: 'User reviews',
                pageSubTitle: 'user profile reviews sample'
            }
        })
        .state("profile.store", {
            url: "/store",
            templateUrl: "views/profile/store.html",
            data: {
                pageTitle: 'Store',
                pageSubTitle: 'user store reviews sample'
            }
        })
        .state('store', {
            url: "/store",
            templateUrl: "views/store.html",
            data: {
                pageTitle: 'Магазин',
                pageSubTitle: ''
            },
            controller: "StoreController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before',
                        files: [
                            '/js/controllers/StoreController.js',
                            '/assets/admin/pages/css/freelance.css'
                        ]
                    });
                }]
            }
        })
        .state('store.add_edit', {
            url: "/add-edit",
            templateUrl: "views/add_product_item.html",
            data: {
                pageTitle: 'Добавить товар',
                pageSubTitle: ''
            },
            controller: "ProductAddEditController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before',
                        files: [

                            '/js/controllers/ProductAddEditController.js'
                        ]
                    });
                }]
            }

        })
        .state('store.add_edit.product', {
            url: '/{product_url}',
            data: {
                pageTitle: 'Редактировать товар',
                pageSubTitle: ''
            },
            resolve: {
                product_url: ['$stateParams', function ($stateParams) {
                    return $stateParams.product_url;
                }]
            }
        })
        .state('store.cart', {
            url: "/shopping-cart",
            templateUrl: "views/cart.html",
            data: {
                pageTitle: 'Корзина ',
                pageSubTitle: ''
            },
            controller: "CartController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before',
                        files: [
                            '/js/controllers/CartController.js'
                        ]
                    });
                }]
            }
        })
        .state('store.category', {
            url: "/{category_url}",
            data: {
                pageTitle: 'Каталог',
                pageSubTitle: ''
            },
            resolve: {
                category_url: ['$stateParams', function ($stateParams) {
                    return $stateParams.category_url;
                }]
            }
        })
        .state('store.product', {
            url: "/{category_url}/{product_url}",
            templateUrl: "views/product.html",
            data: {
                pageTitle: 'Товар',
                pageSubTitle: ''
            },
            controller: "StoreItemController",
            resolve: {
                product_url: ['$stateParams', function ($stateParams) {
                    return $stateParams.product_url;
                }],
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before',
                        files: [
                            '/js/controllers/StoreItemController.js'
                        ]
                    });
                }]
            }
        });
}]);

/* Init global settings and run the app */
MetronicApp.run(["$rootScope", "settings", "$state", function ($rootScope, settings, $state) {
    $rootScope.$state = $state; // state to be accessed from view
}]);