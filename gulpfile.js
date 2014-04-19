var gulp     = require('gulp'),
	less     = require('gulp-less'),
	prefix   = require('gulp-autoprefixer'),
	minify   = require('gulp-minify-css');

gulp.task('compile', function(){
	gulp.src('./less/main.less')
		.pipe(less())
		.pipe(prefix())
		.pipe(gulp.dest('./builtcss/'));
});

gulp.task('build', function(){
	gulp.src('./less/main.less')
		.pipe(less())
		.pipe(prefix())
		.pipe(minify())
		.pipe(gulp.dest('./builtcss/min/'));
});

gulp.task('default', ['compile']);

gulp.task('watch', function(){
	gulp.watch(['./less/**/*.less', './less/*.less'], ['compile']);
});