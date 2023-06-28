const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './'
})

// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   chainWebpack: config => {
//     // 删除默认的HTML插件
//     config.plugins.delete('html');

//     // 添加自定义HTML插件
//     config.plugin('html').use(HtmlWebpackPlugin, [
//       {
//         template: 'public/index.html',
//         inject: true,
//         minify: {
//           removeComments: true,
//           collapseWhitespace: true,
//           removeAttributeQuotes: true
//         }
//       }
//     ]);
//   },
//   configureWebpack: {
//     output: {
//       filename: 'js/[name].[contenthash].js'
//     }
//   },
//   filenameHashing: false,
//   productionSourceMap: false,
//   publicPath: './'
// };
