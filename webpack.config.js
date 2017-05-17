'use strict';

// Modules
var webpack = require('webpack');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 * default is unset, i.e. when using 'npm serve'
 */
var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'watch:test';
var isProd = ENV === 'dist';

module.exports = function makeWebpackConfig () {
  /**
   * Config
   * Reference: http://webpack.github.io/docs/configuration.html
   * This is the object where all configuration gets set
   */
  var config = {};

  /**
   * Entry
   * Reference: http://webpack.github.io/docs/configuration.html#entry
   * Should be an empty object if it's generating a test build
   * Karma will set this when it's a test build
   */
  config.entry = isTest ? {} : {
    app: './src/app.js'
  };

  /**
   * Output
   * Reference: http://webpack.github.io/docs/configuration.html#output
   * Should be an empty object if it's generating a test build
   * Karma will handle setting it up for you when it's a test build
   */
  config.output = isTest ? {} : {
    // Absolute output directory
    path: isProd ? __dirname + './dist/assets' : __dirname + '/',

    // Output path from the view of the page
    // Uses webpack-dev-server in development
    publicPath: isProd ? '/assets/' : 'http://localhost:8080/assets/',

    // Filename for entry points
    // Only adds hash in build mode
    filename: isProd ? '[name].[hash].js' : '[name].bundle.js',

    // Filename for non-entry points
    // Only adds hash in build mode
    // chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js'
  };

  

  /**
   * Devtool
   * Reference: http://webpack.github.io/docs/configuration.html#devtool
   * Type of sourcemap to use per build type
   */
  if (isTest) {
    config.devtool = 'inline-source-map';
  } else if (isProd) {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'eval-source-map';
  }

  /**
   * Loaders
   * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
   * List: http://webpack.github.io/docs/list-of-loaders.html
   * This handles most of the magic responsible for converting modules
   */

  // Initialize module
  config.module = {
    preLoaders: [],
    loaders: [{
      // NG CACHE LOADER
      // Reference: https://github.com/teux/ng-cache-loader
      // Angular Template loader for webpack
      test: /\.html$/,
      loader: "ng-cache?prefix=[dir]/[dir]"
    }]
  };

  // ISTANBUL LOADER
  // https://github.com/deepsweet/istanbul-instrumenter-loader
  // Instrument JS files with istanbul-lib-instrument for subsequent code coverage reporting
  // Skips node_modules, files that end with .spec.js and tests.webpack.js
  if (isTest) {
    config.module.preLoaders.push({
      test: /\.js$/,
      exclude: [
        /node_modules/,
        /\.spec\.js$/,
        /tests.webpack.js/
      ],
      loader: 'istanbul-instrumenter'
    })
  }

  /**
   * Plugins
   * Reference: http://webpack.github.io/docs/configuration.html#plugins
   * List: http://webpack.github.io/docs/list-of-plugins.html
   */
  config.plugins = [];

  // Skip rendering index.html in test mode
  if (!isTest) {

  }

  // Add build specific plugins
  // if (isProd) {
  //   config.plugins.push(
  //     // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
  //     // Only emit files when there are no errors
  //     new webpack.NoErrorsPlugin(),

  //     // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
  //     // Dedupe modules in the output
  //     new webpack.optimize.DedupePlugin(),

  //     // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
  //     // Minify all javascript, switch loaders to minimizing mode
  //     new webpack.optimize.UglifyJsPlugin(),

  //     // Copy assets from the public folder
  //     // Reference: https://github.com/kevlened/copy-webpack-plugin
  //     new CopyWebpackPlugin([{
  //       from: __dirname + '/src/public'
  //     }])
  //   )
  // }

  /**
   * Dev server configuration
   * Reference: http://webpack.github.io/docs/configuration.html#devserver
   * Reference: http://webpack.github.io/docs/webpack-dev-server.html
   */
  config.devServer = {
    contentBase: './src',
    stats: 'minimal'
  };

  return config;
}();
