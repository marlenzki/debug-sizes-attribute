const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: "production",
  entry: {
    background: path.resolve(__dirname, "..", "src", "scripts/background.ts"),
    content: path.resolve(__dirname, "..", "src", "scripts/content.ts"),
    popup: path.resolve(__dirname, "..", "src", "scripts/popup.ts"),
  },
  output: {
    path: path.join(__dirname, "../dist/scripts"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: ".", to: "..", context: "public" }],
    }),
  ],
};
