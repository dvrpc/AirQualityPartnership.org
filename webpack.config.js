const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const hashLength = 5;

module.exports = {
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({ BASE_URL: JSON.stringify("/") }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inlineSource: ".[css|js]$"
    }),
    new HtmlWebpackInlineSourcePlugin(),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin([{ from: "static" }])
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
