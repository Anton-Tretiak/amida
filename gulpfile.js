const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const babelify = require('babelify');
const tsify = require('tsify');

function compileJS() {
  return browserify({
    basedir: '.',
    entries: ['./src/index.tsx'],
    debug: true,
    cache: {},
    packageCache: {},
  })
  .plugin(tsify, { target: 'es6', jsx: 'react' })
  .transform(babelify.configure({
    presets: ['@babel/preset-react', '@babel/preset-typescript'],
    extensions: ['.tsx'],
  }))
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(gulp.dest('./build'));
}

function compileSCSS() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css'));
}

function watch() {
  gulp.watch('./src/**/*.tsx', compileJS);
  gulp.watch('./src/scss/**/*.scss', compileSCSS);
}

exports.build = gulp.series(compileJS, compileSCSS);
exports.watch = watch;
