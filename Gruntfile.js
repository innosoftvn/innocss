const grunt = require('grunt');

grunt.initConfig({
  sass: { // Task
    dist: { // Target
      options: { // Target options
        style: 'compressed',
        sourcemap: 'none',
        noCache: true
      },
      files: { // Dictionary of files
        'dist/innocom.min.css': 'sass/all.scss', // 'destination': 'source'
      }
    }
  },
  watch: {
    scripts: {
      files: ['sass/*.scss','index.html'],
      tasks: ['sass'],
      options: {
        livereload: true,
        compressed: true,
        spawn: false,
      },
    },
  },
});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['sass','watch']);
