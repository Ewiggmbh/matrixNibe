/*
 * grunt-express-runner
 * https://github.com/bmancini55/grunt-express-runner
 *
 * Copyright (c) 2014 Brian Mancini
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerTask('expressrunner', 'Simple express server runner', function() {

    var options = this.options({})
      , path = require('path')
      , script;

    // make task run async
    this.async();

    // set the debug flag if needed    
    if(options.debug) {
      process.env.DEBUG = options.debug;
    }

    // resolve the script and abort if needed
    script = path.resolve(options.script);
    if (!grunt.file.exists(script)) {
      grunt.log.warn('Script file "' + script + '" not found.');
      return false;
    }

    // load the script to start express
    require(script);

  });

};
