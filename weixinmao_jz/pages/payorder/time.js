var e = getApp(), t = require("../../resource/js/convertHelper.js"), a = require("../../resource/js/dateHelper.js");
const $api = require('../../api/index.js').API;

Page({
    data: {
        tabIndex: 1,
        iPhoneX: !!e.globalData.iPhoneX,
        header: e.globalData.header
    },
    onLoad:async function(i) {
        var n = this;
        var o = [], r = getCurrentPages(), c = r[r.length - 2], s = [], d = 0, h = [ "周日", "周一", "周二", "周三", "周四", "周五", "周六" ];
        let e = await $api.getTime({
            storeId: i.storeId,
            storeTechnicianId: i.storeTechnicianId
        })
        var i = e.response.result;
        i && i.length > 0 && i.forEach(function(e, i) {
        e.showDate = a.formatDate(e.bookDate, "MM/dd"), e.showWeek = h[t.toDateTime(e.bookDate).getDay()], 
            e && e.isDefault && (d = i), e && e.data && e.data.forEach(function(e) {
                e.showDate = a.formatDate(e.bookTime, "yyyy-MM-dd"), e.isCurrent = !1;
            });
        });
        var r = wx.getStorageSync("config") || {};
        c && (s = c.data.order.checkTimeData) && s.length > 0 && (i[s[0]].data[s[1]].isCurrent = !0), 
        n.setData({
            days: o,
            tabIndex: d,
            bookTime: i,
            config: r
        });
        console.log(e)

    },
    onReady: function() {
        wx.hideShareMenu();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    switchDate: function(e) {
        this.setData({
            tabIndex: e.currentTarget.dataset.idx
        });
    },
    setCurrent: function(e) {
        var t = this, i = t.data.tabIndex, n = t.data.bookTime, o = e.currentTarget.dataset.index, r = [ i, o ];
        if (n[i].data[o].isBookable) {
            for (var c in n) for (var s in n[c].data) n[c].data[s].isCurrent = !1;
            n[i].data[o].isCurrent = !0;
            var d = a.formatDate(n[i].bookDate, "yyyy-MM-dd"), h = n[i].data[o].showTime, u = n[i].data[o].isTaxi;
            t.setData({
                bookTime: n,
                serviceDate: d,
                serviceTime: h,
                checkTimeData: r,
                isTaxi: u
            }), t.setDatetime();
        } else wx.showToast({
            title: "当前时间不可预约",
            icon: "none"
        });
    },
    // 设置时间返回 
    setDatetime: function() {
        var e = this, t = wx.getStorageSync("order") || {};
        t.serviceDate = e.data.serviceDate, t.serviceTime = e.data.serviceTime, t.checkTimeData = e.data.checkTimeData, 
        t.isTaxi = e.data.isTaxi, wx.setStorageSync("order", t), wx.navigateBack();
    },
    change: function(e) {
        this.setData({
            tabIndex: e.detail.current
        });
    }
});