define(['./module'], function (services) {
    'use strict';

    services.service('systemService', [function () {

        this.newSystem = function (result) {
            return dpd.systems.post({}, result);
        };

        this.getSystem = function (result) {
            return dpd.systems.get(result);
        };


        this.loadFile = function (result) {
            return dpd.fileupload.post({}, result);
        };


    }]);
});

