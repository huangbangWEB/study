'use strict'

var config = require('./config')
var Wechat = require('./wechat/wechat')
var wechatApi = new Wechat(config.wechat)

exports.reply = function* (next) {
    var message = this.weixin
    if (message.MsgType === 'event'){
        if (message.Event === 'subscribe'){
            if (message.EventKey) {
                console.log('扫二维码进来：' + message.EventKey + ' ' + message.ticket)
            }
            this.body = '哈哈，你订阅找个号\r\n' + '消息ID：' + message.MsgId
        }
        else if (message.Event === 'unsubscribe'){
            console.log('无情取关')
            this.body = ''
        }
        else if (message.Event === 'LOCATION'){
            this.body = '你上报的位置是：' + message.Latitude +'/'+ message.Longitube + '-' +message.Precision
        }
        else if (message.Event === 'CLICK'){
            this.body = '你点击了菜单：' + message.EventKey
        }
        else if (message.Event === 'SCAN'){
            console.log( '关注后扫二维码：' + message.EventKey + ' ' +message.Ticket )
            this.body = '看到你扫了一下哦'
        }
        else if (message.Event === 'VIEW'){
            this.body = '你点击了菜单中的链接 : ' + message.EventKey
        }
    }else if(message.MsgType === 'text'){
        var content = message.Content
        var reply = '额，你说的 '+message.Content+ ' 太复杂了'
        if (content === '1'){
            reply = '黄豪就是个SB'
        }else{
            var data = yield wechatApi.uploadMaterial('image',__dirname + '/2.jpg')
            console.log(data)
            reply = {
                type:data.type,
                mediaId:data.media_id
            }
        }
        this.body = reply

    }

    yield next
}