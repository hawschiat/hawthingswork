'use strict';
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = {
    source: path.resolve(__dirname, 'src'),
    build: path.resolve(__dirname, 'dist')
};

var config = {
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/dist/',
        filename: '[name].js',
		chunkFilename: 'chunks/[name].js'
    },
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					chunks: "initial",
					minChunks: 2,
					maxInitialRequests: 5, // The default limit is too small to showcase the effect
				},
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
				}
			}
		}
	},
	resolve: {
		alias: {
		  'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
		},
		extensions: ['*', '.js', '.vue', '.json']
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.scss$/,
				use:[
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.js$/,
				use: 'babel-loader'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin('dist',{}),
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin(
			{filename: 'style.css'}
		)
	]
};

module.exports = (env, argv) => {
	if (argv.mode === 'production') {
		config.optimization = {
			splitChunks: {
				cacheGroups: {
					commons: {
						chunks: "initial",
						minChunks: 2,
						maxInitialRequests: 5, // The default limit is too small to showcase the effect
					},
					vendor: {
						test: /node_modules/,
						chunks: "initial",
						name: "vendor",
						priority: 10,
						enforce: true
					}
				}
			},
			minimizer: [
				new UglifyJsPlugin({
					cache: true,
					parallel: true,
					sourceMap: false // set to true if you want JS source maps
				}),
				new OptimizeCSSAssetsPlugin({})
			]
		}
	}
	
	return config;
};