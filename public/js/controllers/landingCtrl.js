define(['./module', 'jquery'], function (controllers, $) {
    'use strict';

    controllers.controller('landingCtrl', ['$scope', 'heatPumpService', function ($scope, heatPumpService) {

        $scope.geo = {};


        heatPumpService.getAllPump().then(function (result) {
            $scope.geo = result;
            $scope.$apply();
        });

        heatPumpService.getAll220().then(function (result) {
            $scope.geo = result;
            $scope.$apply();
        });

        heatPumpService.getAllWaterHeater().then(function (result) {
            $scope.geo = result;
            $scope.$apply();
        });

        heatPumpService.getAllInvertor().then(function (result) {
            $scope.geo = result;
            $scope.$apply();
        });

        heatPumpService.getAllBuiltInPC().then(function (result) {
            $scope.geo = result;
            $scope.$apply();
        });

        heatPumpService.getAllBoilerR().then(function (result) {
            $scope.geo = result;
            $scope.$apply();
        });

        heatPumpService.getAllCheap().then(function (result) {
            $scope.geo = result;
            $scope.$apply();
        });









    }]);
});
