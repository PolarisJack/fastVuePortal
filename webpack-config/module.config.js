/**
 * Created by Jack on 2018/3/28.
 * 模块babel解析配置
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	rules : [
		{
            test: /\.vue$/,
            loader: 'vue-loader',
            exclude: /node_modules/
        },
		{
			test: /\.js$/,
		    exclude : /node_modules/,
		    loader : 'babel-loader',
		    query : {
		    	presets : [
		          	["es2015", 'stage-3']
		        ],
		        plugins: [
		        	'transform-runtime'
		        ]
		    }
		},
		{
	      	//将小于8192byte的图片转成base64码
	      	test: /\.(png|jpg|gif|jpeg)$/,
	      	loader : 'url-loader?limit=8192&name=images/[hash].[ext]',
	    },
	    {
	      	test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
	      	loader : 'url-loader?name=fonts/[name].[ext]',
	    },
	    {
	      	test: /.(css|scss)$/,
	      	use : ExtractTextPlugin.extract({
	        	fallback : ["style-loader"],
	        	use : [
	          		'css-loader',
	          		// "postcss-loader",
	          		"sass-loader"
	        	],
	        	publicPath : "/"
	      	})
	    }
	]
}
