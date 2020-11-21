const path = require("path");
const nodeExternals = require("webpack-node-externals");
const {merge} = require("webpack-merge");
const commonConfig = require("./webpack.common");

const serverConfig = {
  target:"node", //由于输出代码的运行环境是node，源码中依赖的node原生模块没必要打包进去；为了不把nodejs内置模块打包进输出文件中，例如： fs net模块等；
  mode: "development",
  entry:"./src/server/index.js",
  output:{
    filename:"bundle.js",
    path:path.resolve(__dirname,"../build")
  },
  externals:[nodeExternals()], //为了不把node_modules目录下的第三方模块打包进输出文件中,因为nodejs默认会去node_modules目录下去寻找和使用第三方模块。
};

module.exports = merge(serverConfig,commonConfig);
