var webpack = require('webpack');
var path = require('path');
var src = path.join(__dirname, 'src');

var config = {
    entry: path.join(src, '/app.js'),
    output: {
        path: path.join(src),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {presets: ['es2015']}
            },{
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            },{
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, {
                test: /\.html$/, // Only .html files
                loader: 'html' // Run html loader
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 4000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;