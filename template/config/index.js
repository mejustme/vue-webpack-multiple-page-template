// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var argv = require('yargs').argv
var branch = require('git-branch');

var dailyPublicPathPrefix = '//assets-daily.kuaidadi.com/{{ gitLabPlace }}'
var onlinePublicPathPrefix = '//assets.xiaojukeji.com/{{ gitLabPlace }}'
var publicPathPrefix = ''
var version = ''

if (argv.webpack && argv.webpack == 'prod') {
  var branchName = branch.sync();
  var matchResult = branchName && branchName.match(/(daily|publish)\/(\d+\.\d+\.\d+)/)
  if (matchResult) {
    publicPathPrefix = matchResult[1] == 'publish'? onlinePublicPathPrefix : dailyPublicPathPrefix
    version = matchResult[2]
    console.info('当前分支', branchName)
    console.warn(`请确认资源路径正确：${publicPathPrefix}/${version}/\n`)
  } else {
    console.error('分支命名规则:daily/xxx, publish/xxx')
    console.error('如果仅想输出打包后代码，请执行：npm run build:dev\n')
    return
  }
}

module.exports = {
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../build'),
    assetsSubDirectory: '',
    assetsPublicPath: publicPathPrefix? `${publicPathPrefix}/${version}/` : '/',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    assetsRoot: path.resolve(__dirname, '../build'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
