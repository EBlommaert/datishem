module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.initConfig({
	concat: {
           files: {
               src: ['assets/less/*.less'],
               dest: 'cache/combined.less',
           }
        },
        less: {
            development: {
                files: {'web/style.css': 'cache/combined.less'}
            }
        },
        watch: {
            files: "./assets/less/*",
            tasks: ['concat', 'less']
        }
    });
    grunt.registerTask('default', ['concat', 'less', 'watch']);
}

