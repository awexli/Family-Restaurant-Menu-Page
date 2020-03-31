const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
  },
  plugins: [new MiniCssExtractPlugin({filename: "[name].[contentHash].css"})],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          "css-loader", 
          "sass-loader"
        ]
      }
    ]
  }
});