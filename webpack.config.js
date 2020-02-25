const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const mode = process.env.WEBPACK_ENV || 'product'
const setup = require(`./.webpack/${mode}`)

module.exports = () => {
  return setup({
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new HtmlWebpackPlugin()
    ]
  })
}
