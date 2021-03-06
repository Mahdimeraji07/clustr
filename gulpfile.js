const gulp = require('gulp'),
			babel = require('gulp-babel'),
			uglify = require('gulp-uglify')

gulp.task('dist', () => {
	return gulp.src('index.js')
	.pipe(babel({ presets: ['env'] }))
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
})

gulp.task('default', ['dist']);