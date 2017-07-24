define(['./app', 'angular-translate-static-files'], function (app) {
    'use strict';
    app.config(function ($stateProvider, $urlRouterProvider, $translateProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: 'tpl/main.html',
                controller: 'mainCtrl'
            })
            .state('signup', {
                url: '/',
                templateUrl: 'tpl/signup.html',
                controller: 'modelCtrl'
            })
            .state('signin', {
                url: '/',
                templateUrl: 'tpl/signin.html',
                controller: 'modelCtrl'
            })
            .state('heatpump', {
                url: '/heatpump/:pumpId',
                templateUrl: 'tpl/heatpump.html',
                controller: 'heatPumpCtrl'

            })
            .state('system', {
                url: '/system/:systemId',
                templateUrl: 'tpl/system.html',
                controller: 'systemCtrl'

            })
            .state('geotherm', {
                url: '/geotherm',
                templateUrl: 'tpl/geotherm.html',
                controller: 'modelCtrl'
            });

        $translateProvider.useStaticFilesLoader({
            prefix: '/languages/',
            suffix: '.json'
        });





        $translateProvider.preferredLanguage('ru');

    })
});







