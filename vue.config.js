// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': 'src/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'view': '@/view',
            }
        }
    }
}