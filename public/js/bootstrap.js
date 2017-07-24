define([
    'require',

    'angular',
    'hammerjs',
    'app',
    'materialize',

    'routes'
], function (require, ng, hammerjs) {
    'use strict';

    window.Hammer = hammerjs;

    require(['materialize'], function () {
        ng.bootstrap(document, ['app']);
    });
});

