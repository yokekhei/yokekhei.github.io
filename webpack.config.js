const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/portfolio.main.ts',
    output: {
        filename: './portfolio.bundle.js',
        path: path.resolve(__dirname, 'js')
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader'
            }
        ]
    }
};