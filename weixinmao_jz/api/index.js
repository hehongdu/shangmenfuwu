  const requestGet = require('../libs/axios.js').requestGet; // get 请求
const requestPost = require('../libs/axios.js').requestPost; // post 请求


// 封装api 全部写在这里面
const API = {
    getList:data => requestGet('/index/index/getList',data),

    // 服务商列表

    // 技师列表

    // 店铺列表

    // 服务列表

    
};

module.exports = {
    API: API
}

