const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const config = {
    entry: ['./src/index.jsx'],
    mode: 'development',
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    devServer: {
      hot: true,
      compress: false,
      historyApiFallback: true,
      host: '0.0.0.0',
      port: '8080',
      client: {
        progress: true,
        overlay: {
          errors: true,
          warnings: false,
        },
      },
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index_bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(css|scss)$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sassOptions: {
                  includePaths: ['src/styles'],
                },
              },
            },
          ],
        },
        {
          test: /\.(jpg|jpeg|png|gif|mp3|svg|cur)$/,
          use: ['file-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          use: 'url-loader',
        },
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        PIXI: 'pixi.js',
      }),
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html',
      }),
    ],
  };

  if (argv.mode) {
    config.mode = argv.mode;
  }

  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  return config;
};
