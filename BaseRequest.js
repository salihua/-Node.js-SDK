let Token = require('./Token');
const axios = require('axios');

module.exports = function (options) {
    return new Promise((resolve, reject) => {
        Token.getToken().then((res) => {
            options.headers = {}
            options.headers['X-Auth-Token'] = res['x-subject-token'];
            options.headers['Content-Type'] = 'application/json;charset=UTF-8'
            axios(options).then((res) => {
                resolve(res.data)
            })
        }, (err) => {
            reject(err)
        })
    })
}