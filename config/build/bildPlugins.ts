import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlugins({paths}: Partial<BuildOptions>): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
        template: paths.html
    }),

    new webpack.ProgressPlugin(),

    new MiniCssExtractPlugin(),
  ]
}