const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, "examples/index.html"),
	filename: "./index.html",
});
module.exports = {
	entry: path.join(__dirname, "examples/index.js"),
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.(css|scss)$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
				loader: "url-loader",
				options: {
					limit: 1024,
				},
			},
		],
	},
	plugins: [htmlWebpackPlugin],
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
	},
	devServer: {
		port: 3012,
	},
};
