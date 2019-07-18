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

var loaderOptionsPlugin = new webpack.LoaderOptionsPlugin({
  debug: true
})

var hashJsonPlugin = function() {
  this.plugin("done", function(stats) {
    require("fs").writeFileSync(
      path.join(__dirname, "hash.json"),
      JSON.stringify(stats.toJson()["assetsByChunkName"]));
  });
};

function getPlugins(env) {
  var plugins = [definePlugin, loaderOptionsPlugin];
  if (env == ENV_PROD) {
    plugins.push(new ExtractTextPlugin(libraryName + '-style.css'));
    plugins.push(hashJsonPlugin);
    plugins.push(bannerPlugin);
  }
  return plugins;
}


function getEntry(env) {
  var entry = {
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

function getRules(env) {
  var rules = [];
  rules.push({
    test: /\.jsx?$/,
    include: APP_DIR,
    use: 'babel-loader',
    exclude: /node_modules/
  });

  rules.push({
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: 'file-loader'
  });

  if (env === ENV_PROD ) {
    rules.push({
      test: /(\.css|\.scss)$/,
      use: ExtractTextPlugin.extract(['css-loader?sourceMap', 'sass-loader?sourceMap']),
    });
    // rules.push({
    //   test: require.resolve("kattappa"),
    //   use: "imports?this=>window",
    // });
  } else {
    rules.push({
      test: /(\.css|\.scss)$/,
      use: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
    });
  }
  return rules;
}


var config = {
  context: APP_DIR,
  devtool: env === ENV_PROD  ? '' : 'cheap-module-eval-source-map',
  entry: getEntry(env),
  target: 'web',
  output: {
    path: BUILD_DIR,
    publicPath: '',
    filename: '[name].js',
    sourceMapFilename: '[file].map',
    library: [libraryName],
    libraryTarget: 'umd'
  },
  plugins: getPlugins(env),
  module: {
    rules: getRules(env),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      APP_DIR,
      "node_modules"
    ]
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
    }
  ];
}

// if (env !== ENV_PROD) {
//   config.optimization = {
//     splitChunks: {
//       cacheGroups: {
//         commons: {
//           name: 'common',
//           chunks: 'initial',
//           minChunks: 3
//         },
//         vendors: {
//           test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
//           name: 'vendor',
//           chunks: 'all',
//         }
//       }
//     },
//     noEmitOnErrors: true
//   }
// }

module.exports = config;
