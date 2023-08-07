const path = require('path');

module.exports = {
  entry: {
    main: path.join(__dirname, '../src/app.js')
  },
  output: {
    path: path.join(__dirname, '../../static'),
    filename: 'js/[name][hash:8].bundle.js',
    chunkFilename: 'js/[name][hash].chunk.js'
  },
  loader: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          'vue-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue']
  },
  plugins: []
};
