const path = require('path');
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
          use: ['ts-loader'],
        },
      ]
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
    },
  }
}