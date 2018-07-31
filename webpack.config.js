var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
	mode: 'development',
  entry: SRC_DIR + "/app/index.js",
  output: {
  	path: DIST_DIR + "/app",
  	filename: "bundle.js",
  	publicPath: "/app/"
  },
  module: {
  	rules: [
  		{
  			test: /\.js?/,
  			include: SRC_DIR,
  			loaders: "babel-loader",
  			query: {
  				presets: ["react", "env", "stage-2"]
  			}
  		},
      {
        test: /\.css$/,
        include: SRC_DIR,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        loaders: ['file-loader']
      }
  	]
  }
};

module.exports = config;