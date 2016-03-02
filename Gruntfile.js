module.exports = function(grunt) {
  // require it at the top and pass in the grunt instance
	require('time-grunt')(grunt);

  // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
	require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
  		options: {
        indentedSyntax: true,
        outputStyle: 'expanded',
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'[*file*].css': '[*file*].scss'
  			}
  		}
  	},
    autoprefixer: {
      options: {
        browsers: ['Last 3 versions']
      },
      dist: {
        src: '[*file*].css'
      },
    },
    watch: {
      styles: {
        files: ['[*file*].scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
          spawn: false,
        },
      },
    }
  });

  grunt.registerTask('default', ['sass', 'autoprefixer']);

};
