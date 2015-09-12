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
        }
        /*
        riot: {
            options: {
                type : 'es6',
                concat: true
            },
            src: '<%= project.tags %>',
            dest: '<%= project.dist %>/tags.js'
        },
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

    grunt.registerTask("build", ["clean", "copy", "babel"]);
    grunt.registerTask("default", ["build"]);

    //------------------------------------------------------------------------------------------------------------------
};

//----------------------------------------------------------------------------------------------------------------------
