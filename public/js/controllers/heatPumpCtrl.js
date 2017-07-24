define(['./module', 'jquery', 'xeditable'], function (controllers, $) {
    'use strict';

    controllers.controller('heatPumpCtrl', ['$scope', '$stateParams', 'heatPumpService', 'descService', 'systemService', function ($scope, $stateParams, heatPumpService, descService, systemService) {



        $(document).ready(function(){
        $('nav').css( {"padding-left" : "0px"} )
            });


        heatPumpService.getPumpById($stateParams.pumpId).then(function (result) {
            $scope.pump = result;
            var pump = $scope.pump;

            $scope.$apply();
            $scope.filter = result.model;




        });

        $scope.$watch('filter', function() {


         descService.getDesc({"model": $scope.filter}).then(function (result) {
             $scope.description = result;
             $scope.$apply();
             var desc =  $scope.description[0].maindescription;
             var pump = $scope.pump;

             $scope.edit = function () {
                 var desc =  $scope.description[0].maindescription;
                 var pump = $scope.pump;

             };
             var pumpdesc = Object.assign({},pump, desc);
             $scope.$emit('myevent', pumpdesc);

        });


        });



        $scope.$on('myevent', function(event, pumpdesc) {


            systemService.newSystem({system: {mypump: pumpdesc}}).then(function (result) {

                $scope.id = result.id;
                $scope.$apply();
            });


        });



        $scope.thisPump = function () {


            systemService.getSystem({"id": $scope.id}).then(function (result) {
                $scope.system = result;
            });

        };



    }]);
});
