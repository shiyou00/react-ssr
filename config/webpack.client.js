const path = require("path");
const {merge} = require("webpack-merge");
const commonConfig = require("./webpack.common");

const clientConfig = {
  mode: "development",
  entry:"./src/client/index.js",
  output:{
    filename:"index.js",
    path:path.resolve(__dirname,"../public")
  },
  module:{
    rules:[
      {
        test:/\.css$/i, // 正则匹配到.css样式文件
        use:[
          'style-loader', // 把得到的CSS内容插入到HTML中
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ]
      }
    ]
  }
}

module.exports = merge(clientConfig,commonConfig);
