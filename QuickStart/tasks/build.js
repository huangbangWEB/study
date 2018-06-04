// 用于删除和引用一些文件夹
require('shelljs/global')
const webpack = require('webpack')
const fs = require('fs')
//提供工具函数
const _ =require('lodash')
//找到运行webpack脚本的工作路径
const r = url =>resolve(process.cwd(),url)
//拿到webpack的配置文件
const webpackConf = require('./webpack.conf')
const config = require(r('./mina-config'))
//拿到需要部署的文件夹目录
const assertsPath = r('./mina')
// 删除已经编译过的目录
rm('-rf',assetsPath)
//新建目录
mkdir(assetsPath)

var renderConf = webpackConf
// 指定入口文件
renderConf.entry = () => _.reduce(config.json.pages,(en,i) => {
    en[i] = resolve(process.cwd(),'./',`${i}.mina`)
    return entry
})
renderConf.entry = entry()
renderConf.entry.app = config.app

//指定输出路径
renderConf.output = {
    path:r('./mina'),
    filename:'[name].js'
}
//把小程序配置的内容写入mina下面
fs.writeFileSync(r('./mina/app.json'),JSON.stringify(config.json),'utf8')
// 声明编译器，传入renderConf
var compiler = webpack(renderConf)
// 监听文件变化
compiler.watch({
    aggregateTimeour:300,
    poll:true
},(err,stats)=>{
    process.stdout.write(stats.toString({
        colors:true,
        modules:false,
        children:true,
        chunks:true,
        chunkModules:true
    }) + '\n\n')
})