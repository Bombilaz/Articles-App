import {buildWebpackConfig} from "./config/build";
import {BuildPaths} from "./config/build/types/config";
import path from "path";

const paths: BuildPaths = {
    entry: path.resolve(process.cwd(), 'src', 'index.tsx'),
    build: path.resolve(process.cwd(), 'dist'),
    html: path.resolve(process.cwd(), 'public', 'index.html'),
}

const mode = 'development';
const isDev = mode === 'development'
const PORT = 3000

const config = buildWebpackConfig({
    mode: 'development',
    paths,
    isDev,
    port: PORT
});

export default config;