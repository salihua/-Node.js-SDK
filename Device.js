/**
 * 设备管理 
 */
let Token = require('./Token');
let baseInfo = require('./BaseInfo');
const axios = require('axios');
let baseUrl = require('./BaseUrl');
let BaseRequest = require('./BaseRequest');
let http = require("https");

function Device() {
    this.xAuthToken = '';
}
/**
 * 获取所有设备
 * @param {} option 
 */
Device.prototype.getAllDevice = function () {
    let defaultOption = {
        'method': 'get',
        'url': `${baseUrl.product}/v5/iot/${baseInfo.projectId}/devices`
    }
    return BaseRequest(defaultOption)
}
/**
 * 获取
 * @param {*} product_id 
 */
Device.prototype.getProductDevice = function (option) {
    option.url = `${baseUrl.product}/v5/iot/${baseInfo.projectId}/devices`
    let defaultOption = {
        'method': 'get',
        'url': `${baseUrl.product}/v5/iot/${baseInfo.projectId}/devices`,
        'params': {
            'product_id': option['product_id']
        }
    }
    return BaseRequest(defaultOption)
}

/**
 * 创建设备
 * @param {*} option 创建设备时的参数
 */
Device.prototype.createDevice = function (option) {
    let defaultOption = {
        'method': 'post',
        'url': `${baseUrl.product}/v5/iot/${baseInfo.projectId}/devices`,
        'data': {
            "node_id": Math.floor(Math.random()*1000000),
            "device_name": "testdevice",
            "product_id": baseInfo.productId,
            "auth_info": {
                "auth_type": "SECRET",
                "secure_access": true,
                "fingerprint": "dc0f1016f495157344ac5f1296335cff725ef22f1",
                "secret": "3b935a250c50dc2c6d481d048cefdc3c1",
                "timeout": 300
            },
            "description": "watermeter device"
        }
    }
    let data = this.createOptions(defaultOption.data, option);
    defaultOption.data = data;
    return BaseRequest(defaultOption)
}

/**
 * 根据设备ID查询设备
 * @param {*} deviceid 设备ID
 */
Device.prototype.queryDevice = function (deviceid) {
    let options = {
        'url': `${baseUrl.product}/v5/iot/${baseInfo.projectId}/devices/${deviceid}`,
        'method': 'get'
    }
    return BaseRequest(options)
}

/**
 * 修改设备
 * @param {*} option 
 */
Device.prototype.updateDevice = function (option) {
    let defaultOption = {
        'url': `${baseUrl.product}/v5/iot/${baseInfo.projectId}/devices/${deviceid}`,
        'method': 'put',
        
        'data': {
            "device_name": "dianadevice",
            "description": "watermeter device",
            "extension_info": {
                "aaa": "xxx",
                "bbb": 0
            },
            "auth_info": {
                "secure_access": true,
                "timeout": 300
            }
        }
    }
    return BaseRequest(this.createOptions(defaultOption, option))
}

/**
 * 删除设备
 */
Device.prototype.deleteDevice = function () {
    let options = {
        'url': `${baseUrl.product}/v5/iot/${baseInfo.projectId}/devices/${deviceid}`,
        'method': 'delete'
        
    }
    return BaseRequest(options)
}

Device.prototype.createOptions = function (defaultOption, option) {
    return Object.assign({}, defaultOption, option)
}

module.exports = new Device();