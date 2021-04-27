require("../../resource/js/htmlToWxml.js"), require("../../resource/js/images.js");

var e = getApp();

Page({
    data: {
        showmsg: !0,
        isuser: !0
    },
    onLoad: function(o) {
        var t = this;
        t.setData({
            isshow: !0
        });
        var a = {
            sessionid: "",
            wxInfo: "",
            memberInfo: ""
        }, a = wx.getStorageSync("userInfo");
        a && a.hasOwnProperty("wxInfo") ? (t.data.isuser = !0, t.setData({
            userinfo: a
        })) : t.data.isuser = !1, t.setData({
            isuser: t.data.isuser
        }), wx.setNavigationBarTitle({
            title: "会员中心"
        }), e.util.request({
            // url: "entry/wxapp/Intro",
            // success: function(e) {
            //     e.data.message.errno || (wx.setStorageSync("companyinfo", e.data.data.intro), wx.setNavigationBarTitle({
            //         title: wx.getStorageSync("companyinfo").name
            //     }), e.data.data.intro.maincolor || (e.data.data.intro.maincolor = "#09ba07"), wx.setNavigationBarColor({
            //         frontColor: "#ffffff",
            //         backgroundColor: e.data.data.intro.maincolor,
            //         animation: {
            //             duration: 400,
            //             timingFunc: "easeIn"
            //         }
            //     }), t.setData({
            //         intro: e.data.data.intro,
            //         isshow: !1
            //     }));
            // },
            // complete: function() {
            //     wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            // }
        });
    },
    bindGetUserInfo: function(o) {
        var t = this;
        e.util.getUserInfo(function(e) {
            console.log(e), t.data.isuser = !0, t.setData({
                userinfo: e,
                isuser: t.data.isuser
            });
        }, o.detail);
    },
    onReady: function() {},
    toOrderlist: function(e) {
        var o = e.currentTarget.dataset.id;
        console.log(o), wx.navigateTo({
            url: "/weixinmao_wy/pages/orderlist/index?id=" + o
        });
    },
    toMyOrder: function() {
        wx.switchTab({
            url: "/weixinmao_jz/pages/myorder/index"
        });
    },
    doCall: function() {
        var e = wx.getStorageSync("companyinfo").tel;
        wx.makePhoneCall({
            phoneNumber: e
        });
    },
    toBindUser: function() {
        wx.navigateTo({
            url: "/weixinmao_jz/pages/binduser/index"
        });
    },
    toMymessageorder: function() {
        wx.navigateTo({
            url: "/weixinmao_jz/pages/mymessageorder/index"
        });
    },
    toMessage: function() {
        wx.navigateTo({
            url: "/weixinmao_jz/pages/message/index"
        });
    },
    toMyletpub: function(e) {
        var o = e.currentTarget.dataset.id;
        console.log(o), wx.navigateTo({
            url: "/weixinmao_jz/pages/myletpub/index?id=" + o
        });
    },
    toMysalepub: function(e) {
        var o = e.currentTarget.dataset.id;
        console.log(o), wx.navigateTo({
            url: "/weixinmao_jz/pages/mysalepub/index?id=" + o
        });
    },
    toMyHouse: function(e) {
        wx.navigateTo({
            url: "/weixinmao_jz/pages/myhouse/index"
        });
    },
    onShow: function() {
        // tabbar
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
              selected: 3
            })
        }
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    binduserinfo: function(o) {
        var t = this;
        t.data.showmsg = !1;
        var a = wx.getStorageSync("userInfo");
        e.util.request({
            url: "entry/wxapp/getuserinfo",
            data: {
                sessionid: a.sessionid,
                uid: a.memberInfo.uid
            },
            success: function(e) {
                t.setData({
                    user: e.data.data,
                    showmsg: t.data.showmsg
                });
            }
        });
    },
    saveuserinfo: function(o) {
        var t = this, a = o.detail.value.name, n = o.detail.value.tel;
        t.data.showmsg = !0;
        var s = wx.getStorageSync("userInfo");
        "" != a ? "" != n ? e.util.request({
            url: "entry/wxapp/saveuserinfo",
            data: {
                sessionid: s.sessionid,
                uid: s.memberInfo.uid,
                name: a,
                tel: n
            },
            success: function(e) {
                if (0 != e.data.errno) return wx.hideLoading(), void wx.showModal({
                    title: "失败",
                    content: e.data.msg,
                    showCancel: !1
                });
                wx.showToast({
                    title: "操作成功",
                    icon: "success",
                    duration: 2e3
                }), t.setData({
                    showmsg: t.data.showmsg
                });
            }
        }) : wx.showModal({
            title: "提示",
            content: "请填写您的手机号",
            showCancel: !1
        }) : wx.showModal({
            title: "提示",
            content: "请填写您的姓名",
            showCancel: !1
        });
    },
    closemsg: function(e) {
        this.data.showmsg = !0, this.setData({
            showmsg: this.data.showmsg
        });
    },
    onReachBottom: function() {},
    toMycouponlist: function(e) {
        wx.navigateTo({
            url: "/weixinmao_wy/pages/couponlist/index"
        });
    },
    Puboldhouse: function(e) {
        wx.navigateTo({
            url: "/weixinmao_wy/pages/pub/index"
        });
    },
    onShareAppMessage: function() {},
    checkuser: function(o) {
        var t = this, o = o, a = wx.getStorageSync("userInfo");
        return a ? a.memberInfo.uid ? void e.util.request({
            url: "entry/wxapp/checkuserinfo",
            data: {
                sessionid: a.sessionid,
                uid: a.memberInfo.uid
            },
            success: function(e) {
                0 == e.data.data.error ? (console.log(o), o.doServices()) : 2 == e.data.data.error && o.doServices();
            }
        }) : (console.log("tmddddsssssqqqqs1111"), e.util.getUserInfo(function(e) {
            t.setData({
                userinfo: e
            });
        }), !1) : (console.log("tmddddssssss222222"), e.util.getUserInfo(function(e) {
            t.setData({
                userinfo: e
            });
        }), !1);
    }
});