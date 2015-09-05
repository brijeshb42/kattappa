var gutil = require('gulp-util');

var DEV = 1;
var PROD = 2;

var env = ((gutil.env.task && gutil.env.task.indexOf('prod')>-1) ? PROD : DEV);

function isDev() {
    return env !== PROD;
}

function isProd() {
    return env === PROD;
}

var pkg = require('../../package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @author v<%= pkg.author %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

module.exports = {
    env: ((gutil.env.task && gutil.env.task.indexOf('prod')>-1) ? PROD : DEV),
    dev: DEV,
    prod: PROD,
    src: './lib/',
    dest: './dist/',
    isDev: isDev,
    isProd: isProd,
    assetSrc: './lib/',
    assetDest: './dist/',
    banner: banner,
    pkg: pkg
};
