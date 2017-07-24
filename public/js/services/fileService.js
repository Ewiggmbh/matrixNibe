define(['./module', 'angular'], function (services, angular) {
    'use strict';

    services.service('fileService', ['$http', function ($http) {


        this.getPhoto = function (result) {
            return dpd.upload.get(result);
        };



    }]);
});
