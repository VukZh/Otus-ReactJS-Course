const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {
  const isProd = env.production;
  const isDev = env.development;

  return {
    mode: isProd ? 'production' : isDev && 'development',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    entry: path.resolve(__dirname, './src/index.tsx'),
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ]
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: 'public/index.html',
        publicPath: '/',
      }),
      new MiniCssExtractPlugin({
        filename: 'style-[hash:8].css',
      }),
    ],
    devServer: {
      open: true,
      historyApiFallback: true,
    },
  }
}