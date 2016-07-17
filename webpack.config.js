const resolve = require('path').resolve
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const env = process.env.NODE_ENV || 'development'

const config = {
  context: __dirname,
  devtool: env === 'development' ? 'cheap-module-eval-source-map' : 'source-map',
  entry: [
    'react-hot-loader/patch',
    './app/index'
  ],
  output: {
    path: resolve(__dirname, 'dist', 'static'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      react: resolve(__dirname, 'node_modules', 'react')
    },
    fallback: resolve(__dirname, 'node_modules')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"' + env + '"'
    }),
    new HtmlWebpackPlugin({
      append: true,
      template: resolve(__dirname, 'public', 'index.html')
    })
  ],
  resolveLoader: {
    fallback: resolve(__dirname, 'node_modules')
  },
  module: {
    loaders: [{
      test: /\.svg$/,
      loader: 'svg-inline'
    }, {
      test: /\.js$/,
      loader: 'babel?cacheDirectory',
      include: resolve(__dirname, 'app')
    }]
  },
  postcss: function (webpack) {
    return [
      require('postcss-import')({
        addDependencyTo: webpack,
        path: ['app/styles']
      }),
      require('postcss-cssnext')(),
      require('postcss-browser-reporter')(),
      require('postcss-reporter')()
    ]
  }
}

const baseCssLoader = 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'

if (env === 'development') {
  config.module.loaders.push({
    test: /\.css$/,
    loader: 'style!' + baseCssLoader
  })
} else {
  config.plugins.push(new ExtractTextPlugin('styles.css'))
  config.module.loaders.push({
    test: /\.css$/,
    loader: ExtractTextPlugin.extract(baseCssLoader)
  })
}

module.exports = config
