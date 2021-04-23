var a = getApp();

Page({
    data: {
        autoplay: !0,
        interval: 3e3,
        duration: 1e3,
        listid: "",
        totalprice: 0,
        id: 0
    },
    onLoad: function(t) {
        if (wx.setNavigationBarTitle({
            title: "服务列表-" + wx.getStorageSync("companyinfo").name
        }), this.data.id > 0) this.data.id; else {
            t.id;
            this.data.id = t.id;
        }
        var i = this;
        i.setData({
            isshow: !0
        }), a.util.request({
            url: "entry/wxapp/getarticle",
            data: {
                id: this.data.id
            },
            success: function(a) {
                a.data.message.errno || (a.data.data.intro.maincolor || (a.data.data.intro.maincolor = "#09ba07"), 
                wx.setNavigationBarColor({
                    frontColor: "#ffffff",
                    backgroundColor: a.data.data.intro.maincolor,
                    animation: {
                        duration: 400,
                        timingFunc: "easeIn"
                    }
                }), i.setData({
                    category: a.data.data.category,
                    article: a.data.data.article,
                    activeCategoryId: a.data.data.activeCategoryId,
                    totalprice: 0,
                    intro: a.data.data.intro,
                    isshow: !1
                }));
            },
            complete: function() {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
    },
    SelectChange: function(a) {
        var t = this;
        console.log(a.detail.value);
        var i, e = a.detail.value, o = 0, n = "";
        if (e.length > 0) {
            for (var r = 0; r < e.length; r++) i = e[r].split("@"), o += parseFloat(i[0]), n = n + i[1] + "@";
            console.log(n);
        }
        t.data.listid = n, t.data.totalprice = o, t.setData({
            totalprice: o
        });
    },
    tabClick: function(t) {
        var i = t.currentTarget.id, e = this;
        a.util.request({
            url: "entry/wxapp/getsecondlist",
            data: {
                pid: i
            },
            success: function(a) {
                a.data.message.errno || e.setData({
                    article: a.data.data,
                    activeCategoryId: i
                });
            }
        });
    },
    toNewsDetail: function(a) {
        var t = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/weixinmao_jz/pages/newsdetail/index?id=" + t
        });
    },
    toOrder: function() {
        var a = this;
        0 != a.data.totalprice ? (console.log(a.data.listid), wx.navigateTo({
            url: "/weixinmao_jz/pages/message/index?listid=" + a.data.listid
        })) : wx.showModal({
            title: "提示",
            content: "请选择服务项目",
            showCancel: !1
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {
        wx.showNavigationBarLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
    },
    onShareAppMessage: function() {
        return {
            title: "我要下单-" + wx.getStorageSync("companyinfo").name,
            path: "/weixinmao_jz/pages/article/index"
        };
    }
});