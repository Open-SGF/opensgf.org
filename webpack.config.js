const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

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
        publicPath: '/assets/',
        filename: process.env.NODE_ENV === 'production' ? '[name].[chunkhash].js' : '[name].js',

    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new WebpackManifestPlugin({
            basePath: '/assets/',
        }),
        new MiniCssExtractPlugin({
            filename: process.env.NODE_ENV === 'production' ? '[name].[contenthash].css' : '[name].css',
        }),
    ],
};
