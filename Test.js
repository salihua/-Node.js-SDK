let HWToken = require('./Token.js');
let Timer = require('./Timer');
let Product = require('./Products');
let device = require('./Device');
let message = require('./Message');
let baseInfo = require('./BaseInfo')
let DeviceShadow = require('./DeviceShadow')

let option = {
    methods: ['password'],
    username: 'hw34506969',
    password: '19981031LIHUACC?',
    domain: 'hw34506969',
}

//Timer.start();
/*
HWToken.readToken().then((res)=>{
    console.log(res);
}).then((error)=>{
    console.log(error);
})
*/

/*
HWToken.getToken().then((res)=>{
   console.log(res);
}).catch((err)=>{
    console.log(err)
})
*/

/*
HWToken.isFileExist().then((res) => {
    console.log("文件存在,决议成功过");
}, (err) => {
    console.log("文件不存在,决议失败");
})
*/

/*
Product.getAllProducts({'project_id':'087c301e2b0025292f4ec001de5285d2'}).then((res)=>{
   console.log(res);
},(err)=>{
    console.log(err);
})
*/
/*
device.getAllDevice().then((res)=>{
      console.log(res);
},(err)=>{
    console.log(err);
})
*/

/*
device.getProductDevice({'product_id': baseInfo.productId}).then((res)=>{
    console.log(res);
},(err)=>{
    console.log(err);
})
*/

/*
let deviceId = "5ee8d6da9aa06f08889accc4_GetWay_001"
device.queryDevice(deviceId).then((res)=>{
    console.log(res);
},(err)=>{
    console.log(err);
})
*/

/** 
 * 华为云存在问题
let item = {
    'node_id': 'getway003',
    'device_name': '物联网数据采集网关003',
}
device.createDevice(item).then((res) => {
    console.log(res);
}, (err) => {
   console.log(err);
});
*/

/*
message.getMessage('5ee8d6da9aa06f08889accc4_GetWay_001').then((res)=>{
    console.log(res);
},(err)=>{
    console.log(err);
})
*/

/*
DeviceShadow.getDeviceShadowData('5ee8d6da9aa06f08889accc4_GetWay_001').then((res)=>{
   console.log(res.shadow[0].reported);
},(err)=>{
   console.log(err);
})
*/