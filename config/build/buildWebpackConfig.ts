import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildPlugins, buildLoaders, buildResolvers} from "./";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
       const {mode, paths} = options;

       return {
            mode,
            entry: {
                appBuild: paths.entry
            },
            output: {
                filename: "[name].[contenthash].js",
                path: paths.build,
                clean: true,
            },
            plugins: buildPlugins(paths),
            module: {
                 rules: buildLoaders(),
            },
            resolve: buildResolvers()
       }
}