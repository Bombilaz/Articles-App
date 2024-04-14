import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildPlugins, buildLoaders, buildResolvers} from "./";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
       const { mode, paths, isDev} = options;

       return {
            mode,
            devtool: isDev ? 'inline-source-map' : undefined,
            entry: {
                appBuild: paths.entry
            },
            output: {
                filename: "[name].[fullhash].js",
                path: paths.build,
                clean: true,
            },
            plugins: buildPlugins(paths),
            module: {
                 rules: buildLoaders(options),
            },
            resolve: buildResolvers(),
            devServer: isDev ? buildDevServer(options) : undefined,
       }
}