import path from 'path'
import webpack from 'webpack'

const ROOT = __dirname
const SRC = path.resolve(`${ROOT}/src`)
const DEST = path.resolve(`${ROOT}/dest`)
const JS_SRC = path.resolve(`${ROOT}/src/javascripts`)

const module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: { loader: 'babel-loader' }
    }
  ]
}

const resolve = { extensions: [ '.js' ], alias: { '~': JS_SRC } }
const devtool = 'inline-source-map'
const devServer = { contentBase: DEST }
const entry = { 'javascripts/bundle': ['babel-polyfill', `${SRC}/javascripts/main`] }
const output = {
  path: DEST,
  publicPath: '/',
  filename: '[name].js'
}

const plugins = [ new webpack.ProvidePlugin({ 'React': 'react', '_': 'lodash', 'ImmutablePropTypes': 'react-immutable-proptypes' }) ]

export default { module, resolve, devtool, devServer, entry, output, plugins }
