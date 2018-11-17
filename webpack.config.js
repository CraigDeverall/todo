const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/main.ts'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: '[name].js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: __dirname + '/dist/',
        compress: true,
        port: 8080
    },
    resolve: {
        extensions: ['.ts', '.js', '.css', '.scss'],
        alias: {}
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(ts)$/,
                exclude: /node_modules/,
                use: 'tslint-loader'
            },
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'raw-loader'},
                    {loader: 'sass-loader', options: {sourceMap: true} }
                ]
            }
        ]
    }
};
