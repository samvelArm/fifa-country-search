const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './index.jsx',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};
