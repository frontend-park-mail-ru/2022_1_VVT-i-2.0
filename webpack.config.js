const path = require('path');

module.exports = {
    mode: "production",
    entry: "./public/index.js",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.pcss$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            singleton: true,
                        },
                    },
                    'postcss-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader',
                    options: {},
                },
            },
            // {
            //     test: /\.(img|jpeg|jpg|png)$/,
            //     loader: 'file-loader?name=img/[name].[ext]',
            // },
            // {
            //     test: /\.(ico)$/,
            //     loader: 'file-loader?name=favicon.ico',
            // },
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: __dirname + "/src/public/index.html",
    //         inject: 'body'
    //     }),
    // ],
    devServer: {
        historyApiFallback: true,
        port: 3000,
        open: true,
    }
};
