const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackBar = require('webpackbar');
module.exports = {
    target: 'node',
    node: {
        __filename: false,
        __dirname: false,
    },
    externals: [nodeExternals()],
    entry: ['./src/index.ts'],
    devtool: 'source-map',
    output: {
        filename: '[name]-bundle.js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        libraryTarget: 'commonjs2',
    },
    stats: 'errors-only',
    optimization: {
        splitChunks: {
            automaticNameDelimiter: '_',
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'initial',
                    minChunks: 2,
                },
            },
        },
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['.js', '.ts'],
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                include: /src/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
        ],
    },
    plugins: [new WebpackBar()],
};
