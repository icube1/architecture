import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from "html-webpack-plugin";
import { buildPlugins } from './config/build/bildPlugins';
import { buildLoaders } from './config/build/buildLoaders';
import { buildResolvers } from './config/build/buildResolvers';
import { buildWebpackConfig } from './config/build/buidWebpackConfig';
import { BuildPaths } from './config/build/types/config';

const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", 'index.ts'),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html")
}

const config: webpack.Configuration = buildWebpackConfig({
    mode: 'development',
    paths: paths,
    isDev: true
});

export default config;
