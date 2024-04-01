const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Импортируем плагин

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin(
            {template: path.resolve(process.cwd(), 'src', 'index.html')}
        )
    ],
    entry: path.resolve(process.cwd(), 'src', 'index.tsx'),
    module: {
        rules: [
            { test: /\.(html)$/, use: ['html-loader'] }, // Добавляем загрузчик для html
            {
                test: /\.tsx$/,
                exclude: /node_modules/, // не обрабатываем файлы из node_modules
                use: 'ts-loader'
            },
            {
                test: /\.jsx?$/, // обновляем регулярное выражение для поддержки jsx
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        clean: true,
    },
    devServer: {
        hot: true,
    }
}