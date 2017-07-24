define(['./module'], function (services) {
    'use strict';

    services.service('heatPumpService', [function () {

        this.getAllPump = function (result) {
            return dpd.geotherm.get(result);
        };

        this.getPumpById = function (id) {
            return dpd.geotherm.get(id);
        };

        /*
        this.getAll220 = function (result) {
            return dpd.geotherm.get({"onefase":true},result);
        };


        this.getAllWaterHeater = function (result) {
            return dpd.geotherm.get({"waterHeater":true},result);
        };


        this.getAllInvertor = function (result) {
            return dpd.geotherm.get({"invertor":true},result);
        };

        this.getAllBuiltInPC = function (result) {
            return dpd.geotherm.get({"builtInPC":true},result);
        };


        this.getAll2compressor = function (result) {
            return dpd.geotherm.get({"2compressor":true},result);
        };

        this.getAllBoilerR = function (result) {
            return dpd.geotherm.get({"boilerR":true},result);
        };


        this.getAllCheap = function (result) {
            return dpd.geotherm.get({"cheap":true},result);
        };

      */


    }]);
});
