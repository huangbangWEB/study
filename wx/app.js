'use strict'
var Koa = require('koa')
var path = require('path')
var sha1 = require('sha1')
var wechat = require('./wechat/g')
var util = require('./libs/util')
var wechat_file = path.join(__dirname,'/config/wechat.txt')

var config = {
    wechat:{
        appID:'wx16ce6316bbfe3b4c',
        appSecret:'94b3010229d1a7c906a36f3e6f204d6f',
        token:'huangbang',
        getAccessToken:function () {
            return util.readFileAsync(wechat_file)
        },
        saveAccessToken:function (data) {
            data = JSON.stringify(data)
            return util.writeFileAsync(wechat_file,data)
        }
    }
}

var app = new Koa();
app.use(function *(next) {
    console.log(this.query)
})
app.use(wechat(config.wechat))

app.listen(1234)
