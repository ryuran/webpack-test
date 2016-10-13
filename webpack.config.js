var webpack = require("webpack");
module.exports = {
	entry: {
		app1: './src/app1.js',
		app2: './src/app2.js'
	},
	output: {
		path: './bin',
		filename: '[name].bundle.js'
	},
	plugins: [ new webpack.optimize.CommonsChunkPlugin('common.js') ]
};