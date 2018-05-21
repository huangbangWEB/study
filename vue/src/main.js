// 1.0 获取dom对象
var v1 = document.querySelector('#v1');
var v2 = document.querySelector('#v2');
var bt = document.querySelector('#bt');
var res = document.querySelector('#res');

require('../statics/css/site.css');// es5语法

//import '../statics/css/site.css';

// 调用add方法
// var add = require('./calc.js');  // es5语法
//import addObj from './calc.js';  // es6语法
bt.onclick=function(){

	// 2.0 获取calc.js中的add方法并且调用计算结果
	var v1value = parseFloat(v1.value);
	var v2value = parseFloat(v2.value);

	// 调用add方法
	var add = require('./calc.js');
	res.value = add(v1value,v2value);
}
