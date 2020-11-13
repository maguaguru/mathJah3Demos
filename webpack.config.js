const mode = process.env.NODE_ENV || 'development'
const groupsOptions = {chunks: "all", minSize:0, minChunks: 1, reuseExistingChunk: true, enforce: true}
const bodyParser = require('body-parser')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


const config = {
    mode: mode,
    devtool: mode === 'development' ? 'source-map': false,
    output: {
        filename: 'app/[name].[chunkhash].js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    resolve: {
        modules: [
            './src/app',
            'node_modules'
        ],
        extensions: ['*', '.js', '.jsx', '.json']
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: true,
            cacheGroups:{
                vendors: {test:/node_modules/, name: 'vendors', ...groupsOptions},
            }
        }
    },
    entry: {
        app: ['./src/app/index.js']
    },
    devServer: {
        openPage: '?launchId=dev00001',
        historyApiFallback: true,
        port: 9000,
        before: function(app) {
            app.use(bodyParser.json())
            app.use(bodyParser.urlencoded({ extended: true }))

            app.use((req, res, next) => {
                res.setHeader('Cache-Control', 'no-cache')
                res.setHeader('Access-Control-Allow-Origin', '*')

                next()
            })
        }
    },
    plugins: [ new CleanWebpackPlugin() ],
    performance: {
        maxEntrypointSize: 1024000,
        maxAssetSize: 1024000
    }
}

module.exports = () => {
    return {
        ...config,
        plugins: [
            ...config.plugins,
            new HtmlWebpackPlugin({
                template: 'public/index.ejs',
                filename: 'index.html',
                inject: false,
                minify: {
                    collapseWhitespace: true
                },
                links: [
                    {
                        href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i&display=swap',
                        rel: 'stylesheet'
                    }
                ]
            }),
            new HtmlWebpackPlugin({
                template: 'public/mathJax.ejs',
                title: 'MathJax Preview',
                filename: 'mathJax.html',
                inject: false,
                minify: {
                    collapseWhitespace: true
                }
            })
        ]
    }
}