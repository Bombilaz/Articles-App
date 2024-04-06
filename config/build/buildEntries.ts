import path from "path";

export const buildEntries = () => {
    return {
        appBuild: path.resolve(process.cwd(), 'src', 'index.ts')
    }
}