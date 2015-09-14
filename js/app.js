/* devConstruct App */
var devConstruct = angular.module("devConstruct", [
    "ui.router",
    "ui.bootstrap",
    "ui.bootstrap.modal",
    "oc.lazyLoad",
    "ngSanitize",
    "lbServices"
]);

/* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
devConstruct.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        cssFilesInsertBefore: 'ng_load_plugins_before' // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
    });
}]);

/* Setup global settings */
devConstruct.factory('settings', ['$rootScope', function ($rootScope) {
    // supported languages
    var settings = {
        layout: {
            pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
        },
        //layoutImgPath: Metronic.getAssetsPath() + 'admin/layout/img/',
        //layoutCssPath: Metronic.getAssetsPath() + 'admin/layout/css/'
    };

    $rootScope.settings = settings;
    return settings;
}]);

devConstruct.config(['$controllerProvider', function ($controllerProvider) {
    // this option might be handy for migrating old apps, but please don't use it
    // in new ones!
    $controllerProvider.allowGlobals();
}]);

/* Setup Rounting For All Pages */
devConstruct.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
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
                            '/assets/global/plugins/morris/morris.css',
                            '/assets/admin/pages/css/tasks.css',
                            '/assets/global/plugins/morris/morris.min.js',
                            '/assets/global/plugins/morris/raphael-min.js',
                            '/assets/global/plugins/jquery.sparkline.min.js',
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
                            '/assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
                            '/assets/admin/pages/css/profile.css',
                            '/assets/admin/pages/css/tasks.css',
                            '/assets/global/plugins/jquery.sparkline.min.js',
                            '/assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',
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
        .state("profile.portfolio", {
            url: "/portfolio",
            templateUrl: "views/profile/portfolio.html",
            data: {
                pageTitle: 'User portfolio',
                pageSubTitle: 'user profile reviews sample'
            }
        })
        .state("profile.friends", {
            url: "/friends",
            templateUrl: "views/profile/friends.html",
            data: {
                pageTitle: 'User friends',
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
                        name: 'devConstruct',
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
                        name: 'devConstruct',
                        insertBefore: '#ng_load_plugins_before',
                        files: [
                            '/assets/global/plugins/select2/select2.css',
                            '/assets/global/plugins/select2/select2.min.js',
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
                        name: 'devConstruct',
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
                        name: 'devConstruct',
                        insertBefore: '#ng_load_plugins_before',
                        files: [
                            '/js/controllers/StoreItemController.js'
                        ]
                    });
                }]
            }
        });
}]);

devConstruct.controller('PageHeadController', ['$scope', function ($scope, Categories) {
    $scope.$on('$includeContentLoaded', function () {

    });
    console.log(Categories.find());
}]);


//devConstruct.controller('AppController', ['$scope', '$rootScope', function ($scope, $rootScope, Categories) {
//    $scope.$on('$viewContentLoaded', function () {
//        Metronic.initComponents(); // init core components
//        Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive
//        console.log(Categories);
//        console.log(Categories.find());
//    });
//}]);

/* Init global settings and run the app */
devConstruct.run(["$rootScope", "settings", "$http", "$state", 'lbServices', function ($rootScope, settings, $http, $state, lbServices) {
    $rootScope.$state = $state;
    $rootScope.$settings = settings;

    //Categories.create( {
    //    "name": [
    //        "new"
    //    ],
    //    "parent_id": "1",
    //    "status": "21",
    //    "id": "12",
    //    "type": "1",
    //    "seo_url": "123",
    //    "sort_order": "1"
    //});


    //$rootScope.categories_selected = [];
    //$rootScope.filterType = -1;
    //$rootScope.languages = [];
    //$http.get($rootScope.$settings.APIDomain + 'api/languages').success(function (languages) {
    //    $rootScope.languages = languages;
    //    $rootScope.language = $rootScope.languages[0].id_locale;
    //    $rootScope.locatisation = {
    //        orderTypes: []
    //    };
    //
    //    $rootScope.languages.forEach(function (item) {
    //        $rootScope.locatisation.orderTypes = [
    //            ['Разовый заказ'],
    //            ['Постоянная работа'],
    //            ['Конкурсы']
    //        ];
    //    });
    //});

    //$rootScope.categories = [];
    //$http.get($rootScope.$settings.APIDomain + 'api/categories').success(function (categories) {
    //    $rootScope.categories = categories;
    //});

    //$rootScope.categories_developer = [];
    //$http.get($rootScope.$settings.APIDomain + 'api/categories_developers').success(function (categories_developer) {
    //    $rootScope.categories_developer = categories_developer;
    //});

    //$rootScope.orders = [];
    //$http.get($rootScope.$settings.APIDomain + 'api/orders').success(function (orders) {
    //    $rootScope.orders = orders;
    //});


    //$rootScope.getending = function (number) {
    //    return number % 10 == 0 ? 'ов' : (number % 10 == 1) ? '' : (number % 10 > 1 && number % 10 < 5) ? 'а' : 'ов';
    //};

    //$rootScope.filterOrders = function () {
    //    if ($('[data-content-type].active').data('content-type') == 'orders') {
    //        var filters = [],
    //            filter_text = $('[name="order_name"]').val(),
    //            order_type = $('[data-order-type].active').data('order-type'),
    //            url = $rootScope.$settings.APIDomain + 'api/orders/?',
    //            filter = 'filter[where][and][0][category_id]',
    //            i = 0;
    //
    //        if ($('[name=\'category[]\']:checked').length > 1) {
    //            $('[name=\'category[]\']:checked').each(function () {
    //                filters.push('filter[where][and][0][category_id][inq]=' + $(this).val() + '&');
    //            });
    //        } else {
    //            $('[name=\'category[]\']:checked').each(function () {
    //                filters.push('filter[where][and][0][category_id]=' + $(this).val() + '&');
    //            });
    //        }
    //
    //        i++;
    //
    //        if (order_type > -1) {
    //            filters.push('filter[where][and][' + i + '][type]=' + order_type + '&');
    //            i++;
    //        }
    //
    //        if (filter_text != '') {
    //            filters.push('filter[where][and][' + i + '][title][like]=%25' + filter_text + '%25&');
    //            i++;
    //        }
    //
    //        $rootScope.filterType = $('[data-order-type].active').data('order-type');
    //
    //        $http.get(url + filters.join('')).success(function (orders) {
    //            $rootScope.orders = orders;
    //        });
    //    } else {
    //
    //    }
    //};

    //$rootScope.dropdownChecker = function (element) {
    //    $(this).closest('ul').prev('button').text($(this).text());
    //};

    //$rootScope.validateEmail = function (email) {
    //    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    //    return re.test(email);
    //};


    //$rootScope.transliterate = function (text) {
    //    var transl = new Array();
    //    transl['А'] = 'A';
    //    transl['а'] = 'a';
    //    transl['Б'] = 'B';
    //    transl['б'] = 'b';
    //    transl['В'] = 'V';
    //    transl['в'] = 'v';
    //    transl['Г'] = 'G';
    //    transl['г'] = 'g';
    //    transl['Д'] = 'D';
    //    transl['д'] = 'd';
    //    transl['Е'] = 'E';
    //    transl['е'] = 'e';
    //    transl['Ё'] = 'Yo';
    //    transl['ё'] = 'yo';
    //    transl['Ж'] = 'Zh';
    //    transl['ж'] = 'zh';
    //    transl['З'] = 'Z';
    //    transl['з'] = 'z';
    //    transl['И'] = 'I';
    //    transl['и'] = 'i';
    //    transl['Й'] = 'J';
    //    transl['й'] = 'j';
    //    transl['К'] = 'K';
    //    transl['к'] = 'k';
    //    transl['Л'] = 'L';
    //    transl['л'] = 'l';
    //    transl['М'] = 'M';
    //    transl['м'] = 'm';
    //    transl['Н'] = 'N';
    //    transl['н'] = 'n';
    //    transl['О'] = 'O';
    //    transl['о'] = 'o';
    //    transl['П'] = 'P';
    //    transl['п'] = 'p';
    //    transl['Р'] = 'R';
    //    transl['р'] = 'r';
    //    transl['С'] = 'S';
    //    transl['с'] = 's';
    //    transl['Т'] = 'T';
    //    transl['т'] = 't';
    //    transl['У'] = 'U';
    //    transl['у'] = 'u';
    //    transl['Ф'] = 'F';
    //    transl['ф'] = 'f';
    //    transl['Х'] = 'X';
    //    transl['х'] = 'x';
    //    transl['Ц'] = 'C';
    //    transl['ц'] = 'c';
    //    transl['Ч'] = 'Ch';
    //    transl['ч'] = 'ch';
    //    transl['Ш'] = 'Sh';
    //    transl['ш'] = 'sh';
    //    transl['Щ'] = 'Shh';
    //    transl['щ'] = 'shh';
    //    transl['Ъ'] = '';
    //    transl['ъ'] = '';
    //    transl['Ы'] = '';
    //    transl['ы'] = 'y';
    //    transl['Ь'] = '';
    //    transl['ь'] = '';
    //    transl['Э'] = 'E';
    //    transl['э'] = 'e';
    //    transl['Ю'] = 'Yu';
    //    transl['ю'] = 'yu';
    //    transl['Я'] = 'Ya';
    //    transl['я'] = 'ya';
    //    transl['і'] = 'i';
    //    transl['І'] = 'I';
    //    transl[' '] = '-';
    //    transl['ь'] = '';
    //    transl['ъ'] = '';
    //
    //    return text.split('').map(function (item) {
    //        return transl[item] != null ? transl[item] : item;
    //    }).join('');
    //}
}]);