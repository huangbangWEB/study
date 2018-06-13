const http = require('http')
const Koa = require('koa')
const route = require('koa-route')
const cors = require('koa2-cors')//运行跨域
const url = require('url')
const app = new Koa()

const getnewlist = require('./api/getnewlist')
app.use(cors())

app.use(route.get('/api/getnewslist',async (ctx)=>{
    ctx.body = getnewlist;
}))

const getcommets = require('./api/getcomments')
app.use(route.get('/api/getcomments/:id',async (ctx)=>{
    var id = url.parse(ctx.url,true).pathname.split('/').pop()
    ctx.body = getcommets;
}))

app.use(route.get('/api/getinfo/:id',async (ctx)=>{
    var id = url.parse(ctx.url,true).pathname.split('/').pop()
    ctx.body = {
        status: 0,
        info: {
            id,
            title:id+'季度',
            click: id,
            add_time: '2015-04-16T03:50:28.000Z',
            content:'1季度1季度1季度1季度1季度1季度1季度'
        }
    }

}))

app.listen(9000);
console.log('Server running at http://127.0.0.1:10000/');