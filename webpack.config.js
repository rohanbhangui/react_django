
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');



module.exports = {
    
    entry: {
      app: './camcontrol/frontend/src/index.js',
      app2: './camcontrol/frontend/src/indexIns.js'
      //app2: './'
    },
    output: {
      path: path.resolve(__dirname, 'camcontrol/frontend/static/frontend'),
      filename: '[name].js',
      clean: true
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader'
              ]
            },
            {
              test: /\.js$/,
              
              use: [
                'babel-loader'
              ]
            },
          ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'camcontrol/frontend/templates/frontend/index.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
          filename: 'instructions.html',
          template: 'camcontrol/frontend/templates/frontend/instructions.html',
          chunks: ['app2']
      })
    ]
    
    /*,
    plugins: [
      extractPlugin,
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'camcontrol/fronted/templates/frontend/index.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'isntructions.html',
        template: 'camcontrol/fronted/templates/frontend/instructions.html',
        chunks : 
      })
    
    ]*/
}