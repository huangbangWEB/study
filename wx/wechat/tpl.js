'use strict'

var ejs = require('ejs')
var heredoc = require('heredoc')

var tpl = heredoc(function () {/*
    <xml>
    <ToUserName><![CDATA[<%= toUserName %>]]></ToUserName>
    <FromUserName><![CDATA[<%= fromUserName %>]]></FromUserName>
    <CreateTime><%= createTime %></CreateTime>
    <MsgType><![CDATA[<%= content.type %>]]></MsgType>
    <% if (content.type === 'text') { %>
    <Content><![CDATA[<%= content %>]]></Content>
    <% } else if (content.type === 'image') { %>
    <Image>
    <MediaId><![CDATA[<%= content.mediaId %>]]></MediaId>
    </Image>
    <% } else if (content.type  === 'voice') { %>
    <MediaId><![CDATA[<%= content.mediaId %>]]></MediaId>
    <Format><![CDATA[Format]]></Format>
    <% } else if (content.type  === 'video') { %>
    <MediaId><![CDATA[media_id]]></MediaId>
    <ThumbMediaId><![CDATA[<%= content.mediaId %>]]></ThumbMediaId>
    <% } else if (content.type  === 'location') { %>
    <Location_X>23.134521</Location_X>
    <Location_Y>113.358803</Location_Y>
    <Scale>20</Scale>
    <Label><![CDATA[位置信息]]></Label>
    <% } else if (content.type  === 'link') { %>
    <Title><![CDATA[公众平台官网链接]]></Title>
    <Description><![CDATA[公众平台官网链接]]></Description>
    <Url><![CDATA[url]]></Url>
    <% } %>
    </xml>
*/})
//使用Ejs进行编译
var compiled = ejs.compile(tpl)

exports = module.exports = {
    compiled:compiled
}