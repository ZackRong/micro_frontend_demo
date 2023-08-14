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
    filename: 'js/[name][hash:8].bundle.js',
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
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue']
  },
  devServer: {
    contentBase: path.join(__dirname, '../../static/views'),
    port: 3001,
    host: '127.0.0.1',
    overlay: {
      errors: true
    },
    hot: true,
    // 内容不要打包到内存，存到硬盘
    writeToDisk: true,
    // 访问根路径外其他路径时，转发到根路径。其实是指静态资源转发到这里(html、js...)
    historyApiFallback: true,
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      // 打包输出HTML
      title: 'App应用2',
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
