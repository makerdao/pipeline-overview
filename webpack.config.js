// Webpack configuration file
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var resolve = require("path").resolve;

module.exports = {
	entry: "./src/main.js",
	output: {
		path: resolve("./dist"),
		filename: "[name].bundle.js",
		chunkFilename: "[hash].js",
		publicPath: "dist/"
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: "babel",
			query: {
				presets: ["es2015"]
			}
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap")
		}, {
			test: /\.less$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!less-loader?sourceMap")
		}, {
			test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
			loader: "file-loader",
			query: {
				publicPath: "./"
		  }
		}]
	},
	plugins: [
        new ExtractTextPlugin("[name].css"),
				new CopyWebpackPlugin([
            { from: 'src/maker_black.svg', to: 'maker_black.svg' }
				])
    ],
	devtool: "#source-map",
	node: {
	  fs: "empty"
	}
}
