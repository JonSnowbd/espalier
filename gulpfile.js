var gulp     = require('gulp'),
	less     = require('gulp-less'),
	prefix   = require('gulp-autoprefixer'),
	minify   = require('gulp-minify-css'),
	name     = require('gulp-rename');

gulp.task('compile', function(){
	gulp.src('./less/main.less')
		.pipe(less())
		.pipe(prefix())
		.pipe(name('espalier.css'))
		.pipe(gulp.dest('./css/'));
});

gulp.task('build', function(){
	gulp.src('./less/main.less')
		.pipe(less())
		.pipe(prefix())
		.pipe(minify())
		.pipe(name('espalier.min.css'))
		.pipe(gulp.dest('./css/'));
});

gulp.task('default', ['compile']);

gulp.task('watch', function(){
	gulp.watch(['./less/**/*.less', './less/*.less'], ['compile']);
});