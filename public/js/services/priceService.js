define(['./module'], function (services) {
    'use strict';

    services.service('priceService', [function () {



        this.getPrice = function (result) {
            return dpd.anyprice.get(result);
        };




    }]);
});

