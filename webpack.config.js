const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineChunkHtmlPlugin = require("react-dev-utils/InlineChunkHtmlPlugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const OfflinePlugin = require("offline-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  devtool: false,
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      publicPath: "/",
      filename: "[file].map",
    }),
    new webpack.DefinePlugin({ BASE_URL: JSON.stringify("/") }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/\.(css|js)$/]),
    new MiniCssExtractPlugin({
      filename: "/[name].css",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "static" }, { from: "partials", to: "partials" }],
    }),
    new OfflinePlugin({
      responseStrategy: "network-first",
      publicPath: "/",
      excludes: [
        "**/.*",
        "**/*.map",
        "**/*.config",
        "bin/**",
        "**/*.aspx",
        "**/*.asax",
      ],
      safeToUseOptionalCaches: true,
      caches: {
        main: ["main.js", "index.html"],
        additional: [":rest:"],
      },
      ServiceWorker: {
        events: true,
        publicPath: "/sw.js",
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          { loader: "postcss-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
};
