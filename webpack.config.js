var path = require('path');
var webpack = require('webpack');

module.exports = {
    modulesDirectories: ["web_loaders", "web_modules", "node_loaders", "node_modules"],
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