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

//AngularJS v1.3.x workaround for old style controller declarition in HTML
devConstruct.config(['$controllerProvider', function ($controllerProvider) {
    $controllerProvider.allowGlobals();
}]);

/* Setup global settings */
devConstruct.factory('settings', ['$rootScope', function ($rootScope) {
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
devConstruct.controller('AppController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.$on('$viewContentLoaded', function () {
        Metronic.initComponents(); // init core components
        Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive
    });
}]);

/* Setup Layout Part - Header */
devConstruct.controller('HeaderController', ['$scope', function ($scope) {
    $scope.$on('$includeContentLoaded', function () {
        Layout.initHeader($scope); // init header
    });
}]);

/* Setup Layout Part - Sidebar */
devConstruct.controller('PageHeadController', ['$scope', function ($scope, User) {
    $scope.$on('$includeContentLoaded', function () {

    });
}]);

/* Setup Layout Part - Footer */
devConstruct.controller('FooterController', ['$scope', function ($scope) {
    $scope.$on('$includeContentLoaded', function () {
        Layout.initFooter(); // init footer
    });
}]);

/* Setup Rounting For All Pages */
devConstruct.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    // Redirect any unmatched url
    $urlRouterProvider.otherwise("/home/");
    $stateProvider
        // Home
        .state('home', {
            url: "/home/",
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
                            'js/controllers/HomeController.js'
                        ]
                    });
                }]
            }
        })
        // AngularJS plugins
        .state('fileupload', {
            url: "/file_upload.html",
            templateUrl: "views/file_upload.html",
            data: {
                pageTitle: 'AngularJS File Upload',
                pageSubTitle: 'angularjs file upload'
            },
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'angularFileUpload',
                        files: [
                            '/assets/global/plugins/angularjs/plugins/angular-file-upload/angular-file-upload.min.js',
                        ]
                    }, {
                        name: 'devConstruct',
                        files: [
                            'js/controllers/GeneralPageController.js'
                        ]
                    }]);
                }]
            }
        })
        // UI Select
        .state('uiselect', {
            url: "/ui_select.html",
            templateUrl: "views/ui_select.html",
            data: {
                pageTitle: 'AngularJS Ui Select',
                pageSubTitle: 'select2 written in angularjs'
            },
            controller: "UISelectController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'ui.select',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '/assets/global/plugins/angularjs/plugins/ui-select/select.min.css',
                            '/assets/global/plugins/angularjs/plugins/ui-select/select.min.js'
                        ]
                    }, {
                        name: 'devConstruct',
                        files: [
                            'js/controllers/UISelectController.js'
                        ]
                    }]);
                }]
            }
        })
        // Blog
        .state('blog', {
            url: "/blog.html",
            templateUrl: "views/blog.html",
            data: {
                pageTitle: 'Блог',
                pageSubTitle: 'блог devConstruct'
            },
            controller: ""

        })
        .state('orders', {
            url: "/orders/:url",
            templateUrl: "views/order_item.html",
            data: {
                pageTitle: 'Заказ №',
                pageSubTitle: 'Спецификация проекта'
            },
            controller: "OrderItemController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'devConstruct',
                        insertBefore: '#ng_load_plugins_before',
                        files: [
                            'js/controllers/OrderItemController.js'
                        ]
                    });
                }]
            }

        })
        .state('add_order_item', {
            url: "/order/new",
            templateUrl: "views/add_order_item.html",
            data: {
                pageTitle: 'Добавить заказ'
            },
            controller: "TodoController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'devConstruct',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '/assets/global/plugins/bootstrap-datepicker/css/datepicker3.css',
                            '/assets/global/plugins/select2/select2.css',
                            '/assets/admin/pages/css/todo.css',
                            '/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            '/assets/global/plugins/select2/select2.min.js',
                            '/assets/admin/pages/scripts/todo.js',
                            'js/controllers/TodoController.js',
                        ]
                    });
                }]
            }
        })
        // News
        .state('news', {
            url: "/news.html",
            templateUrl: "views/news.html",
            data: {
                pageTitle: 'Новости',
                pageSubTitle: 'Очень крутые новости'
            },
            controller: "",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'devConstruct',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '/assets/global/plugins/select2/select2.css',
                            '/assets/admin/pages/css/todo.css'
                        ]
                    });
                }]
            }

        })
        .state('help', {
            url: "/help.html",
            templateUrl: "views/help.html",
            data: {
                pageTitle: 'Помощь',
                pageSubTitle: 'Вам тут помогут)'
            },
            controller: "",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'devConstruct',

                        files: []
                    }, {
                        name: 'devConstruct',
                        files: []
                    }]);
                }]
            }
        })
        // User Profile
        .state("profile", {
            url: "/profile",
            templateUrl: "views/profile/main.html",
            data: {
                pageTitle: 'User Profile',
                pageSubTitle: 'user profile sample'
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
                            'js/controllers/UserProfileController.js'
                        ]
                    });
                }]
            }
        })
        // User Profile Dashboard
        .state("profile.dashboard", {
            url: "/dashboard",
            templateUrl: "views/profile/home.html",
            data: {
                pageTitle: 'User Profile',
                pageSubTitle: 'user profile dashboard sample'
            }
        })
        // User Profile Account
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
        .state('todo', {
            url: "/freelance/:catid",
            templateUrl: "views/todo.html",
            data: {
                pageTitle: 'Услуги',
                pageSubTitle: ''
            },
            controller: "TodoController",
            resolve: {
                catid: ['$stateParams', function ($stateParams) {
                    return $stateParams.catid;
                }],
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'devConstruct',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '/assets/global/plugins/bootstrap-datepicker/css/datepicker3.css',
                            '/assets/global/plugins/select2/select2.css',
                            '/assets/admin/pages/css/todo.css',
                            '/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            '/assets/global/plugins/select2/select2.min.js',
                            '/assets/admin/pages/scripts/todo.js',
                            'js/controllers/TodoController.js'
                        ]
                    });
                }]
            }
        })
        .state('store', {
            url: "/store/:url",
            templateUrl: "views/store.html",
            data: {
                pageTitle: 'Магазин',
                pageSubTitle: ''
            },
            controller: "StoreItemController",
            resolve: {
                url: ['$stateParams', function ($stateParams) {
                    return $stateParams.url;
                }],
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'devConstruct',
                        insertBefore: '#ng_load_plugins_before',
                        files: [
                            'js/controllers/StoreItemController.js',
                            '/assets/admin/pages/css/todo.css'
                        ]
                    });
                }]
            }
        })

        .state('product', {
            url: "/product/:url",
            templateUrl: "views/product.html",
            data: {
                pageTitle: 'Товар №',
                pageSubTitle: 'Описание'
            },
            controller: "StoreItemController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'devConstruct',
                        insertBefore: '#ng_load_plugins_before',
                        files: [
                            'js/controllers/StoreItemController.js'
                        ]
                    });
                }]
            }

        })

        .state('product_add', {
            url: "/products/add",
            templateUrl: "views/add_product_item.html",
            data: {
                pageTitle: 'Добавить товар в магазин',
                pageSubTitle: ''
            },
            controller: "AddProductController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'devConstruct',
                        insertBefore: '#ng_load_plugins_before',
                        files: [

                            '/assets/global/plugins/select2/select2.css',

                            '/assets/global/plugins/select2/select2.min.js',

                            'js/controllers/AddProductController.js'
                        ]
                    });
                }]
            }

        })
}]);

/* Init global settings and run the app */
devConstruct.run(["$rootScope", "settings", "$state", "$http", function ($rootScope, settings, $state, $http) {
    $rootScope.$state = $state;
    $rootScope.$settings = settings;


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