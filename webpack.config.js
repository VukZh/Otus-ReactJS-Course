const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

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
    ],
    devServer: {
      open: true,
      historyApiFallback: true,
    },
  }
}