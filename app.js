App({
    onLaunch: function() {},
    onShow: function() {},
    onHide: function() {},
    onError: function(o) {},
    tabBar: {
        color: "#123",
        selectedColor: "#1ba9ba",
        borderStyle: "#1ba9ba",
        backgroundColor: "#fff",
        list: []
    },
    getLocationInfo: function(o) {
        var n = this;
        this.globalData.locationInfo ? o(this.globalData.locationInfo) : wx.getLocation({
            type: "gcj02",
            success: function(t) {
                n.globalData.locationInfo = t, o(n.globalData.locationInfo);
            },
            fail: function() {},
            complete: function() {}
        });
    },
    globalData: {
        baseUrl: "http://www.fzshop.com/",
        userInfo: null,
    },
    siteInfo: require("siteinfo.js")
});