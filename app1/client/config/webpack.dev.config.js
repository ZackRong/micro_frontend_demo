const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.join(__dirname, '../src/index.js')
  },
  output: {
    path: path.join(__dirname, '../../static'),
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name][hash].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          'vue-loader'
        ]
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      },
      {
        test: /\.less$/, // 匹配所有的css文件
        // 在use数组中，是从右向左运行的
        // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
        // 再用 style-loader 把css插入到dom中
        use: [ "style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue']
  },
  // webpack-dev-server配置
  devServer: {
    contentBase: path.join(__dirname, '../../static/views'),
    port: 3000,
    // 可以通过localhost访问
    host: '127.0.0.1',
    overlay: {
      errors: true
    },
    hot: true,
    // 内容不要打包到内存，存到硬盘
    writeToDisk: true,
    // 访问根路径外其他路径时，转发到根路径。其实是指镜头资源转发到这里(html、js...)
    historyApiFallback: true,
    // 内存打包后，生成的html、静态资源所在路径
    // publicPath: '/test2/'
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      // 打包输出HTML
      title: 'App应用1',
      // minify: {
      //   // 压缩 HTML 文件
      //   removeComments: true, // 移除 HTML 中的注释
      //   collapseWhitespace: true, // 删除空白符与换行符
      //   minifyCSS: true // 压缩内联 css
      // },
      filename: path.resolve(__dirname, '../../static/views/index.html'), // 生成后的文件名
      template: path.resolve(__dirname, '../public/index.html'), // 根据此模版生成 HTML 文件
      // chunks: ['main'] // entry中的 main 入口才会被打包
    }),
    // 这个要放最后
    new CleanWebpackPlugin()
  ]
};
