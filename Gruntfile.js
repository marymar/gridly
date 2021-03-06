module.exports = function(grunt) {

    grunt.initConfig({
        scsslint: {
            allFiles: [
                'assets/sass/**/*.scss'
                ],
            options: {
                //bundleExec: true,
                config: 'scss-lint-config.yml',
                reporterOutput: 'scss-lint-report.xml',
                colorizeOutput: false,
                maxBuffer: 307200
            },
            
        },
        sass: {
            dev: {
                files: [{
                        expand: true,
                        cwd: 'assets/sass',
                        src: ['*.scss'],
                        dest: 'public/assets/css',
                        ext: '.css'
                      }]
            },
            dist: {
                options: {                       // Target options
                    style: 'compressed'
                },
                files: [{
                        expand: true,
                        cwd: 'assets/sass',
                        src: ['*.scss'],
                        dest: 'public/assets/css',
                        ext: '.css'
                      }]
            }
        },
        
        copy: {
          main: {
            files: [
              {expand: true, cwd: 'html/', src: ['**'], dest: 'public/'}
            ],
          },
        },
        

        watch: {
            files: [
                'assets/**/*.scss',
                'html/**/*.htm*'
                ],
            tasks: ['scsslint', 'sass:dev', 'copy']
        }
        
    });
  
    //register tasks
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['scsslint', 'sass:dist', 'copy']);
    
    //load tasks
    grunt.loadTasks('tasks');
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-contrib-copy');
};
