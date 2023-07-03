import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import path from "path";
import { buildPlugins } from "./bildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";


export function buildWebpackConfig({paths, mode}: BuildOptions): Configuration  {

  return {
    mode: mode,
    entry: paths.entry,
    output: {
        filename: "[name].[contenthash].js",
        path: paths.build,
        clean: true
    },
    devtool: "inline-source-map",
    plugins: buildPlugins({paths}),
    module: {
        rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  }
}