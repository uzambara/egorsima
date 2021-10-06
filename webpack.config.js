﻿const path = require('path');
const autoprefixer = require('autoprefixer');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const TerselPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

let isLocalMode = false;
let isDevMode = false;
let isProdMode = false;

// Plugins
const plugins = () => {
  const base = [];

  let api_host = '';
  if (isProdMode) api_host = "'https://api.salero.io'";
  if (isDevMode) api_host = "'http://164.90.202.88:7000'";
  if (isLocalMode) api_host = "'http://127.0.0.1:8000'";

  base.push(
    new webpack.DefinePlugin({
      APP_NAME: "'Salero'",
      API_HOST: api_host,
      AUTH_COOKIE_NAME: "'.salero_auth'",
      YM_ACCOUNT: "'72228922'",
      GA_ACCOUNT: "'GTM-PB269L2'",
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/index.html',
      minify: {
        collapseWhitespace: !isDevMode,
      },
    }),
  );

  if (!isDevMode) {
    base.push(
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['**/*', '!favicon.ico'],
      }),
    );
  }

  return base;
};

// Loaders
const jsLoaders = [
  {
    loader: 'babel-loader',
    options: {
      outputPath: './',
      presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react', '@babel/preset-typescript'],
      plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-syntax-dynamic-import'],
    },
  },
];

const cssLoaders = [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      modules: {
        mode: 'local',
        localIdentName: '[local]--[hash:base64:5]',
      },
    },
  },
];

const sassLoaders = [
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [autoprefixer],
      },
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sassOptions: {
        includePaths: [__dirname, 'src'],
      },
    },
  },
];

const imagesLoaders = [
  {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: './images/',
    },
  },
];

const fontsLoaders = [
  {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: './fonts/',
    },
  },
];

// Optimization
const optimization = () => {
  const config = {};

  if (!isDevMode) {
    config.minimizer = [new CssMinimizerPlugin(), new TerselPlugin()];
  } // if

  return config;
};

module.exports = (env, args) => {
  isProdMode = env.prod;
  isDevMode = env.dev;
  isLocalMode = env.local;

  return {
    mode: 'development',
    entry: {
      index: path.resolve(__dirname, 'src'),
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: `scripts/[name].bundle.js`,
      chunkFilename: 'scripts/[name].bundle.js',
      publicPath: '/',
    },
    plugins: plugins(),
    devServer: {
      historyApiFallback: true,
      compress: true,
      port: 8081,
      liveReload: true,
    },
    target: 'web',
    module: {
      rules: [
        {
          test: /\.js(x?)$/,
          exclude: /(node_modules)/,
          use: jsLoaders,
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            { loader: 'thread-loader' },
            {
              loader: 'ts-loader',
              options: {
                happyPackMode: true,
                transpileOnly: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: cssLoaders,
        },
        {
          test: /\.scss$/,
          use: [...cssLoaders, ...sassLoaders],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: imagesLoaders,
        },
        {
          test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: fontsLoaders,
        },
      ],
    },
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    optimization: optimization(),
  };
};
