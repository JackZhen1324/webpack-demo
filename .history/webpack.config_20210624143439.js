module.exports = {
    entry: './src/index.js',


    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']

                
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: `url-loader`,
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    esModule:false
                }
            },
            {
                test: /\.html$/,
                loader: `html-loader`
            },
            {
                // handle other resouces
                exclude: /\.(html|js|css|less|jpg|gif)/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]'
                }
            }


        ]

    },

    Plugin: {
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })

    }

    


}