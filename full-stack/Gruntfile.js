//----------------------------------------------------------------------------------------------------------------------
// Full Stack PoC Gruntfile
//----------------------------------------------------------------------------------------------------------------------

module.exports = function(grunt)
{
    grunt.initConfig({
        project: {
            tags: 'client/**/*.tag',
            sass: 'client/**/*.sass',
            dist: 'dist/'
        },
        clean: ["<%= project.dist %>"],
        copy: {
            index: {
                src: 'client/index.html',
                dest: 'dist/index.html'
            }
        },
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: "client",
                    src: "**/*.js",
                    dest: "<%= project.dist %>"
                }]
            }
        },
        /*
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }
        */
    });

    //------------------------------------------------------------------------------------------------------------------

    grunt.loadNpmTasks('grunt-riot');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //------------------------------------------------------------------------------------------------------------------

    grunt.registerTask("build", ["clean", "copy", "babel", "riot"]);
    grunt.registerTask("default", ["build"]);

    //------------------------------------------------------------------------------------------------------------------
};

//----------------------------------------------------------------------------------------------------------------------
