const path = require('path')
const webpack = require('webpack')

module.exports = {
    rules: [
        {
            test: /\.js$/,
            exclude: [/node_modules/, /dist/],
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            ]
        }
    ],
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js',
            minChunks: 2
        })
    ],
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/assets'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    }
}