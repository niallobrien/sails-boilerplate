module.exports = function(grunt) {

  grunt.config.set('babel', {
    dev: {
      options: {
        presets: ['es2015', 'react']
      },
      files: [{
        expand: true,
        cwd: 'assets/js/',
        src: ['**/*.js', '!dependencies/**/*.js'],
          dest: '.tmp/public/js/',
          ext: '.js'
        }]
      }
    });

  grunt.loadNpmTasks('grunt-babel');
};