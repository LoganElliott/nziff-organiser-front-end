var buildConfig = {
	paths: {
		app: 'src/app',
		output: 'server/public',
		css: 'src/app/**/*.scss',
		js: 'src/app/**/*.js'
	}
};

var del = require('del');

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var util = require("gulp-util");
var run = require("gulp-run");

gulp.task('clean', function(done) {
    del(buildConfig.output + '/app', function(err){
        util.log('Build output directory cleaned',util.colors.green);
        done();
    });
});

gulp.task('css', function() {
    return gulp.src(buildConfig.paths.css)
        .pipe(sass().on('error', sass.logError))
        .pipe(rename({ext: '.css'}))
        .pipe(gulp.dest(function(file) {
            console.log(file.base);
            return file.base;
        }));
});

gulp.task('bundle', function(){
    run('jspm bundle-sfx ' + buildConfig.paths.app + '/app ' + buildConfig.paths.output + '/build.js').exec()
});

gulp.task('default', ['clean','css','bundle']);
