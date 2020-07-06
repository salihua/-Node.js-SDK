/**
 * 产品管理
 */
const baseUrl = require('./BaseUrl');
const HWToken = require('./Token');
const axios = require('axios');
let BaseRequest = require('./BaseRequest');
function Products() {

}
/**
 * 查询产品列表 因为Token获取的是异步的所以采取的是Promise的模式
 * 代码在过去Token时比较冗余(暂时没有啥办法很好的解决异步问题)
 * @param {*} option 传入product_id或者其他参数
 */
Products.prototype.getAllProducts = function (option) {
    let options = {
        "method": 'get',
        "url":`${baseUrl.product}/v5/iot/${option.project_id}/products`
    }
    return BaseRequest(options)
}

/**
 * 创建产品
 * @param {*} option 
 */
Products.prototype.createProduct = function(option){
    let defaultOption = {
        "method": 'post',
        "headers": {
            "Content-Type": "application/json;charset=UTF-8"
        },
        "url":`${baseUrl.product}/v5/iot/${option.project_id}/products`,
        data:{
            name:'HW_Product',
            rotocol_type:'MQTT',
            device_type:'Test'
        }
    }

}
module.exports = new Products();