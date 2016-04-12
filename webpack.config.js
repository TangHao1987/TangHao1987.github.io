var webpack = require("webpack");
var path = require("path");

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}

module.exports = {
    entry: {
        app: getEntrySources([
            './js/App.js'
        ])
    },
    target: "web",
    devtool: 'cheap-module-eval-source-map',
    output: {
        // path: path.join(__dirname, "dist"),
        publicPath: 'http://localhost:8080/',
        filename: 'public/[name].js'
    },
    devServer: {
        stats: 'errors-only',
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json'],
    },
    module: {
        loaders: [
            { test: /\.scss/, exclude: /node_modules/, loaders: ['style', 'css', 'sass']},
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            
            { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url-loader?limit=10000',
            },
            {   
                test: /\.jsx?$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/, 
                query: {   
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }      
            }
        ]
    }
};