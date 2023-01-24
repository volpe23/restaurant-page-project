const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
    entry: {
      main:  path.resolve(__dirname, 'src/index.js'), 
    },
    output: { 
        filename: '[name].js', 
        path: path.resolve(__dirname, 'dist'), 
    }, 
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant page',
            filename: 'index.html',
            template: 'src/template.html'
        })
    ]
};