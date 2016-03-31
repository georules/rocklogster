//browserify index.js --standalone rocklogster> ../build/rocklogster.js
module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      client:{
        src: ['client/index.js'],
        dest: 'build/rocklogster.js',
        options: {
          browserifyOptions: {
            standalone:'rocklogster'
          },
          watch: true
        }
      }
    },
    watch: {

    }
  })

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['browserify:client'])
};
