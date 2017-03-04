var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js'
	},
	
	module: {
		rules: [
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({ 
					use: ['css-loader', 'sass-loader'],
					fallback: 'style-loader'
				})
      },
			
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	
	plugins: [
		new ExtractTextPlugin('style.css')
	]
};

if ( process.env.NODE_ENV === 'production' ) {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin()
	);
}
