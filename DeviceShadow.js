/**
 * 设备影子 我们获取的数据主要是设备影子的数据
 */
let baseInfo = require('./BaseInfo');
let baseUrl = require('./BaseUrl');
let BaseRequest = require('./BaseRequest')

function DeviceShadow() {

}

/**
 * 获取设备影子数据
 * @param {*} deviceid 
 */
DeviceShadow.prototype.getDeviceShadowData = function (deviceid) {
    let options = {
        url:`${baseUrl.product}/v5/iot/${baseInfo.projectId}/devices/${deviceid}/shadow`,
        method:'get'
    }
    return BaseRequest(options)
}

module.exports = new DeviceShadow();