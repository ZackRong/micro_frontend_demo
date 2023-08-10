const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue']
  },
  plugins: [
    new VueLoaderPlugin(),
    // 这个要放最后
    new CleanWebpackPlugin()
  ]
};
