import {BuildOptions} from "./types/config";
import {Configuration as DevServerConfiguration} from 'webpack-dev-server';
export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    const {isDev, paths, port} = options

    return {
        port,
        open: true
    }
}