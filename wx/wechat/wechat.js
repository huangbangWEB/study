'use strict'

var prefix = 'https://api.weixin.qq.com/cgi-bin/'
var api = {
    accessToken:prefix + 'token?grant_type=client_credential'
}
var Promise = require('bluebird')
var request = Promise.promisify(require('request'))

function Wechat(opts){
    var that = this
    this.appID = opts.appID
    this.appSecret = opts.appSecret
    this.getAccessToken = opts.getAccessToken
    this.saveAccessToken = opts.saveAccessToken
    this.getAccessToken()
        .then(function (data) {
            new Buffer(data).toString()
            console.log( new Buffer(data).toString())
            try {
                data = JSON.parse(data)//data如果为非JSON字符串会报错
            }
            catch (e) {
                return that.uqdateAccessToken()
            }
            if (that.isValidAccessToken(data)) {
                Promise.resolve(data)
            }else{
                return that.uqdateAccessToken()
            }
        })
        // .then(function (data) {
        //     that.access_token = data.access_token
        //     that.expires_in = data.expires_in
        //     // console.log(that.expires_in)
        //     that.saveAccessToken(data)
        // })
}

Wechat.prototype.isValidAccessToken = function(data){
    if (!data || !data.access_token || !data.expires_in){
        return false
    }
    var access_token = data.access_token
    var expires_in = data.expires_in
    var now = (new Date().getTime())

    if (now<expires_in){
        return true
    }
    else{
        return false
    }
}

Wechat.prototype.uqdateAccessToken = function(){

    var appID = this.appID
    var appSecret = this.appSecret
    var url = api.accessToken + '&appid=' + appID + '&secret=' + appSecret
    return new Promise(function (resolve,reject) {
        request({url:url,json:true}).then(function (response) {
            var data = response.body
            var now = (new Date().getTime())
            var expires_in = now + (data.expires_in - 20 ) * 1000
            data.expires_in  = expires_in
            resolve(data)
        })
    })
}

module.exports = Wechat