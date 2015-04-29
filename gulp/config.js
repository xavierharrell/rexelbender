var dest = "./build";
var src = './src';

module.exports = {
    src: src,
    dest: dest,
    browserSync: {
        server: {
            // Serve up our build folder
            baseDir: dest
        }
    },
    sass: {
        src: src + "/sass/**/*.{sass,scss}",
        dest: dest ,
        settings: {
            indentedSyntax: true, // Enable .sass syntax!
            imagePath: 'images' // Used by the image-url helper
        }
    },
    svg: {
      src: src + "/images/*.svg",
      dest: dest,
        svgConfig: {
            "mode": {
                "css": {
                    "render": {
                        "scss": {
                            "dest": "src/sass/_sprite.scss"
                        }

                    }
                }
            }
        }
    },
    images: {
        src: src + "/images/**",
        dest: dest + "/assets/images",
        options: {
            progressive: true,
            multipass: true
        }
    },
    markup: {
        src: src + "/htdocs/**",
        dest: dest
    },
    browserify: {
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries: src + '/javascript/global.coffee',
            dest: dest + "/assets/js",
            outputName: 'global.js',
            // Additional file extentions to make optional
            extensions: ['.coffee'],
            // list of modules to make require-able externally
            require: ['browsernizr', 'jquery']
                // See https://github.com/greypants/gulp-starter/issues/87 for note about
                // why this is 'backbone/node_modules/underscore' and not 'underscore'
        }, {
            entries: src + '/javascript/page.js',
            dest: dest + "/assets/js",
            outputName: 'main.js',
            // list of externally available modules to exclude from the bundle
            external: ['jquery']
        }]
    },
    production: {
        cssSrc: dest + '/assets/*.css',
        jsSrc: dest + '/assets/*.js',
        dest: dest
    }
};
