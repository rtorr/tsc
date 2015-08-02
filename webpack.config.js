var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: "./src/client/index.js",
    output: {
        path: path.join(__dirname, './public/dist/js/'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: "handlebars-loader" }
        ]
    }
};