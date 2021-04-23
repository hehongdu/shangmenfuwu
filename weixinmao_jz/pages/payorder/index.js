function a(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}

require("../../resource/js/htmlToWxml.js");

var t, e = require("../../resource/js/images.js"), i = getApp();

Page(
    a({
    data: (t = {
        images: {},
        title: "",
        address: "",
        lat: 0,
        lng: 0,
        num: 1,
        date: "",
        datetime: "",
        currentDate: new Date().getTime(),
        currentDateStr:'2019-02-05 03:05'
    }, 
    a(t, "title", ""), a(t, "isuser", !0), t),
    //监听输入
    watchPassWord: function(event) {
        var that = this;
        if (event.detail.value <= 0) {
        that.setData({
            num: 1,
        })
        } else {
        that.setData({
            num: event.detail.value,
        })
        }
    },
    // 加数量
    addBind() {
        var num = this.data.num;
        if (num >= 5) {
            return wx.showToast({
                title: '最多购买5个',
                icon: 'none',
                mask: true,
            })
        }
        this.setData({
            num: parseInt(num) + 1,
        })
    },
    // 减数量
    sutBind() {
        var num = this.data.num;
        if (num <= 1) {
            return;
        }
        this.setData({
            num: parseInt(num) - 1,
        })
    },

    toPayOrder() {
        wx.showToast({
          title: '预约成功',
        })
    },

    onLoad: function(a) {
        wx.setNavigationBarTitle({
            title: wx.getStorageSync("companyinfo").name
        });
        var t = !0;
        wx.getStorageSync("companyid") > 0 && (t = !1);
        var e = this;
        if (this.data.id > 0) n = this.data.id; else {
            var n = a.id;
            this.data.id = a.id;
        }
        var o = wx.getStorageSync("userInfo");
    },
    toMessage: function(a) {
        a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/weixinmao_zp/pages/message/index"
        });
    },
    toNotemessage: function(a) {
        var t = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/weixinmao_jz/pages/notemessage/index?id=" + t
        });
    },
    bindGetUserInfo: function(a) {
        var t = this;
        i.util.getUserInfo(function(a) {
            t.data.isuser = !0, t.setData({
                userinfo: a,
                isuser: t.data.isuser
            });
        }, a.detail);
    },
    goMap: function(a) {
        var t = this;
        console.log(t.data.lat), console.log(t.data.lng), wx.openLocation({
            latitude: t.data.lat,
            longitude: t.data.lng,
            scale: 28,
            name: t.data.title,
            address: t.data.address
        });
    },
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), this.onLoad();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    bindTimeChange: function(e) {
        this.data.datetime = e.detail.value, console.log(e.detail.value), this.setData({
            datetime: e.detail.value
        });
    },
}, "onShareAppMessage", function() {
    return console.log(this.data.id), {
        title: this.data.title + "-" + wx.getStorageSync("companyinfo").name,
        path: "/weixinmao_zp/pages/workerdetail/index?id=" + this.data.id
    };
}
));