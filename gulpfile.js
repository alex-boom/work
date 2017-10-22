(function () {
  'use strict';

  var gulp = require('gulp'),
    sass = require('gulp-sass'),
    gcmq = require('gulp-group-css-media-queries'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    newer = require('gulp-newer'),
    concat = require('gulp-concat'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    notifier = require("node-notifier"),
    gutil = require('gulp-util'),
    cssnano = require('gulp-cssnano'),
    debug = require('gulp-debug'),
    connect = require('gulp-connect'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('gulp-rimraf'),
    browserify = require('browserify'),
    babelify = require('babelify');

  var Paths = {
    build: 'build',
    src: 'src',
    buildImages: 'images',
    srcImages: 'images',
    srcJS: 'js',
    fonts: 'fonts',
    scss: 'scss',
    production: 'production'
  }

  /**
   * Build styles for application from SASS
   */
  gulp.task('buildSass', function () {
    gulp.src(`./${Paths.src}/${Paths.scss}/style.scss`)
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sass().on('error', function (err) {
        showError.apply(this, ['Sass compile error', err]);
      }))
      .pipe(gcmq())
      .pipe(cssnano({safe: true}))
      .pipe(autoprefixer('last 3 versions'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(`./${Paths.build}/`));
  });


  /**
   * Images minification
   */
  gulp.task('imageMin', function () {
    gulp.src(`./${Paths.src}/${Paths.srcImages}/**/*`)
      .pipe(newer(`${Paths.build}/${Paths.buildImages}/`))
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
      }))
      .pipe(gulp.dest(`${Paths.build}/${Paths.buildImages}/`));
  });

  /**
   * Clean image build directory
   */
  gulp.task('imageClean', function () {
    gulp.src(`${Paths.build}/${Paths.buildImages}/`).pipe(rimraf());
  });

  /**
   * Watch for file changes
   */
  gulp.task('watch', function () {
    gulp.watch(`./${Paths.src}/${Paths.srcJS}/**/*`, ['buildCustomJS']);
    gulp.watch(`./${Paths.src}/vendor_entries/vendor.js`, ['buildJsVendors']);
    watch(`./${Paths.src}/${Paths.scss}/**/*`, function () {
      gulp.run('buildSass');
    });
    gulp.watch(`./${Paths.src}/vendor_entries/vendor.scss`, ['buildStylesVendors']);
    watch(`./${Paths.src}/${Paths.srcImages}/**/*`, function () {
      gulp.run('imageMin');
    });
    gulp.watch([`./${Paths.build}/**/*`, './*.html']).on('change', function (file) {
      gulp.src(file.path).pipe(connect.reload());
    });
  });

  /**
   * Starting local server
   */
  gulp.task('startLocalhost', function () {
    connect.server({
      livereload: true
    });
  });

  /**
   * Creating production folder without unnecessary files
   */
  gulp.task('production', ['cleanProduction'], function () {
    gulp.src(['./**/*',
      `!${Paths.src}/`,
      `!${Paths.src}/**/*`,
      '!bower/',
      '!bower/**/*',
      '!node_modules/**/*',
      '!node_modules/',
      `!${Paths.build}/**.map`,
      '!.bowerrc',
      '!bower.json',
      '!.gitignore',
      '!gulpfile.js',
      '!LICENSE',
      '!package.json',
      `!${Paths.production}`,
      '!README.md'])
          .pipe(gulp.dest(`./${Paths.production}`));
  });

  /**
   * Clean production folder
   */
  gulp.task('cleanProduction', function () {
    return gulp.src(`./${Paths.production}/`, {read: false})
      .pipe(rimraf());
  });

  /**
   * Copy custom fonts to the build folder
   */
  gulp.task('copyFonts', function () {
    gulp.src([`./${Paths.src}/${Paths.fonts}/**/*`])
      .pipe(gulp.dest(`./${Paths.build}/${Paths.fonts}/`));
  });

  /**
   * Show error in console
   * @param  {String} preffix Title of the error
   * @param  {String} err     Error message
   */
  function showError(preffix, err) {
    gutil.log(gutil.colors.white.bgRed(' ' + preffix + ' '), gutil.colors.white.bgBlue(' ' + err.message + ' '));
    notifier.notify({title:preffix, message: err.message });
    this.emit("end");
  }

  // Default Gulp Task
  gulp.task('default', ['buildSass', 'copyFonts', 'imageMin', 'startLocalhost', 'watch']);
}());