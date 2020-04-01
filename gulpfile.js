const gulp = require('gulp');
const panini = require('panini');
const sass = require('gulp-sass');
const del = require('del');
const browserSync = require('browser-sync').create();
<<<<<<< HEAD
<<<<<<< HEAD
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
=======
const browserify = require('gulp-browserify');
>>>>>>> parent of 9699253... Revert "added babel"
=======
const browserify = require('gulp-browserify');
>>>>>>> parent of 9699253... Revert "added babel"

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

let moveJavascriptTask = (done) => {
	gulp.src('./app/js/*.js')
<<<<<<< HEAD
<<<<<<< HEAD
		.pipe(plumber())
		.pipe(babel({
			presets: [
				['@babel/env', {
					modules: false
				}]
			]
		}))
		.pipe(gulp.dest('./dist/js'));
	gulp.src('./app/js/modules/*.js')
		.pipe(plumber())
		.pipe(babel({
			presets: [
				['@babel/env', {
					modules: false
				}]
			]
		}))
		.pipe(gulp.dest('./dist/js/modules'));
=======
=======
>>>>>>> parent of 9699253... Revert "added babel"
		.pipe(browserify({
			insertGlobals : true
		}))
		.pipe(gulp.dest('./dist/js'));
	gulp.src('./app/js/pages/*.js')
		.pipe(browserify({
			insertGlobals : true
		}))
		.pipe(gulp.dest('./dist/js/pages'));
>>>>>>> parent of 9699253... Revert "added babel"
	done();
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
