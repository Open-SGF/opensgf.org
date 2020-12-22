const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/_bundle/main.js',
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist', 'assets'),
        filename: process.env.NODE_ENV === 'production' ? '[name].[contenthash].js' : '[name].js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: process.env.NODE_ENV === 'production' ? '[name].[contenthash].css' : '[name].css',
        }),
    ],
};
