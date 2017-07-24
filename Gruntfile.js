module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        expressrunner: {
            options: {
                script: './matrix.js',
                debug: 'app*'
            }
        },
        bower: {
            install: {
                options: {
                    targetDir: './public/js/vendor',
                    install: true,
                    copy: false
                }
            }
        }


    });


    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-npm-install');
    grunt.loadNpmTasks('grunt-express-runner');

    grunt.log.writeln('Started...');
    grunt.registerTask('npm-install', 'bower:install', function() {


        grunt.log.writeln(
            'Great!'
        );

        require('./matrix.js');
    });

    grunt.registerTask('default', [
        'npm-install',
        'bower:install',
        'expressrunner'
    ]);
};

