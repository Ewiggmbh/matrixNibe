define([
    'angular',
    'ui.router',
    'angular-translate',
    './controllers/index',
    './services/index'

], function (ng) {
    'use strict';

    return ng.module('app', [
        'ui.router',
        'app.controllers',
        'app.services',
        'pascalprecht.translate'
    ]);
});
