require("../../resource/js/qqmap-wx-jssdk.min.js"), require("../../resource/js/config.js");

var e = getApp();

Page({
    data: {
        flag: !1,
        codeDis: !1,
        phoneCode: "获取验证码",
        telephone: "",
        codePhone: "",
        isuser: !0
    },
    onLoad: function(e) {
        wx.setNavigationBarTitle({
            title: "我要认证"
        });
        var t = this, a = wx.getStorageSync("userInfo");
        if (console.log(a), a) if (a.hasOwnProperty("wxInfo")) {
            t.data.isuser = !0;
            a.memberInfo.uid;
        } else t.data.isuser = !1; else t.data.isuser = !1;
        console.log(t.data.isuser), t.setData({
            isuser: t.data.isuser
        });
    },
    binduser: function(t) {
        var a = wx.getStorageSync("userInfo"), o = t.detail.value.telephone, n = t.detail.value.code;
        11 != o.length || isNaN(o) ? wx.showModal({
            title: "提示",
            content: "请输入有效的手机号码",
            showCancel: !1
        }) : "" != n ? e.util.request({
            url: "entry/wxapp/register",
            data: {
                phone: o,
                code: n,
                uid: a.memberInfo.uid
            },
            success: function(e) {
                if (!e.data.message.errno) return 1 == e.data.data.error ? void wx.showModal({
                    title: "提示",
                    content: e.data.data.msg,
                    showCancel: !1
                }) : void wx.showModal({
                    title: "提示",
                    content: e.data.data.msg,
                    showCancel: !1,
                    success: function(e) {
                        wx.navigateTo({
                            url: "/weixinmao_zp/pages/user/index"
                        });
                    }
                });
            }
        }) : wx.showModal({
            title: "提示",
            content: "请输入验证码",
            showCancel: !1
        });
    },
    getPhoneNumber: function(t) {
        console.log(t.detail);
        if ("getPhoneNumber:fail user deny" == t.detail.errMsg) wx.showModal({
            title: "提示",
            showCancel: !1,
            content: "未授权",
            success: function(e) {}
        }); else {
            var a = wx.getStorageSync("userInfo");
            e.util.request({
                url: "entry/wxapp/Getphone",
                data: {
                    iv: t.detail.iv,
                    encryptedData: t.detail.encryptedData,
                    uid: a.memberInfo.uid
                },
                success: function(e) {
                    e.data.message.errno || wx.navigateBack({
                        changed: !0
                    });
                }
            });
        }
    },
    bindGetUserInfo: function(t) {
        var a = this;
        e.util.getUserInfo(function(t) {
            console.log(t), a.data.isuser = !0;
            var o = t.memberInfo.uid, n = t.wxInfo.nickName, s = t.wxInfo.avatarUrl;
            a.data.uid = o, o > 0 && (a.setData({
                userinfo: t,
                isphone: !1,
                isuser: a.data.isuser
            }), e.util.request({
                url: "entry/wxapp/Updateuserinfo",
                data: {
                    uid: o,
                    nickname: n,
                    avatarUrl: s
                },
                success: function(o) {
                    o.data.message.errno || (e.globalData.isuser = !0, a.setData({
                        userinfo: t,
                        isphone: !1,
                        isuser: a.data.isuser
                    }));
                }
            }));
        }, t.detail);
    },
    onReady: function() {},
    changeCode: function() {
        var t = this, a = this.data.telephone;
        11 != a.length || isNaN(a) ? wx.showModal({
            title: "提示",
            content: "请输入有效的手机号码",
            showCancel: !1
        }) : (this.setData({
            codeDis: !0
        }), e.util.request({
            url: "entry/wxapp/sendsms",
            data: {
                phone: this.data.telephone
            },
            success: function(e) {
                if (!e.data.message.errno) {
                    t.setData({
                        phoneCode: 60
                    });
                    var a = setInterval(function() {
                        var e = t.data.phoneCode;
                        e--, t.setData({
                            phoneCode: e
                        }), 0 == e && (clearInterval(a), t.setData({
                            phoneCode: "获取验证码",
                            flag: !0,
                            codeDis: !1
                        }));
                    }, 1e3);
                }
            }
        }));
    },
    phoneinput: function(e) {
        console.log(e);
        var t = e.detail.value;
        console.log(t), this.setData({
            telephone: t
        });
    },
    codeinput: function(e) {
        var t = e.detail.value;
        console.log(t), this.setData({
            codePhone: t
        });
    },
    onShow: function() {
        var e = this;
        this.checkuser({
            doServices: function() {
                var t = wx.getStorageSync("userInfo");
                console.log(t.wxInfo), e.setData({
                    userinfo: t
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
        var a = this, t = t, o = wx.getStorageSync("userInfo");
        return o ? o.memberInfo.uid ? void e.util.request({
            url: "entry/wxapp/checkuserinfo",
            data: {
                sessionid: o.sessionid,
                uid: o.memberInfo.uid
            },
            success: function(e) {
                0 == e.data.data.error ? (console.log(t), t.doServices()) : 2 == e.data.data.error && t.doServices();
            }
        }) : (console.log("tmddddsssssqqqqs1111"), e.util.getUserInfo(function(e) {
            a.setData({
                userinfo: e
            });
        }), !1) : (console.log("tmddddssssss222222"), e.util.getUserInfo(function(e) {
            a.setData({
                userinfo: e
            });
        }), !1);
    }
});