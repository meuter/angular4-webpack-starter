var path = require("path");

module.exports = {
    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: "/dist/",
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }
        ]
    },
    resolve: {
        extensions: [ '.ts' ]
    },
}