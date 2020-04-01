const gulp = require('gulp');
const panini = require('panini');
const sass = require('gulp-sass');
const del = require('del');
const browserSync = require('browser-sync').create();
const fs = require("fs-extra");
const rollup = require('gulp-rollup');
const sourcemaps = require('gulp-sourcemaps');

let convertHbsTask = (done) => {
	panini.refresh();
	gulp.src('./app/html/pages/*.html')
		.pipe(panini ({
			root: 'app/html/pages/',
			layouts: 'app/html/layouts/',
			partials: 'app/html/partials/',
			data: 'app/data/',
			helpers: 'helpers/',
		}))
		.pipe(gulp.dest('dist/pages'));
	done();
}

let convertScssTask = (done) => {
	gulp.src('./app/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/css'))
	gulp.src('./app/scss/pages/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/css/pages'));
	done();
}

// let moveJavascriptTask = () => {
//     return gulp.src('app/js/**/*.js')
//         .pipe(sourcemaps.init())
//         .pipe(babel({
// 			presets: ['@babel/preset-env']
//         }))
//         .pipe(concat('global.js'))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('./dist/js'))
// }


let moveJavascriptTask = () => {
	return gulp.src('./app/js/**/*.js')
		.pipe(sourcemaps.init())

		.pipe(rollup({
			input: './app/js/global.js',
			format: 'es'
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/js'));
}









let moveImagesTask = (done) => {
	gulp.src('./app/img/**/*.*')
		.pipe(gulp.dest('./dist/img'));
	done();
}

let moveFontsTask = (done) => {
	gulp.src('./app/fonts/**/*.*')
		.pipe(gulp.dest('./dist/fonts'));
	done();
}

let moveSongsTask = (done) => {
	gulp.src('./app/songs/**/*.*')
		.pipe(gulp.dest('./dist/songs'));
	done();
}

let moveSongDataTask = (done) => {
	gulp.src('./app/song-data/**/*.*')
		.pipe(gulp.dest('./dist/song-data'));
	done();
}

let clearDist = (done) => {
	del.sync('./dist');
	done();
}

let browserSyncReloadTask = (done) => {
	browserSync.reload();
	done();
}

let browserSyncTask = (done) => {
	browserSync.init({
		server: {
			baseDir: './dist',
			index: 'pages/index.html',
			notify: false
		}
	});
	done();
}
let watchTask = (done) => {
	gulp.watch('./app').on('change', gulp.series(clearDist,convertHbsTask,moveFontsTask,convertScssTask,moveJavascriptTask,moveImagesTask,browserSyncReloadTask));
	done();
}

exports.clean = clearDist;
exports.dev = gulp.series(clearDist,gulp.parallel(convertHbsTask,moveFontsTask,convertScssTask,moveJavascriptTask,moveImagesTask,moveSongsTask,moveSongDataTask),browserSyncTask,watchTask);
exports.build = gulp.series(clearDist,gulp.parallel(convertHbsTask,moveFontsTask,convertScssTask,moveJavascriptTask,moveImagesTask,moveSongsTask,moveSongDataTask));
