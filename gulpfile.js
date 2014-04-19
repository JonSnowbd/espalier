var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('compile', function(){
	gulp.src('./less/main.less')
		.pipe(less())
		.pipe(gulp.dest('./buildcss/'));
});

gulp.task('default', ['compile']);
gulp.task('watch', function(){
	gulp.watch(['./less/**/*.less', './less/*.less'], ['compile']);
});