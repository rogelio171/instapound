var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
var babel = require('babelify')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var watchify = require('watchify')

gulp.task('styles', () => {
    gulp
        .src('index.scss')
        .pipe(sass())
        .pipe(rename('app.css'))
        .pipe(gulp.dest('public'))
})

gulp.task('assets', () => {
    gulp
        .src('assets/*')
        .pipe(gulp.dest('public'))
})

function compile(watch) {
    var bundle = watchify(browserify('./src/index.js'))

    function rebundle() {
        bundle
            .transform(babel)
            .bundle()
            .on('error', (err) => {
                console.log(err)
                this.emit('end')
            })
            .pipe(source('index.js'))
            .pipe(rename('app.js'))
            .pipe(gulp.dest('public'))
    }

    if (watch) {
        bundle.on('update', () => {
            console.log('-> Bundling...')
            rebundle()
        })
    }

    rebundle()
}

gulp.task('build', () => compile())

gulp.task('watch', () => compile(true))

gulp.task('default', ['styles', 'assets', 'build'])