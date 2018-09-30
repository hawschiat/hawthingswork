'use strict';
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract(
				{
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.js$/,
				use: 'babel-loader'
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new ExtractTextPlugin(
			{filename: 'style.css'}
		),
		new HtmlwebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		})
	]
};