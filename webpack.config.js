const {resolve} = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: resolve(__dirname, 'src/vue-quarter-select.umd.min.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'vue-quarter-select.umd.min.js',
        library: 'vueQuarter'
    },
    plugins: [
        new UglifyJsPlugin({
            exclude: [/\.min\.js$/gi] // skip pre-minified libs
        })
    ]
}
