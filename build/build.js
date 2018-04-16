process.env.NODE_ENV = 'production'
const path = require('path')
const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')
const webpack = require('webpack')
const webpackConfig = require('./webpack.prod.conf')
const pk = require('./../package.json')

rm(path.join('dist/' + pk.DIR), err => {
    if (err) throw err
    console.log(chalk.cyan('> dist/' + pk.DIR + '  已清空.\n'))
    const spinner = ora('building for production...')
    spinner.start()
    webpack(webpackConfig, (err, stats) => {
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

