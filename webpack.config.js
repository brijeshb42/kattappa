var libraryName = 'Kattappa';

var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ENV_DEV = 'development';
var ENV_PROD = 'production';
var ENV_TEST = 'test';

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var env = process.env.NODE_ENV || ENV_DEV;

var isDev = env === ENV_DEV;
var isProd = env === ENV_PROD;
var isTest = env === ENV_TEST;

console.log(env);

var pkg = require('./package.json');
var banner = [
  pkg.name,
  'Version - ' + pkg.version,
  'Author - ' + pkg.author
].join('\n');

var bannerPlugin = new webpack.BannerPlugin(banner);

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

var vendorPlugin = new webpack.optimize.CommonsChunkPlugin({
  names: ['vendor-base', 'vendor-react'],
  minChunks: Infinity,
  filename: '[name].js',
  children: true
 });

var hashJsonPlugin = function() {
  this.plugin("done", function(stats) {
    require("fs").writeFileSync(
      path.join(__dirname, "hash.json"),
      JSON.stringify(stats.toJson()["assetsByChunkName"]));
  });
};

function getPlugins(env) {
  var plugins = [definePlugin];
  if (env !== ENV_PROD) {
    plugins.push(commonsPlugin);
    plugins.push(vendorPlugin);
    plugins.push(new webpack.NoErrorsPlugin());
  } else {
    plugins.push(new ExtractTextPlugin(libraryName + '-style.css'));
    plugins.push(hashJsonPlugin);
    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      output: {comments: false},
      mangle: true,
    }));
    plugins.push(bannerPlugin);
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
  if (env === ENV_PROD) {
    entry = {};
    // entry[libraryName+'-style'] = ['./kattappa.scss'];
  } else  {
    entries.push('webpack-dev-server/client?http://localhost:8080/');
    entries.push('webpack/hot/only-dev-server');
  }
  entries.push('./index');
  entry[libraryName] = entries;
  entry.demo = ['./demo'];
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
      loader: ExtractTextPlugin.extract("css?sourceMap!sass?sourceMap"),
    });
    // loaders.push({
    //   test: require.resolve("kattappa"),
    //   loader: "imports?this=>window",
    // });
  } else {
    loaders.push({
      test: /(\.css|\.scss)$/,
      loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
    });
  }
  return loaders;
}


var config = {
  context: APP_DIR,
  debug: true,
  devtool: env === ENV_PROD  ? '' : 'cheap-module-eval-source-map',
  entry: getEntry(env),
  target: 'web',
  output: {
    path: BUILD_DIR,
    publicPath: '',
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
  }
};

if (env === ENV_PROD) {
  config.externals = [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    },
    {
      'medium-editor': {
        root: 'MediumEditor',
        commonjs2: 'medium-editor',
        commonjs: 'medium-editor',
        amd: 'medium-editor'
      }
    },
    {
      'immutable': {
        root: 'Immutable',
        commonjs2: 'immutable',
        commonjs: 'immutable',
        amd: 'immutable'
      }
    }
  ];
}

module.exports = config;
