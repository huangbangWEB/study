'use strict'

var sha1 = require('sha1')
var Wechat = require('./wechat')
var getRawBody = require('raw-body')
var util = require('./util')
var weixin = require('../weixin')


module.exports = function (opts,handler) {
    //access_token值的更新和保持
    var wechat = new Wechat(opts)
    return function* (next) {
        var that = this
        var token = opts.token
        var timestamp = this.query.timestamp
        var nonce = this.query.nonce
        var signature = this.query.signature
        var echostr = this.query.echostr
        var str = [token,timestamp,nonce].sort().join('')
        var sha = sha1(str)
        //验证是否是微信发过来的验证请求
        if(that.method == 'GET'){
            if (sha === signature){
                that.body = echostr + ''
            }else{
                that.body = 'wrong'
            }
        }else if(this.method == 'POST'){
            if(sha !== signature){
                that.body = 'wrong'
                return false
            }
            // 将获取的request对象转换成XML格式
            var data = yield getRawBody(this.req,{
                length:this.length,
                limit:'1mb',
                encoding:this.charset
            })
            var content = yield util.parseXMLAsync(data)
            var message = util.formatMessage(content.xml)
            that.weixin = message
            console.log(message)

            yield handler.call(that,next)

            wechat.reply.call(that)

            return
        }
        if (sha === signature){
            that.body = echostr + ''
        }else{
            that.body = 'wrong'
        }
    }
}