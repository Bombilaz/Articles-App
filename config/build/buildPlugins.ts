import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

export const buildPlugins = (): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin(
            {template: path.resolve(process.cwd(), 'public', 'index.html')}
        ),
        new webpack.ProgressPlugin(),
    ]
}