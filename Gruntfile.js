module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'public/javascripts/**/*.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    connect: {
      options: {
        base: 'app/'
      },
      webserver: {
        options: {
          port: 8888,
          keepalive: true
        }
      },
      devserver: {
        options: {
          port: 8888
        }
      },
      testserver: {
        options: {
          port: 9999
        }
      },
      coverage: {
        options: {
          base: 'coverage/',
          port: 5555,
          keepalive: true
        }
      }
    },

    karma: {  
      unit: {
        configFile: 'karma.conf.js',
        autoWatch: false,
        singleRun: true
      }
    },

    protractor_webdriver: {
      options: {
        command: 'webdriver-manager start'
      }
    },

    protractor : {
      options: {
        configFile: 'proc.conf.js',
        autoWatch: false,
        singleRun: true
      },
      args: {
        specs: ['spec/*_spec.js']
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-webdriver');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-contrib-connect');


  grunt.registerTask('unit', function(){
    grunt.task.run('karma:unit');
  });

  grunt.registerTask('functional', function(){
    grunt.task.run('protractor_webdriver');
    grunt.task.run('protractor');
  });

  // Default task(s).
  grunt.registerTask('default', ['uglify','unit','functional']);
};