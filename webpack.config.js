const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "./src/main.js"],
  output: {
    path: path.resolve("public"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve("public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
