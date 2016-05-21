var libraryName = 'Kattappa';

var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ENV_DEV = 'development';
var ENV_PROD = 'production';
var ENV_TEST = 'test';

var BUILD_DIR = path.resolve(__dirname, 'dist', 'static');
var APP_DIR = path.resolve(__dirname, 'src');

var env = process.env.NODE_ENV || ENV_DEV;

var isDev = env === ENV_DEV;
var isProd = env === ENV_PROD;
var isTest = env === ENV_TEST;

console.log(env);

var definePlugin = new webpack.DefinePlugin({
  __DEV__: env === ENV_DEV,
  __PROD__: env === ENV_PROD,
  __TEST__: env === ENV_TEST,
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false')),
  'process.env.NODE_ENV': '"' +env+ '"'
});
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'common',
  minChunks: 3,
});
// var vendorBase = new webpack.optimize.CommonsChunkPlugin("vendor-base", "vendor-base.js", Infinity);
var vendorPlugin = new webpack.optimize.CommonsChunkPlugin({
  names: ['vendor-react', 'vendor-base'],
  minChunks: Infinity,
  filename: '[name].js'
});

// var htmlWebpackPlugin = new HtmlWebpackPlugin({
//   title: 'Flockr',
// });

var hashJsonPlugin = function() {
  this.plugin("done", function(stats) {
    require("fs").writeFileSync(
      path.join(__dirname, "hash.json"),
      JSON.stringify(stats.toJson()["assetsByChunkName"]));
  });
};

function getPlugins(env) {
  var plugins = [definePlugin, vendorPlugin, commonsPlugin]; //, htmlWebpackPlugin];
  if (env !== ENV_PROD) {
    // plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new webpack.NoErrorsPlugin());
  } else {
    plugins.push(new ExtractTextPlugin('style.css'));
    plugins.push(hashJsonPlugin);
    plugins.push(new webpack.optimize.DedupePlugin());
    // plugins.push(new webpack.optimize.UglifyJsPlugin({
    //   output: {comments: false},
    //   mangle: true,
    // }));
  }
  return plugins;
}


function getEntry(env) {
  var entry = {
    'vendor-base': ['es6-promise', 'isomorphic-fetch', 'medium-editor'],
    'vendor-react': [
      'react',
      'react-dom',
    ]
  };
  var entries = [];
  if (env !== ENV_PROD) {
    entries.push('webpack-dev-server/client?http://localhost:8080/');
    entries.push('webpack/hot/only-dev-server');
    entry.script = ['./script'];
  }
  entries.push('./index');
  entry[libraryName] = entries;
  return entry;
}

function getLoaders(env) {
  var loaders = [];
  loaders.push({
    test: /\.jsx?$/,
    include: APP_DIR,
    loader: env !== ENV_PROD ? 'react-hot!babel' : 'babel',
    exclude: /node_modules/
  });

  loaders.push({
    test: /\.(jpe?g|png|gif|svg)$/i,
    loader: 'file'
  });

  if (env === ENV_PROD ) {
    loaders.push({
      test: /(\.css|\.scss)$/,
      loader: ExtractTextPlugin.extract("css?sourceMap!sass?sourceMap")
    });
  } else {
    loaders.push({
      test: /(\.css|\.scss)$/,
      loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
    });
  }
  return loaders;
}


module.exports = {
  context: APP_DIR,
  debug: true,
  devtool: env === ENV_PROD  ? 'source-map' : 'cheap-module-eval-source-map',
  entry: getEntry(env),
  target: 'web',
  output: {
    path: BUILD_DIR,
    publicPath: '/static/',
    filename: '[name].js',
    sourceMapFile: '[file].map',
    library: [libraryName],
    libraryTarget: 'umd'
  },
  plugins: getPlugins(env),
  module: {
    loaders: getLoaders(env),
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: APP_DIR,
    modulesDirectories: ['node_modules'],
  },
  devServer: {
    historyApiFallback: true
  },
  // externals: [
  //   {
  //     react: {
  //       root: 'React',
  //       commonjs2: 'react',
  //       commonjs: 'react',
  //       amd: 'react'
  //     }
  //   },
  //   {
  //     'react-dom': {
  //       root: 'ReactDOM',
  //       commonjs2: 'react-dom',
  //       commonjs: 'react-dom',
  //       amd: 'react-dom'
  //     }
  //   },
  //   {
  //     'medium-editor': {
  //       root: 'MediumEditor',
  //       commonjs2: 'medium-editor',
  //       commonjs: 'medium-editor',
  //       amd: 'medium-editor'
  //     }
  //   },
  //   {
  //     'isomorphic-fetch': {
  //       root: 'fetch',
  //       commonjs2: 'isomorphic-fetch',
  //       commonjs: 'isomorphic-fetch',
  //       amd: 'isomorphic-fetch'
  //     }
  //   }
  // ]
};
