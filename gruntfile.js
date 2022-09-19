/**
 * Grunt config.
 */
function gruntConfig(grunt) {
    require('load-grunt-tasks')(grunt); // eslint-disable-line import/no-extraneous-dependencies,global-require

    grunt.initConfig({
        gitstatus: {
            publish: {
                options: {
                    callback(r) {
                        if (r.length > 0) throw new Error('git status unclean');
                    },
                },
            },
        },
    });

    grunt.registerTask('prepublish', [
        'gitstatus:publish',
    ]);
}

module.exports = gruntConfig;
