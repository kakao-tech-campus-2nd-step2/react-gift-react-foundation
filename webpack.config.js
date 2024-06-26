const path = require("path");
// 없으면 CORS 뜸
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./src/index.tsx"),
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            ["@babel/preset-react", {"runtime": "automatic"}],
                            "@babel/preset-typescript"
                        ],
                        plugins: [
                            "@babel/plugin-transform-react-jsx"
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext][query]',
                },
            }
        ],
    },
    resolve: {
        extensions: [ ".ts", ".js", ".jsx", ".tsx"],
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    devServer: {
        historyApiFallback: true,
        port: 3000,
        hot: true,
        static: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
    ]
};