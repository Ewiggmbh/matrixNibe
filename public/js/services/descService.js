define(['./module'], function (services) {
    'use strict';

    services.service('descService', [function () {

        this.getDesc = function (result) {
            return dpd.description.get(result);
        };

        this.getAcc = function (result) {
            return dpd.anyprice.get(result);
        };


        this.getBoilers = function (result) {
            return dpd.boilers.get(result);
        };


    }]);
});
