'use strict';

var path    = require('path');
var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();

var paths = {
    src : {
        scss: path.join(__dirname, '/public/src/sass/**/*.scss'),
        js: path.join(__dirname, 'js/*.js')
    },
    dist: {
        css: path.join(__dirname, '/public/dist/'),
        js: path.join(__dirname, 'dist/')
    }
};

/**
 * Hangle les erreurs sur les pipes
 * et les logs en console
 *
 */
var plumberErrorHandler = {
    errorHandler : function handlePlumberError(err) {
        console.log(err);
        this.emit('end');
    }
};

/**
 * Tâche Sass, compile le sass
 *
 */
gulp.task('sass', function compileSass() {
    return gulp.src(paths.src.scss)
        .pipe(plugins.plumber(plumberErrorHandler))
        .pipe(plugins.sass())
        .pipe(gulp.dest(paths.dist.css));
});

/**
 * Watch les fichiers sass
 * et les compiles automatiquement
 *
 */
gulp.task('watch', function watch() {
    gulp.watch(paths.src.scss, ['sass']);
});
