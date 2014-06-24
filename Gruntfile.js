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

  protractor: {
    functional:{
      options: {
        configFile: "proc.conf.js",
        keepAlive: false,
        args: {
           specs: ['spec/*-spec.js'],
        }
      }
    }
  }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-protractor-webdriver');
  // grunt.loadNpmTasks('grunt-contrib-connect');


  grunt.registerTask('unit', function(){
    grunt.task.run('karma:unit');
  });

  grunt.registerTask('functional',['protractor_webdriver','protractor:functional']);
   
  // Default task(s).
  grunt.registerTask('default', ['uglify','unit','functional']);
};

