var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST = path.resolve(__dirname, "dist");
const SRC  = path.resolve(__dirname, "src");
const APP  = path.join(SRC, "app");

module.exports = {
    entry: {
        "js/vendor.bundle": "./src/app/vendor.ts",
        "js/main.bundle": "./src/app/main.ts"
    },
    output: {
        path: DIST,
        filename: '[name].js',
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader', options: { 'silent': true } },
            { test: /\.css/, loader: 'style-loader!css-loader' },
            { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader' }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.html'],
    },
    devServer: {
        publicPath: "/",
        contentBase: DIST,
        port: "4200"
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.join(SRC, "index.html")}),
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, SRC),
        new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" })
    ],
    devtool: 'eval'
}