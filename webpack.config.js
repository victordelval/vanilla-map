const path = require('path');
const config = require('./package.json');

const webpack = require('webpack');
require('dotenv').config();

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const PROD = process.env.NODE_ENV === 'production';

let plugins = [];

// PROD ? [
//     plugins.push(new webpack.optimize.UglifyJsPlugin({
//         compress: { warnings: false }
//     }))
// ] : '';

module.exports = {
    entry: path.resolve(__dirname, config.main),
    devtool: 'source-map',
    output: {
        library: process.env.NAME,
        libraryTarget: process.env.TARGET,
        path: __dirname,
        filename: (PROD) ? 'build/vanilla-map.min.js' : 'build/vanilla-map.js'
    },
    module: {
        // loaders: [
        //     { test: /\.es6?$/, exclude: /node_modules/, loader: 'babel-loader' }
        // ]
        rules: [
            // rules for modules (configure loaders, parser options, etc.)

            {
              test: /\.es6?$/,
              include: [
                path.resolve(__dirname, "src")
              ],
              exclude: [
                path.resolve(__dirname, "node_modules")
              ],

              loader: "babel-loader",
              // the loader which should be applied, it'll be resolved relative to the context
              // -loader suffix is no longer optional in webpack2 for clarity reasons
              // see webpack 1 upgrade guide

              options: {
                presets: ["es2015"]
              },
              // options for the loader
            }
        ]
    },
    plugins: plugins,

    optimization: {
        minimizer: [
          // we specify a custom UglifyJsPlugin here to get source maps in production
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            uglifyOptions: {
              compress: false,
              ecma: 6,
              mangle: true
            },
            sourceMap: true
          })
        ]
      },
};