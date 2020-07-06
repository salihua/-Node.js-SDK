/**
 * Timer 定时函数 用于定时当超出时间的话便将Token.txt中的值清空
 * 注意Timer只能被实例化加载一次
 */
const fs = require('fs');

function Timer(){
    this.time =21600000  //设置Token默认过期时间为6个小时
    this.timer = null;    //设置定时器
    this.filename = 'token.txt'  //文件默认个Timer放置在同一文件夹
}
Timer.prototype.start = function(){
    if(!this.timer){
       this.timer = setInterval(()=>{
           this.clearToken();
       },this.time)
    }
}
Timer.prototype.clearToken = function(){
   fs.writeFile(this.filename,"","utf-8",(err)=>{
       if(err){
           throw err;
       }
   })
}
module.exports = new Timer();