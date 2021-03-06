//----------------------------------------------------------------------------------------------------------------------
// Full Stack PoC Gruntfile
//----------------------------------------------------------------------------------------------------------------------

module.exports = function(grunt)
{
    grunt.initConfig({
        project: {
            tags: 'client/**/*.tag',
            scss: 'client/**/*.scss',
            dist: 'dist/'
        },
        clean: ["<%= project.dist %>"],
        copy: {
            index: {
                src: 'client/index.html',
                dest: 'dist/index.html'
            },
            html: {
                expand: true,
                cwd: 'client',
                src: '**/*.html',
                dest: 'dist'
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
        vueify: {
            components: {
                files: [
                    {
                        expand: true,
                        cwd: 'client',
                        src: 'components/**/*.vue',
                        dest: 'dist/',
                        ext: '.vue.js'
                    }
                ]
            }
        },
        sass: {
            dist: {
                options: {
                    includePaths: ['node_modules/bootstrap/scss', 'client/scss', 'client'],
                    style: 'expanded'
                },
                files: {
                    'dist/css/app.css': 'client/scss/theme.scss',
                }
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

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-vueify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //------------------------------------------------------------------------------------------------------------------

    grunt.registerTask("build", ["clean", "copy", "sass", "vueify", "babel"]);
    grunt.registerTask("default", ["build"]);

    //------------------------------------------------------------------------------------------------------------------
};

//----------------------------------------------------------------------------------------------------------------------
