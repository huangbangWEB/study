var htmlwp = require('html-webpack-plugin');

module.exports={
  entry:'./src/main.js',  //指定打包的入口文件
  
  output:{
  	path : __dirname+'/dist',  // 注意：webpack1.14.0 要求这个路径是一个绝对路径
  	filename:'build.js'
  },
  
  module:{
  	loaders:[
	  	{
	  		test:/\.css$/,
	  		loader:'style-loader!css-loader'
	  	},
	  	{
	  		test:/\.(png|jpg|gif|ttf)$/,
	  		loader:'url-loader?limit=10000'
	  	},
	  	{
        test: /\.js$/,  // 利用babel-loader将.js文件中的es6语法转成es5语法
        loader:'babel-loader',
        exclude:/node_modules/ //排除此文件夹
      },
      {
        test: /\.vue$/,  // 解析 .vue 组件页面文件
        loader:'vue-loader' //
      }
  	]
  },
  
	babel:{
	    presets:['es2015'],  // 配置将es6语法转换成es5语法
	    plugins:['transform-runtime']		//解决打包.vue文件不报错(不使用VUE文件开发则可删去)
	},
	
	plugins:[
	    new htmlwp({
	      title: '首页',  //生成的页面标题
	      filename: 'index.html', //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，才能实现自动刷新功能
	      template: 'index1.html' //根据index1.html这个模板来生成(这个文件请程序员自己生成)
	  })
	]
  
}