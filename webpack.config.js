const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve( __dirname, 'dist', 'js' ),
        publicPath: '/js/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.jpg' , '.svg']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(?:gif|jpg|png|svg)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(?:js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["@babel/preset-env", {
                                targets: "defaults"
                            }],
                    
                            ["@babel/preset-react", {
                                runtime: "automatic",
                                importSource: "react"
                            }]
                        ]
                    }
                }
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join( __dirname, 'dist' )
        },
        port: 9000,
        historyApiFallback: {
            rewrites: [
                { from: /^\/$/, to: '/index.html' }
            ]
        },
        client: {
            overlay: false
        }
        // devMiddleware: {
        //     writeToDisk: true
        // }
    },
    plugins: [
        new CopyPlugin({
          patterns: [
            { from: "./src/assets/media", to: "../media" },
           ],
        }),
      ],
};
