var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'source-map',
    watch: false,
    entry: ['./src/core.ts', './index.ts'],
    output: {
        library: 'proteic',
        libraryTarget: 'umd',
        filename: 'dist/proteic.js',
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js', '.scss'],
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' },
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap : true
        })

    ]
}
