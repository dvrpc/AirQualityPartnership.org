const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const hashLength = 5;

module.exports = {
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({ BASE_URL: JSON.stringify("/") }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inlineSource: '.css$'
    }),
    new HtmlWebpackInlineSourcePlugin(),
    new ScriptExtHtmlWebpackPlugin({
      defer: ["defer"]
    }),
    new MiniCssExtractPlugin({
      filename: `style.[contenthash:${hashLength}].css`
    }),
    new CopyWebpackPlugin([{ from: "static" }]),
    new CleanWebpackPlugin([`dist/*.${"?".repeat(hashLength)}.*`])
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          },
          { loader: "postcss-loader", options: { sourceMap: true } }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        ]
      }
    ]
  }
};
