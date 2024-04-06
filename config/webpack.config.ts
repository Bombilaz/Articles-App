import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from "webpack";
import {buildPlugins} from "./build/buildPlugins";
import {buildEntries} from "./build/buildEntries";
import {buildOutput} from "./build/buildOutput";
import {buildLoaders} from "./build/buildLoaders";
import {buildResolvers} from "./build/buildResolvers";

// let mode = 'development';
// if (process.env.NODE_ENV === 'production') {
//     mode = 'production';
// }

const config: webpack.Configuration = {
    mode: 'development',
    plugins: buildPlugins(),
    entry: buildEntries(),
    output: buildOutput(),
    module: {
        rules: buildLoaders(),
    },
    resolve: buildResolvers(),
}

export default config;