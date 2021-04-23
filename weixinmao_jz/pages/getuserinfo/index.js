var n = getApp();

Page({
    data: {},
    onLoad: function(n) {},
    bindGetUserInfo: function(o) {
        var t = this;
        n.util.getUserInfo(function(n) {
            console.log(n), t.data.isuser = !0, t.setData({
                userinfo: n,
                isuser: t.data.isuser
            });
        }, o.detail);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});