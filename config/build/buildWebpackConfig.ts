import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildPlugins, buildLoaders, buildResolvers} from "./";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
       const { mode, paths, isDev } = options;

       return {
            mode,
            devtool: 'inline-source-map',
            entry: {
                appBuild: paths.entry
            },
            output: {
                filename: "[name].[hash].js",
                path: paths.build,
                clean: true,
            },
            plugins: buildPlugins(paths),
            module: {
                 rules: buildLoaders(),
            },
            resolve: buildResolvers(),
            devServer: buildDevServer(options),
       }
}