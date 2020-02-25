const webpack = require('webpack')

module.exports = (config) => {
  return {
    ...config,
    mode: 'development',
    devtool: false,
    plugins: [
      new webpack.SourceMapDevToolPlugin(),
      ...config.plugins
    ]
  }
}

