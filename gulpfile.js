var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync= require('browser-sync'),
	min = require('gulp-clean-css'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	prefix = require("gulp-autoprefixer");

gulp.task('sass', function(){
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass())
	.pipe(prefix({
		browsers:['last 16 versions'],
		cascade: false
	}))
	.pipe(min())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream:true}));
});
gulp.task('browserSync', function(){
	browserSync({
		server:{
			baseDir: 'app'
		}
	})
});
gulp.task('watch', function(){
	gulp.watch('app/sass/**/*.sass',['sass'])
	gulp.watch('app/*.html', browserSync.reload);
});
gulp.task('default',['watch','sass','browserSync']);