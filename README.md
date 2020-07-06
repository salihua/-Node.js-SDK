# -Node.js-SDK
个人根据项目需求封装的华为云物联网API的SDK(个人开发并不是官网的)
使用方式:
1 使用npm install 安装依赖包 这里使用了axios的第三方HTTP请求包
2 按照自己的需求引入对应的SDK文件
3 所有SDK文件的开发都是使用构造函数的方式编写的如果有新的需求只需在prototype上挂载函数还有所有的异步请求使用的是promise构建的
4 因为Node.js 的请求头大小的限制问题,这里我对HTTP请求头进行了硬编码 要执行node --max-http-header-size=81000 token.js 这里我强制将请求头设置为8MB
