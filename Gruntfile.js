module.exports = function (grunt) {

  // configuration
  grunt.initConfig({
    mochaTest: {
      options: {
        reporter: 'spec'
      },
      test: {
        src: ["test/*.test.js"]
      }
    },
    instrument: {
      files: 'app/**/*.js',
      options: {
        lazy: true,
        basePath: 'test/coverage/instrument/'
      }
    },
    env: {
      coverage: {
        APP_DIR_FOR_CODE_COVERAGE: '../test/coverage/instrument/app/'
      }
    },
    clean: {
      src: ['test/coverage']
    },
    storeCoverage: {
      options: {
        dir: 'test/coverage/reports'
      }
    },
    makeReport: {
      src: 'test/coverage/reports/**/*.json',
      options: {
        type: 'lcov',
        dir: 'test/coverage/reports',
        print: 'detail'
      }
    }
  });

  // plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-istanbul');
  grunt.loadNpmTasks('grunt-env');

  // tasks
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('coverage', ['clean', 'instrument', 'env:coverage', 'mochaTest', 'storeCoverage', 'makeReport']);
};
