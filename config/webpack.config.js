const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack"); // Импортируем плагин

// let mode = 'development';
// if (process.env.NODE_ENV === 'production') {
//     mode = 'production';
// }

module.exports = {
    mode: 'development',
    // devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin(
            {template: path.resolve(process.cwd(), 'public', 'index.html')}
        ),
        new webpack.ProgressPlugin(),
    ],
    entry: {
        appBuild: path.resolve(process.cwd(), 'src', 'index.ts')
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /node_modules/, // не обрабатываем файлы из node_modules
                use: 'ts-loader'
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(process.cwd(), 'dist'),
        clean: true,
    },
    // devServer: {
    //     hot: true,
    // }
}