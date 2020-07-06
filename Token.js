process.binding('http_parser').HTTPParser = require('http-parser-js').HTTPParser
let http = require("https");
let fs = require('fs');
let path = require('path');
let BaseInfo = require('./BaseInfo');
/**
 * 获取Token值返回Promise值
 * @param {*} option  参数列表
 */
function HWToken() {
    //设置默认请求头
    let headers = {
        "method": "POST",
        "hostname": "iam.cn-north-4.myhuaweicloud.com",
        "port": null,
        "path": "/v3/auth/tokens",
        "headers": {
            "content-type": "application/json",
        },
        methods: ['password'],
        username: '',
        password: '',
        domain: '',
        projectName: 'cn-north-4'
    }
    //进行数据更新覆盖
    this.options = Object.assign({}, headers,BaseInfo);
    //构成body数据
    this.data = {
        auth:
        {
            identity:
            {
                methods: this.options.methods,
                password:
                {
                    user:
                    {
                        domain: { name: this.options.domain },
                        name: this.options.username,
                        password: this.options.password
                    }
                }
            },
            scope: { project: { name: this.options.projectName } }
        }
    }
    //缓存Token的文件名 默认和
    this.filename = 'token.txt'
}

/**
 * 获取Token 如果缓存中有Token值则返回Token值 如果没有的话发起请求获取
 */
HWToken.prototype.getToken = function () {
    let that = this;
    let promise = new Promise((resolve, reject) => {
        //读取缓存
        that.readToken().then((res) => {
            try {
                resolve(JSON.parse(res))
            } catch (error) {
                resolve({})
            }
        }).catch(() => {
            let req = http.request(that.options, function (res) {
                var chunks = [];
                res.on("data", function (chunk) {
                    chunks.push(chunk);
                });
                res.on("end", function () {
                    let body = Buffer.concat(chunks);
                    let header = res.headers;
                    let item = {
                        "x-subject-token":header['x-subject-token'],
                        "token":body.toString()
                    }
                    //对数据进行缓存
                    that.writeToken(JSON.stringify(item));
                    resolve(item)
                });
            });
            req.on('error', (error) => {
                reject(error)
            })
            req.write(JSON.stringify(this.data));
            req.end();
        })
    })
    return promise;
}

/**
 * 对Token进行缓存 将获取的Token写入文件中
 * @param {*} XSubjectToken 获取的Token
 */
HWToken.prototype.writeToken = function (XSubjectToken) {
    fs.writeFile(this.filename, XSubjectToken, 'utf-8', (err) => {
        if (err) {
            throw err;
        }
    })
}
/**
 * 从文件中读取Token
 */
HWToken.prototype.readToken = function () {
    let that = this;
    let promise = new Promise((resolve1, reject1) => {
        that.isFileExist().then(() => {
            fs.readFile(that.filename, 'utf-8', (err, data) => {
                if (err) {
                    reject1(err)
                }
                if (data && (data.length<=0)) {
                    resolve1(data)
                } else {
                    reject1()
                }
            })
        })
    })
    return promise;
}

/**
 * 判断缓存中的Token是否有效
 */
HWToken.prototype.isCacheToken = function () {

}

/**
 * 判断文件是否存在
 */
HWToken.prototype.isFileExist = function () {
    let that = this;
    // 检查文件是否存在于当前目录中。
    return new Promise((resolve, reject) => {
        fs.access(this.filename, fs.constants.F_OK, (err) => {
            if (err) {
                that.writeToken("")
            }
            resolve();
        });
    })
}
module.exports = new HWToken();