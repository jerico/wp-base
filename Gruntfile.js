'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'wp-content/themes/roots/assets/js/*.js',
        '!wp-content/themes/roots/assets/js/scripts.min.js'
      ]
    },
    stylus: {
      compile: {
        files: {
          'wp-content/themes/roots/assets/css/main.min.css': [
            'wp-content/themes/roots/assets/stylus/app.styl'
          ]
        },
        options: {
          compress: true,
          "include css": true,
          "resolve url": true
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'wp-content/themes/roots/assets/js/scripts.min.js': [
            'wp-content/themes/roots/assets/js/plugins/*.js',
            'wp-content/themes/roots/assets/js/_*.js'
          ]
        },
        options: {
          // JS source map: to enable, uncomment the lines below and update sourceMappingURL based on your install
           sourceMap: 'wp-content/themes/roots/assets/js/scripts.min.js.map',
           //sourceMappingURL: '/app/themes/roots/assets/js/scripts.min.js.map'
        }
      }
    },
    version: {
      options: {
        file: 'wp-content/themes/roots/lib/scripts.php',
        css: 'wp-content/themes/roots/assets/css/main.min.css',
        cssHandle: 'roots_main',
        js: 'wp-content/themes/roots/assets/js/scripts.min.js',
        jsHandle: 'roots_scripts'
      }
    },
    watch: {
      stylus: {
        files: [
          'wp-content/themes/roots/assets/stylus/*.styl',
        ],
        tasks: ['stylus', 'version']
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'uglify', 'version']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: false
        },
        files: [
          'wp-content/themes/roots/assets/css/main.min.css',
          'wp-content/themes/roots/assets/js/scripts.min.js',
          'wp-content/themes/roots/templates/*.php',
          'wp-content/themes/roots/*.php'
        ]
      }
    },
    clean: {
      dist: [
        'wp-content/themes/roots/assets/css/main.min.css',
        'wp-content/themes/roots/assets/js/scripts.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-wp-version');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'stylus',
    'uglify',
    'version'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
