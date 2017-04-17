var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST = path.resolve(__dirname, "dist");
const SRC  = path.resolve(__dirname, "src");
const APP  = path.join(SRC, "app");

module.exports = {
    entry: {
        "js/vendor.bundle": [ "rxjs", "core-js", "zone.js" ],
        "js/main.bundle": "./src/app/main.ts"
    },
    output: {
        path: DIST,
        filename: '[name].js',
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
    },
    devServer: {
        publicPath: "/",
        contentBase: DIST,
        port: "4200"
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.join(SRC, "index.html")})
    ],
    devtool: 'source-map'
}