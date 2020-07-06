/**
 * 设备命令API
 */
let baseInfo = require('./BaseInfo');
let baseUrl = require('./BaseUrl');
let BaseRequest = require('./BaseRequest')

function Commends() {

}
/**
 * 发送命令函数
 * @param {*} option 
 */
Commends.prototype.sendCommend = function (option) {
    let defaultOption = {
        url: `${baseUrl.product}/v5/iot/${baseInfo.projectId}/devices/${deviceid}/commands`,
        method: 'post',
        data: {
            "service_id": "b1224afb-e9f0-4916-8220-b6bab568e888",
            "command_name": "ON_OFF",
            "paras": {
                "value": "ON"
            }
        }
    }
    defaultOption.data = Object.assign({},defaultOption,option);
    return BaseRequest(defaultOption);
}

module.exports = new Commends();