import {buildWebpackConfig} from "./config/build";
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import path from "path";

const config = (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(process.cwd(), 'src', 'index.tsx'),
        build: path.resolve(process.cwd(), 'dist'),
        html: path.resolve(process.cwd(), 'public', 'index.html'),
    };

    const isDev = env.mode !== "production"

    return (
        buildWebpackConfig({
            mode: env.mode || 'development',
            port: env.port,
            paths,
            isDev,
        })
    );
};

export default config;