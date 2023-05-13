const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
    mode: "development",
    output: {
        publicPath: "/",
    },
    entry: "./src/index.jsx",
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif|ttf|m4v)$/i,
                exclude: /node_modules/,
                type: "asset/resource",
            },
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
        new HotModuleReplacementPlugin(),
    ],
    devtool: "inline-source-map",
    devServer: {
        static: path.join(__dirname, "dist"),
        historyApiFallback: true,
        port: 4000,
        open: true,
    },
};
