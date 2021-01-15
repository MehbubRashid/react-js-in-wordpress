const path = require('path');

module.exports = (env, argv) => {
  let production = argv.mode === 'production'

  return {
    entry: {
      'index': path.resolve(__dirname, 'src/index.js'),
    },

    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'build'),
    },

    devtool: production ? false : 'source-map',
  
    resolve: {
      extensions: [".js", ".jsx", ".json"],
    },
  
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  };
}
