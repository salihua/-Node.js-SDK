/**
 * 设备消息的处理
 */
let baseInfo = require('./BaseInfo');
let baseUrl = require('./BaseUrl');
let BaseRequest = require('./BaseRequest')

function Message() {

}
/**
 * 获取消息
 * @param {*} deviceid 
 */
Message.prototype.getMessage = function (deviceid) {
    let options = {
        'url': `${baseUrl.product}/v5/iot/${baseInfo.projectId}/devices/${deviceid}/messages`,
        'method': 'get'
    }
    return BaseRequest(options)
}

/**
 * 下发消息
 */
Message.prototype.lssueMessage = function (option) {
    let defaultOption = {
        'method': 'post',
        'url': `${baseUrl.product}/v5/iot/${baseInfo.projectId}/devices/${deviceid}/message`,
        'data': {
            "message_id": Math.floor(Math.random() * 10000000),
            "name": "messageName",
            "message": "HelloWorld",
            "topic": "messageDown"
        }

    }
    let options = Object.assign({}, defaultOption, option);
    return BaseRequest(options)
}

/**
 * 根据消息ID获取消息的详细信息
 * @param {*} option 
 */
Message.prototype.getDetailsMessage = function (option) {
    let options = {
        'method': 'get',
        'utl': `${baseUrl.product}/v5/iot/${baseInfo.projectId}/devices/${option.deviceid}/message/${option.messageId}`
    }
    return BaseRequest(options)
}
module.exports = new Message();