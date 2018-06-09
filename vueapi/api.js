const http = require('http');
const Koa = require('koa');
const app = new Koa();

const  getnewlist = require('./api/getnewlist');

app.use(async ctx => {
   console.log('asdf')
})

// http.createServer(function (req, res) {
    // res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});

    // res.end(JSON.stringify(getnewlist));
// }).listen(10000, '127.0.0.1');
app.listen(10000);
console.log('Server running at http://127.0.0.1:10000/');