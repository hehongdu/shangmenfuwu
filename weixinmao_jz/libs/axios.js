let baseUrl = 'http://xx.com'


function requestGet(url, data) {
    return new Promise(function(resolve, reject) {
        let header = {
            'content-type': 'application/json',
        };
        wx.request({
            url: baseUrl + url,
            method: 'GET',
            data: data,
            header: header,
            success(res) {
                resolve(res.data);
            },
            fail(err) {
                //请求失败
                reject(err)
            }
        })
    })
}


function requestPost(url, data) {
    return new Promise(function(resolve, reject) {
        wx.request({
            url: baseUrl + url,
            method: 'GET',
            data: data,
            transformRequest: [function (data) {
                let ret = '';
                for (let it in data) {
                    if (typeof data[it] === 'object') {
                        data[it] = JSON.stringify(data[it]);
                    }
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                }
                ret = ret.substring(0, ret.length - 1);
                return ret;
            }],
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            success(res) {
                resolve(res.data);
            },
            fail(err) {
                //请求失败
                reject(err)
            }
        })
    })
}

module.exports = {
    requestGet:requestGet,
    requestPost:requestPost
}