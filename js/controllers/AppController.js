'use strict';


devConstruct.controller('AppController', function ($rootScope, $scope, $http, $timeout, $stateParams, Users) {
    $scope.$on('$viewContentLoaded', function () {
        //console.log('AppController');
        //console.log(Users.isAuthenticated());
        //
        //$('#register-button').on('click', function () {
        //    var Today = new Date(),
        //
        //        email = $('#registration [name="email"]').val(),
        //        username = $('#registration [name="username"]').val(),
        //        date_create = Today.getFullYear() + '-' + Today.getMonth() + '-' + Today.getDate() + ' ' + Today.getHours() + ':' + Today.getMinutes() + ':' + Today.getSeconds(),
        //        fullname = $('#registration [name="fullname"]').val(),
        //        password = $('#registration [name="password"]').val(),
        //        confirm = $('#registration [name="confirm"]').val(),
        //        country = ($('#registration [name="country"] option:selected').length > 0 ? $('#registration [name="country"] option:selected').val() : ''),
        //        errors = [];
        //
        //    $('#error-warning-register').addClass('hide').html('');
        //
        //    Users.count({
        //        where: {
        //            email: email
        //        }
        //    }).$promise.
        //        then(function (emailcount) {
        //            if (emailcount.count != 0) {
        //                errors.push('Данный email уже зарегистрирован в системе!');
        //            }
        //
        //            Users.count({
        //                where: {
        //                    username: username
        //                }
        //            }).$promise.
        //                then(function (logincount) {
        //                    if (logincount.count != 0) {
        //                        errors.push('Данный Login уже зарегистрирован в системе!');
        //                    }
        //
        //                    if (username.length < 1) {
        //                        errors.push('Введите Login!');
        //                    }
        //
        //                    if (fullname.length < 1) {
        //                        errors.push('Введите ФИО!');
        //                    }
        //
        //                    if (password.length < 1) {
        //                        errors.push('Введите пароль!');
        //                    }
        //
        //                    if (password != confirm) {
        //                        errors.push('Введенные пароли не совпадают!');
        //                    }
        //
        //                    if (!$rootScope.validateEmail(email) || email.length < 1) {
        //                        errors.push('Email введен не верно!');
        //                    }
        //
        //                    if (!errors.length) {
        //                        Users.create({
        //                            country: country,
        //                            city: $('#registration [name="city"]').val(),
        //                            fullname: fullname,
        //                            username: username,
        //                            password: password,
        //                            email: email,
        //                            created: date_create,
        //                            lastUpdated: date_create
        //                        }).$promise.then(function (result) {
        //                                if (typeof result.id != "undefined" && result.id > 0) {
        //                                    $('#registration .close').click();
        //                                    sweetAlert("Поздравляем", "Вы успешно зарегистрированы!", "success");
        //
        //                                    setTimeout(function () {
        //                                        $('.sweet-alert .confirm').click();
        //                                    }, 3000);
        //
        //                                    Users.login({
        //                                        email: email,
        //                                        password: password
        //                                    }).$promise.then(function (login_results) {
        //                                            console.log(Users.isAuthenticated);
        //                                            console.log(login_results);
        //                                        });
        //                                }
        //                            });
        //                    } else {
        //                        $('#error-warning-register').html(errors.join('<br/>')).removeClass('hide');
        //                    }
        //                });
        //        });
        //});
        //
        //$('#button-login').on('click', function () {
        //    Users.login({
        //        email: $('#login [name="username"]').val(),
        //        password: $('#login [name="password"]').val()
        //    }).$promise.then(function (login_results) {
        //            console.log(Users.isAuthenticated());
        //            console.log(login_results);
        //        });
        //});
    });
});
