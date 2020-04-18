const path = require("path");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  output: {
    path: path.resolve("build"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "awesome-typescript-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    "prop-types": {
      root: "PropTypes",
      commonjs2: "prop-types",
      commonjs: "prop-types",
      amd: "prop-types",
    },
  },
};
