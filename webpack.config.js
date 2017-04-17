var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

DIST = path.resolve(__dirname, "dist");
SRC  = path.resolve(__dirname, "src");

module.exports = {
    entry: {
        "js/main": path.join(SRC, "main.ts")
    },
    output: {
        path: DIST,
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            }
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
        new HtmlWebpackPlugin({
            template: path.join(SRC, "index.html")
        })
    ]
}