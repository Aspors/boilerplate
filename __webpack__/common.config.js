const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const PUBLIC_PATH = path.resolve(__dirname, '..', 'public');
const BUILD_PATH = path.resolve(__dirname, '..', 'build');

const plugins = [
  new FileManagerPlugin({
    events: {
      onStart: {
        delete: [BUILD_PATH],
      },
    },
  }),
  new HtmlWebpackPlugin({
    template: path.join(PUBLIC_PATH, 'index.html'),
    filename: 'index.html',
  }),
  new FaviconsWebpackPlugin({
    logo: path.resolve(PUBLIC_PATH, 'favicon.svg'),
    prefix: '/favicons/',
    outputPath: path.resolve(BUILD_PATH, 'favicons'),
    mode: 'webapp',
    inject: (htmlPlugin) =>
      path.basename(htmlPlugin.options.filename) === 'index.html',
    favicons: {
      icons: {
        appleIcon: false,
        appleStartup: false,
        android: false,
        favicons: true,
        coast: false,
        firefox: false,
        windows: false,
        yandex: false,
      },
    },
    cache: false,
  }),
  new webpack.HotModuleReplacementPlugin(),
];

if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

const devServer = {
  historyApiFallback: true,
  open: true,
  compress: true,
  allowedHosts: 'all',
  hot: true,
  client: {
    overlay: {
      errors: true,
      warnings: true,
    },
    progress: true,
  },

  port: 3000,
  devMiddleware: {
    writeToDisk: false,
  },
  static: [
    {
      directory: path.join(BUILD_PATH, 'favicons'),
    },
  ],
};

module.exports = {
  devServer,
  plugins,
  entry: path.join(__dirname, '..', 'src', 'index.tsx'),
  output: {
    path: BUILD_PATH,
    publicPath: '/',
  },
  performance: {
    hints: false,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      { test: /\.(html)$/, use: ['html-loader'] },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
                namedExport: false,
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', {}]],
              },
            },
          },
        ],
      },
      {
        test: /\.(s[ac])ss$/i,
        use: ['sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico|mp4)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[hash][ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext]',
        },
      },
    ],
  },
};
