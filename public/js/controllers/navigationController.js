define(['./module', 'jquery'], function (controllers, $) {
    'use strict';

    controllers.controller('navigationController', ['$scope','$rootScope', '$state', function ($scope, $rootScope, $state) {
            $(document).ready(function () {
                $(".button-collapse").sideNav();
                $('.dropdown-button').dropdown();
            });


        }]);
});
