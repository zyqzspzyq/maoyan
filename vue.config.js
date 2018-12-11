const path = require('path')

function resolve(url) {
    return path.resolve(__dirname,url)
}

module.exports = {
    devServer: {
        port: 8000,
        proxy: {
            '/my': {
                target: 'http://m.maoyan.com/',
                // target: 'https://m.maizuo.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/my': ''
                }
            },
            '/mz': {
                target: 'http://m.maizuo.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/mz': ''
                }
            }
        }
    },


// 
    chainWebpack (config) {
        config
            .resolve
            .alias
            .set('@styles',resolve('src/stylesheets'))
            .set('@libs',resolve('src/libs'))
            .set('@util',resolve('src/util'))
            .set('@components',resolve('src/components'))
            .set('@pages',resolve('src/pages'))
    }

}