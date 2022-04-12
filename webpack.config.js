module.exports = {
    
    entry: ['./camcontrol\frontend\src\index.js']
    ,
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
    }
}