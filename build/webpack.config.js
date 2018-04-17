const utils = require('./utils')
const pk = require('./../package.json')

module.exports = {
    dev:{
        NODE_ENV: '"development"',
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/api':{
                changeOrigin:true,
                target: "http://api.host.com",
                secure: false
            }
        },
        host: 'localhost',
        port: 8080,
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false,
        devtool: 'cheap-module-eval-source-map',
        cacheBusting: true,
        cssSourceMap: true
    },
    build:{
        NODE_ENV: '"production"',
        index: utils.resolve('dist/index.html'),
        assetsRoot: utils.resolve('dist'),
        assetsSubDirectory: utils.resolve('dist/static'),
        assetsPublicPath: '/' + pk.DIR + '/',
        productionSourceMap: true,
        devtool: '#source-map',
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: false
    }
}

