define(['./module', 'jquery'], function (controllers, $) {
    'use strict';

    controllers.controller('mainCtrl', ['$scope', function ($scope) {


        $(document).ready(function() {
            $('.carousel.carousel-slider').carousel({fullWidth: true});
            $('nav').css( {"padding-left" : "0px"} );
        });


 $scope.changePower = function() {
            $scope.changePump();
        };



    }]);
});

