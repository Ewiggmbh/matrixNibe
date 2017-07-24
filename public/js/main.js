require.config({
        waitSeconds: 20,
        paths: {
            'domReady': './vendor/requirejs-domready/domReady',
            'angular': './vendor/angular/angular.min',
            'ui.router': './vendor/angular-ui-router/release/angular-ui-router.min',
            'angular-translate': './vendor/angular-translate/angular-translate.min',
            'angular-translate-static-files': './vendor/angular-translate-loader-static-files/angular-translate-loader-static-files.min',
            'angular-translate-storage-local': './vendor/angular-translate-storage-local/angular-translate-storage-local.min',
            'angular-translate-storage-cookie': './vendor/angular-translate-storage-cookie/angular-translate-storage-cookie.min',
            'jquery': './vendor/jquery/dist/jquery.min',
            'angular-route': './vendor/angular-route/',
            'ui.bootstrap': './vendor/angular-bootstrap/ui-bootstrap-tpls.min',
            'rzModule': './vendor/angularjs-slider/dist/rzslider',
            'jquery-ui':'./vendor/jquery-ui-1.12.1/jquery-ui',
            'angularAwesomeSlider':'./vendor/angular-awesome-slider/dist/angular-awesome-slider.min',
            'ui-rangeSlider':'./vendor/angular-rangeslider/angular.rangeSlider',
            'nouislider':'./vendor/nouislider/jquery.nouislider',
            'materialize': './vendor/materialize/dist/js/materialize.min',
            'hammerjs': './vendor/materialize/js/hammer.min',
            'velocity': './vendor/materialize/js/velocity.min',
            'jqueryHammer': './vendor/materialize/js/jquery.hammer',
            'jqueryEasing': './vendor/materialize/js/jquery.easing.1.3',
            'xeditable': 'vendor/angular-xeditable/dist/js/xeditable',
            'angularFileUpload': 'vendor/angular-file-upload/dist/angular-file-upload.min',
            'jqueryfileupload': 'vendor/jQuery-File-Upload-9.17.0/js/jquery.fileupload',
             'ui.widget': 'vendor/jquery-ui-1.10.4.custom/development-bundle/ui/jquery.ui.widget'




    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'ui.router': {
            deps: ['angular']
        },
        'angular-translate-storage-cookie': {
            deps: ['angular', 'angular-translate']
        },
        'materialize': {
            deps: ['jquery', 'hammerjs', 'jqueryHammer', 'jqueryEasing', 'velocity']
        },
        'rzModule': {
            deps: ['angular', 'ui.bootstrap']
        },
        'angularFileUpload': {
            deps: ['angular']
        },
        'jqueryfileupload': {
            deps: ['jquery']

        }
    },
    deps: ['./bootstrap']
});

