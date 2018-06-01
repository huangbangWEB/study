'use strict'

var sha1 = require('sha1')
var Wechat = require('./wechat')
var getRawBody = require('raw-body')


module.exports = function (opts) {
    var wechat = new Wechat(opts)
    return function* (next) {
        var token = opts.token
        var timestamp = this.query.timestamp
        var nonce = this.query.nonce
        var signature = this.query.signature
        var echostr = this.query.echostr
        var str = [token,timestamp,nonce].sort().join('')
        var sha = sha1(str)
        //验证是否是微信发过来的验证请求
        if(this.method == 'GET'){
            if (sha === signature){
                this.body = echostr + ''
            }else{
                this.body = 'wrong'
            }
        }else if(this.method === 'POST'){
            if(sha !== signature){
                this.body = 'wrong'
                return false
            }
            var data = yield  getRawBody(this.req,{
                length:this.length,
                limit:'1mb',
                encoding:this.charset
            })
            console.log(data.toString())
        }
        if (sha === signature){
            this.body = echostr + ''
        }else{
            this.body = 'wrong'
        }
    }
}