var t = getApp();

Page(
    function(t, a, e) {
        return a in t ? Object.defineProperty(t, a, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[a] = e, t;
    }({
    data: {},
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: "服务技师查询"
        }), this.setData({
            loadmore: !0
        });
    },
    onReady: function() {},
    onShow: function() {
        this.setData({
            loadmore: !0
        });
    },
    toProject: function(a) {
        var e = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/weixinmao_jz/pages/project/index?id=" + e
        });
    },
    toNoteDetail: function(a) {
        var e = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/weixinmao_jz/pages/notedetail/index?id=" + e
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    bindSave: function(a) {
        var e = this, n = a.detail.value.keyword;
        "" != n ? t.util.request({
            url: "entry/wxapp/search",
            data: {
                keyword: n
            },
            success: function(t) {
                if (0 != t.data.errno) return wx.hideLoading(), void wx.showModal({
                    title: "失败",
                    content: t.data.data.msg,
                    showCancel: !1
                });
                0 == t.data.data.length ? (console.log("fffffffff"), e.setData({
                    list: t.data.data,
                    loadmore: !1
                })) : e.setData({
                    list: t.data.data,
                    loadmore: !0
                });
            }
        }) : wx.showModal({
            title: "提示",
            content: "请输入小区、地名、物业等相关信息",
            showCancel: !1
        });
    }
    }, "onShareAppMessage", function() {
        return {
            title: "信息综合查询-" + wx.getStorageSync("companyinfo").name,
            path: "/weixinmao_jz/pages/search/index"
        };
    }),
);