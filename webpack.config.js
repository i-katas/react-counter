const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const mode = 'dev'
const decorate = require(`./.webpack/${mode}`)

module.exports = () => {
  return decorate({
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
