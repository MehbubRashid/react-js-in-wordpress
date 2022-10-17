const defaults = require('@wordpress/scripts/config/webpack.config');

module.exports = {
  ...defaults,
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  output: {
    ...defaults.output,
    hotUpdateChunkFilename: 'hot-update/hot-update.js',
    hotUpdateMainFilename: 'hot-update/hot-update.json'
  }
}; 