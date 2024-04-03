import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from "webpack"; // Импортируем плагин

// let mode = 'development';
// if (process.env.NODE_ENV === 'production') {
//     mode = 'production';
// }

const config: webpack.Configuration = {
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
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(process.cwd(), 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/, // не обрабатываем файлы из node_modules
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    // devServer: {
    //     hot: true,
    // }
}

export default config;