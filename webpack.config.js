// let webpack.config.js know where the application is
// let the file know where the output is
// basically, it needs to know > entry -> output
// https://webpack.js.org/concepts/
// toda vez que mudar o webpack, tem q rodar o comando no terminal denovo

const path = require("path");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    devtool: "eval-cheap-module-source-map",
    devServer: {
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true
    }
};

// loader -> lets you customize the behavior of webpack when it loads a file
// use -> permite um array of loaders

