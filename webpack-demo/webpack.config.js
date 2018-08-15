const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const path = require("path");
const glob = require("glob");

const parts = require("./webpack.parts");

const PATHS = {
  app: path.join(__dirname, "src"),
  build: path.join(__dirname, "dist")
};

const commonConfig = merge([
  {
    output: {
      path: __dirname + "/dist",
      filename: "[name].[hash].js"
    }
  },
  {
    plugins: [
      new HtmlWebpackPlugin({
        title: "Webpack demo",
        template: "src/index.html"
      }),
      new webpack.HashedModuleIdsPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
  },
  parts.loadJavaScript({ include: PATHS.app })
]);

const productionConfig = merge([
  parts.clean(PATHS.build),
  {
    output: {
      chunkFilename: "[name].[chunkhash:4].js",
      filename: "[name].[chunkhash:4].js"
    }
  },
  parts.extractCSS({
    use: ["css-loader", parts.autoprefix()]
  }),
  parts.purifyCSS({
    paths: glob.sync(`${PATHS.app}/**/*.js`, { nodir: true })
  }),
  parts.loadImages({
    options: {
      limit: 15000,
      name: "[name].[hash:4].[ext]"
    }
  }),
  parts.generateSourceMaps({ type: "source-map" }),
  {
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /node_modules\/(.*)\.js/,
            name: "vendors",
            chunks: "all"
          }
        }
        // name: "vendor",
        // chunks: "all"
      },
      runtimeChunk: {
        name: "manifest"
      }
    }
  }
]);

const developmentConfig = merge([
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
    hotOnly: true
  }),
  parts.loadCSS(),
  parts.loadImages()
]);

module.exports = mode => {
  if (mode === "production") {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};
