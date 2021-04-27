require("../../resource/js/htmlToWxml.js"), require("../../resource/js/images.js");

var e = getApp();

Page({
    data: {
        id: 0,
        ordertype: 1
    },
    onLoad: function(t) {
        var a = this;
        if (wx.setNavigationBarTitle({
            title: "我的订单"
        }), a.data.id > 0) a.data.id; else {
            t.id;
            a.data.id = t.id;
        }
        var n = wx.getStorageSync("userInfo");
        console.log(n), n.sessionid ? a.InitPage() : e.util.getUserInfo(function() {
            a.InitPage();
        });
    },
    onShow: function(e) {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
              selected: 2
            })
        }
    },
    InitPage: function() {
        var t = this, a = wx.getStorageSync("userInfo"), n = t.data.ordertype;
        e.util.request({
            url: "entry/wxapp/myorder",
            data: {
                ordertype: n,
                sessionid: a.sessionid,
                uid: a.memberInfo.uid
            },
            success: function(e) {
                e.data.message.errno || (e.data.data.intro.maincolor || (e.data.data.intro.maincolor = "#09ba07"), 
                wx.setNavigationBarColor({
                    frontColor: "#ffffff",
                    backgroundColor: e.data.data.intro.maincolor,
                    animation: {
                        duration: 400,
                        timingFunc: "easeIn"
                    }
                }), t.setData({
                    list: e.data.data.list,
                    ordertype: n,
                    intro: e.data.data.intro,
                    isshow: !1
                }));
            }
        });
    },
    onReady: function() {},
    tabClick: function(t) {
        var a = this;
        this.checkuser({
            doServices: function() {
                var n = t.currentTarget.id, o = wx.getStorageSync("userInfo");
                e.util.request({
                    url: "entry/wxapp/myorder",
                    data: {
                        ordertype: n,
                        sessionid: o.sessionid,
                        uid: o.memberInfo.uid
                    },
                    success: function(e) {
                        e.data.message.errno || a.setData({
                            list: e.data.data.list,
                            ordertype: n
                        });
                    }
                });
            }
        });
    },
    delOrder: function(t) {
        var a = this;
        this.checkuser({
            doServices: function() {
                var n = t.currentTarget.dataset.id, o = wx.getStorageSync("userInfo");
                wx.showModal({
                    title: "订单取消",
                    content: "确认取消订单？",
                    success: function(t) {
                        t.confirm && e.util.request({
                            url: "entry/wxapp/delOrder",
                            data: {
                                id: n,
                                sessionid: o.sessionid,
                                uid: o.memberInfo.uid
                            },
                            success: function(e) {
                                console.log(e), a.onLoad();
                            },
                            fail: function(e) {
                                console.log(e);
                            }
                        });
                    }
                });
            }
        });
    },
    RepayOrder: function(t) {
        var a = this;
        this.checkuser({
            doServices: function() {
                var n = t.currentTarget.dataset.id, o = wx.getStorageSync("userInfo");
                wx.showModal({
                    title: "订单支付",
                    content: "是否确认订单？",
                    success: function(t) {
                        t.confirm && e.util.request({
                            url: "entry/wxapp/repay",
                            data: {
                                id: n,
                                sessionid: o.sessionid,
                                uid: o.memberInfo.uid
                            },
                            success: function(e) {
                                e.data && e.data.data && wx.requestPayment({
                                    timeStamp: e.data.data.timeStamp,
                                    nonceStr: e.data.data.nonceStr,
                                    package: e.data.data.package,
                                    signType: "MD5",
                                    paySign: e.data.data.paySign,
                                    success: function(e) {
                                        a.onLoad();
                                    },
                                    fail: function(e) {}
                                });
                            },
                            fail: function(e) {
                                console.log(e);
                            }
                        });
                    }
                });
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    checkuser: function(t) {
        var a = this, t = t, n = wx.getStorageSync("userInfo");
        return console.log(n), n ? n.memberInfo.uid ? void e.util.request({
            url: "entry/wxapp/checkuserinfo",
            data: {
                sessionid: n.sessionid,
                uid: n.memberInfo.uid
            },
            success: function(e) {
                console.log("payyyy"), 0 == e.data.data.error ? t.doServices() : 2 == e.data.data.error && t.doServices();
            }
        }) : (e.util.getUserInfo(), !1) : (e.util.getUserInfo(function(e) {
            a.InitPage();
        }), !1);
    }
});