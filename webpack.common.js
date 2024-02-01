const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    target: 'electron-renderer',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        esmodules: true
                                    }
                                }
                            ],
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: [ /\.s[ac]ss$/i, /\.css$/i ],
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images',
                        },
                    },
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build'),
    },
};
