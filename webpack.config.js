// const path = require('path')
//
// module.exports = {
//    entry: path.join(__dirname, 'src/js', 'index_voting.js'), // Our frontend will be inside the src folder
//    output: {
//       path: path.join(__dirname, 'dist'),
//       filename: 'build.js' // The final file will be created in dist/build.js
//    },
//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 use: [ 'style-loader', 'css-loader' ]
//             },
//             {
//                 test: /\.json$/,
//                 use: [
//                     {
//                         loader: 'json-loader'
//                     }
//                 ]
//             },
//             {
//                 test: /\.js$/,
//                 exclude: /(node_modules|bower_components)/,
//                 use: [
//                     {
//                         loader: 'babel-loader'
//                     }
//                     ],
//                 query: {
//                     presets: ['es2015'],
//                     plugins: ['transform-runtime']
//                 }
//             }
//         ]
//     }
// }
const path = require('path');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/js', 'index_voting.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js'
    },
    // plugins: [
    //     // Copy our app's index.html to the build folder.
    //     new CopyWebpackPlugin([
    //         { from: './app/index.html', to: "index.html" }
    //     ])
    // ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    }
}