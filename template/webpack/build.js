require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var argv = require('yargs').argv
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')[argv.webpack === 'dev'? 'dev' : 'build']
var webpackConfig = argv.webpack === 'dev'? require('./webpack.dev.conf') : require('./webpack.prod.conf')
var isWatch = argv.watch === 'true'

var spinner = ora(`building for ${argv.webpack}...`)
spinner.start()

rm(path.join(config.assetsRoot, config.assetsSubDirectory), err => {
  if (err) throw err

  if (isWatch) {
    webpackConfig.watch = true
  }

  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
  })
})
