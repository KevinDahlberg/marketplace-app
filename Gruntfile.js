module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      html: {
        expand: true,
        cwd: 'client/views',
        src: ['index.html',
              '**/*.html'],
        dest: 'server/public/views/'
      },
      css: {
        expand: true,
        cwd: 'client/styles',
        src: ['style.css'],
        dest: 'server/public/styles/'
      },
      scripts: {
        expand: true,
        cwd: 'client/scripts',
        src: ['*.js',
             '**/*.js'],
        dest: 'server/public/scripts/'
      },
      bootstrap: {
        expand: true,
        cwd: 'node_modules/bootstrap/dist/',
        src: ['css/bootstrap.css',
              'js/bootstrap.js'],
        dest: 'server/public/vendors/bootstrap/'
      },
      angular: {
        expand: true,
        cwd: 'node_modules/angular/',
        src: ['angular.js',
              'angular.min.js',
              'angular.min.js.map'],
        dest: 'server/public/vendors/angular/'
      },
      angularRoute: {
        expand: true,
        cwd: 'node_modules/angular-route/',
        src: ['angular-route.js',
              'angular-route.min.js',
              'angular-route.min.js.map'],
        dest: 'server/public/vendors/angular-route/'
      },
      javascript: {
        expand: true,
        cwd: 'client/scripts/',
        src: ['client.js',
              '**/*.js'],
        dest: 'server/public/scripts'
      },
      images: {
        expand: true,
        cwd: 'client/images/',
        src: ['**/*.png',
              '**/*.jpg'],
        dest: 'server/public/images/'
      }
    },

    watch: {
      files: [
        'client/**/*.*',
        'client/**/**/*.*'
      ],
      tasks: ['copy']
    },

    browserSync: {
  dev: {
    bsFiles: {
        src : ['server/public/styles/*.css','server/public/scripts/*.js','server/public/views/*.html']
    },
    options: {
          proxy: "localhost:4000"
        }
    }
}
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['copy', 'watch', 'browserSync']);
};
