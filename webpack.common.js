const path = require('path');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
     app: './src/index.js',
   },
   plugins: [
     // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
     //new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
       title: 'Production',
       template: './dist/index.html'
     }),
   ],
   output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
 };