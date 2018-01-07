/* eslint-disable import/no-extraneous-dependencies */
// ============================================================
// Import packages
const grunt = require('grunt');
require('load-grunt-tasks')(grunt);

// ============================================================
// Tasks
grunt.initConfig({
    babel: {
        dist: {
            files: [{
                expand: true,
                cwd: 'src',
                src: ['**/*.js'],
                dest: 'build/',
                ext: '.js',
            }],
        },
    },

    clean: {
        build: ['build/'],
        doc: ['doc/'],
    },

    eslint: {
        target: {
            expand: true,
            cwd: 'src',
            src: ['**/*.js'],
            dest: 'build/',
            ext: '.js',
        },
    },

    mocha: {
        test: {
            src: ['src\\**\\__test__\\**\\*.js'],
            opts: 'mocha.opts',
        },
    },

    watch: {
        scripts: {
            files: [
                'src/**/*.js',
                'gruntfile.js',
                'package.json',
                '.eslintrc.js',
            ],
            tasks: ['build'],
            options: {
                atBegin: true,
                spawn: false,
            },
        },
    },
});

// Load the plugin that provides the "uglify" task.
require('load-grunt-tasks')(grunt);

// Registering all tasks
grunt.registerTask('lint', ['eslint']);
grunt.registerTask('build', ['eslint', 'clean:build', 'babel']);
grunt.registerTask('default', ['build']);
