/**
 * 设备属性
 */
let baseInfo = require('./BaseInfo');
let baseUrl = require('./BaseUrl');
let BaseRequest = require('./BaseRequest')

function Properties() {

}
/**
 * 获取设备的属性
 * @param {*} deviceid 设备ID
 */
Properties.prototype.getProperties = function (deviceid) {
    let defaultOption = {
        url: `${baseUrl.product}/v5/iot/${baseInfo.projectId}/devices/${deviceid}/properties`,
        method: 'get'
    }
    return BaseRequest(defaultOption)
}

/**
 * 设置更新prop
 * @param {*} option {data:{},deviceid:""} 
 */
Properties.prototype.setProperties = function (option) {
    let defaultOption = {
        url: `${baseUrl.product}/v5/iot/${baseInfo.projectId}/devices/${option.deviceid}/properties`,
        method: 'put',
        data:option.data
    }
}

module.exports = new Properties();