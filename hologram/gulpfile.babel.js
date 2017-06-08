import gulp from 'gulp';
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackCfg = require('./webpack.config.js');
var concatCss = require('gulp-concat-css');

gulp.task('default', ['build']);

gulp.task('watch', function () {
  gulp.watch('app/**/*.js', ['build:js']);
  gulp.watch('css/*.css', ['build:css']);
});

gulp.task('build:js', function () {
    // run webpack
    webpack(webpackCfg, function(err, stats) {
        if(err) throw new gutil.PluginError('webpack', err);
        gutil.log('[webpack]', stats.toString({
            // output options
        }));
        //callback();
    });
    console.log('build');
});

gulp.task('build:css', function(){
    return gulp.src('./css/*.css')
    .pipe(concatCss('Hologram.css'))
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('build', ['build:css','build:js']);
