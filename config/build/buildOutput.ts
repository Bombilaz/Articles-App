import path from "path";

export const buildOutput = () => {
    return {
        filename: "[name].[contenthash].js",
        path: path.resolve(process.cwd(), 'dist'),
        clean: true,
    }
}