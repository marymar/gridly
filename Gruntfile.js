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
        compass: {
            src: '**/*.scss',
            dist: {
                options: {
                    sassDir: 'assets/sass',
                    cssDir: 'public/assets/css'
                }
            }
        },
        
        copy: {
          main: {
            files: [
              // includes files within path
              {expand: true, cwd: 'html/', src: ['**'], dest: 'public/'}
//              {expand: true, src: ['html/**'], rwd: 'html',  dest: 'public/', filter: 'isFile'}
            ],
          },
        },
        

        watch: {
            files: [
                'assets/**/*.scss',
                'html/**/*.htm*'
                ],
            tasks: ['scsslint', 'compass', 'copy']
        }
        
    });
  
    //register tasks
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['scsslint', 'compass']);

    //load tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-contrib-copy');
};
