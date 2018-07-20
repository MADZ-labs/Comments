const path = require('path');
// const HtmlWebPackPlugin = require('html-webpack-plugin');

// const htmlPlugin = new HtmlWebPackPlugin({
//   template: './client/index.html',
//   filename: './client/dist/index.html'
// });

module.exports = {
  entry: './client/src/components/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { 
            presets: ['env', 'react'] 
          }
        },
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]

  },
  // plugins: [htmlPlugin],
  resolve: {
    extensions: ['.jsx', '.css', '.js', '.json']
  },
};