var gulp = require('gulp')
var runSequence = require('run-sequence')
var less = require('gulp-less')
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");

gulp.task('compile_less', function() {
	return gulp.src('./less/app.less')
		.pipe(less())
        .pipe(cleanCSS({
			compatibility: 'ie8'
        }))
        .pipe(rename('app.min.css'))
		.pipe(gulp.dest('./public/css'))
})

gulp.task('less:watch', function() {
	gulp.watch([`./less/app.less`], ['compile_less'])
})

gulp.task('default', function () {
	return runSequence('compile_less');
})