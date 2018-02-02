var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    watch: false,
    entry: ['./src/core.ts', './index.ts'],
    output: {
        library: 'proteic',
        filename: 'dist/proteic.js',
    },
    devServer: {
        contentBase: path.join(__dirname, '.'),
        inline: true
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js', '.scss'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    // typeCheck: true,
                    failOnHint: true,
                    emitErrors: true,
                    configuration: require('./tslint.json')
                }
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
        ],
    },
}
