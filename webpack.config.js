module.exports = {
    module: {
        rules: [
            {
            test: /\.js$/,
            
            use: {
                loader: "babel-loader"
                }
            },
            {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
            }
        ]
    }
}