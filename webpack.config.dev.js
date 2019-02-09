const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const HappyPack = require('happypack');

module.exports = {
	entry: [
		'webpack/hot/poll?1000',
		'./server/index'
	],
	mode: 'development',
	watch: true,
	target: 'node',
	externals: [nodeExternals({
		whitelist: ['webpack/hot/poll?1000']
	})],
	resolve: {
		extensions: ['.js', '.ts', '.tsx'],
		modules: [
			path.resolve(__dirname, 'node_modules'),
			path.resolve(__dirname, './src'),
		]
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(ts|tsx)$/,
				use: 'happypack/loader',
				include: [path.join(__dirname, '/../src'), path.join(__dirname, '/../test')],
				exclude: path.join(__dirname, 'node_modules')
			},
		]
	},
	plugins: [
		new HappyPack({
			loaders: [{
				id: 'tsx',
				threads: 4,
				loader: 'ts-loader',
				options: {
					happyPackMode: true
				}
			}]
		}),
		new StartServerPlugin('server.js'),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				BUILD_TARGET: JSON.stringify('server')
			}
		}),
	],
	output: {
		path: path.join(__dirname, '.build'),
		filename: 'server.js'
	}
};
