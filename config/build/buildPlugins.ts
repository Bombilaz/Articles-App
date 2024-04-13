import HtmlWebpackPlugin from "html-webpack-plugin";
import { WebpackPluginInstance, ProgressPlugin } from "webpack";
import { BuildPaths } from "./types/config";

export const buildPlugins = (paths: BuildPaths): WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new ProgressPlugin(),
    ]
}