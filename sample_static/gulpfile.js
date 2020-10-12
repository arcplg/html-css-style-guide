const { src, dest, watch, series, parallel } = require("gulp");
const env = require('node-env-file');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const notify = require("gulp-notify");
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssdeclsort = require('css-declaration-sorter');
const sassGlob = require('gulp-sass-glob'); // @importを纏めて指定
const browserSync = require('browser-sync');

sass.compiler = require('node-sass');

env('.env');

const paths = {
  'root': process.env.WEB_ROOT_PATH,
  'scssSrc': process.env.SRC_PATH_SCSS,
  'cssSrc': process.env.SRC_PATH_CSS,
  'cssDist': process.env.DIST_PATH_CSS,
  'htmlWatch': process.env.WATCH_PATH_HTML
}

const compileSass = done => {
  const postcssPlugins = [
    autoprefixer({
      // browserlistはpackage.jsonに記載
      cascade: false,
    }),
    cssdeclsort({ order: 'smacss' /* alphabetical, smacss, concentric-css */ })
  ]

  src(paths.scssSrc)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(postcss(postcssPlugins))
    .pipe(dest(paths.cssDist))

  done();
}

// ローカルサーバ起動
const buildServer = done => {
  browserSync.init({
    port: process.env.PORT_NUM,
    notify: true,
    // 静的サイト
    server: {
      baseDir: paths.root
    }
  })
  done()
}

// ブラウザ自動リロード
const browserReload = done => {
  browserSync.reload()
  done()
}

// ファイル監視
const watchFiles = () => {
  watch([paths.scssSrc, paths.cssSrc, paths.htmlWatch], series(compileSass, browserReload))
}

exports.sass = compileSass;
exports.default = series(compileSass, buildServer, watchFiles);
