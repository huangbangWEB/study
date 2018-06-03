'use strict'
var Koa = require('koa')
var g = require('./wechat/g')
var config = require('./config')
var weixin = require('./weixin')

var app = new Koa();

app.use(g(config.wechat,weixin.reply))

// function* a(next){
//     yield function *(){
//         setTimeout(function () {
//         this.a=2;
//         }
//     ,1000)}
// }
// function b(){
//     console.log('b')
// }
// function c(){
//     console.log('c')
// }
// app.use(function* (next) {
//     this.a=1;
//     yield a.call(this)
//     console.log(this.a)
// })
app.listen(1234)
