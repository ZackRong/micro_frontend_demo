const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../static'),
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name][hash].chunk.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, '../static/views'),
    port: 8000,
    host: '127.0.0.1',
    hot: true,
    writeToDisk: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 打包输出HTML
      title: '基座应用',
      // minify: {
      //   // 压缩 HTML 文件
      //   removeComments: true, // 移除 HTML 中的注释
      //   collapseWhitespace: true, // 删除空白符与换行符
      //   minifyCSS: true // 压缩内联 css
      // },
      filename: path.resolve(__dirname, '../static/views/index.html'), // 生成后的文件名
      template: path.resolve(__dirname, '../public/index.html'), // 根据此模版生成 HTML 文件
      // chunks: ['main'] // entry中的 main 入口才会被打包
    }),
    // 这个要放最后
    new CleanWebpackPlugin()
  ]
};
