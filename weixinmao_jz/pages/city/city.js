var t = getApp(), e = require("../../resource/js/dateHelper.js"), a = 0;

const $api = require('../../api/index.js').API;
Page({
    data: {
        isGettingLocation: !0
    },
    onLoad:async function(e) {
        var a = this, n = wx.getStorageSync("location") || {};
        // a.getLocation();
        let res = await $api.getCitys()
        var e = res.response.result, i = a.groupBy(e, function(t) {
            return [ t.letter ];
        });
        a.setData({
            cityList: e,
            location: n,
            citys: i
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getLocation: function() {
        var a = this;
        const params = {
            key:'6551635c34a44f7879ea17354b167f48',
        }
        // 调取高德地图定位
        wx.request({
            method: 'get',
            url: `https://restapi.amap.com/v3/ip`,
            data: params,
            success:res=>{
                var i = res.data.city,o = res.data
                a.setData({
                    area: i,
                    location: o,
                    isGettingLocation: !1
                });
                wx.setStorageSync('location', o)
            }
        })
        return false;
    },
    setCurrentCity: function(t) {
        console.log(t)
        var e = this, a = parseInt(t.currentTarget.dataset.id), n = t.currentTarget.dataset.name || "", i = wx.getStorageSync("area") || {}, o = getCurrentPages(), r = o[o.length - 2];
        if (a <= 0) return e.setData({
            isShowOpenSetting: !0
        }), !1;
        i.cityId = a, i.cityName = n, r && (r.route.indexOf("rankingList") >= 0 || r.route.indexOf("address/map") >= 0 || r.route.indexOf("makeFriends/sameCity") >= 0 || r.route.indexOf("makeFriends/vipSpecialArea") >= 0) ? (r.route.indexOf("address/map") >= 0 ? r.setData({
            city: i.cityName
        }) : r.setData({
            area: i
        }), wx.navigateBack()) : (wx.setStorageSync("area", i), wx.reLaunch({
            url: "/weixinmao_jz/pages/index/index"
        }));
    },
    showOpenSetting: function() {
        this.setData({
            isShowOpenSetting: !1
        }), wx.openSetting({});
    },
    hideOpenSetting: function() {
        var e = this;
        e.setData({
            isShowOpenSetting: !1
        })
    },
    groupBy: function(t, e) {
        var a = {};
        return t.forEach(function(t) {
            var n = JSON.stringify(e(t));
            a[n] = a[n] || [], a[n].push(t);
        }), Object.keys(a).map(function(t) {
            return a[t];
        });
    },
    bindLettersEvent: function(t) {
        var e = this, n = t.currentTarget.dataset.letter, i = "letter" + n;
        e.setData({
            toView: i,
            currentLetter: n,
            showLetter: !0
        }), a && clearTimeout(a), a = setTimeout(function() {
            e.setData({
                showLetter: !1
            });
        }, 500);
    }
});