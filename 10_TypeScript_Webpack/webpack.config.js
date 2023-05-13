const path = require('path');

module.exports = {
     mode: 'development', // 또는 'production' 또는 'none'
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist',
    },
    devtool: 'inline-source-map',
    devServer: {
        devMiddleware: { publicPath: "dist" },
        static: {
          directory: path.resolve(__dirname, 'dist')
        },
      },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};