require("../../resource/js/qqmap-wx-jssdk.min.js"), require("../../resource/js/config.js");

var a = getApp();

Page({
    data: {
        jishilist:[{
            name:'奉枕席',
            imgurl:'https://api.ericgu178.com//uploads/20210409/9d117aba41f3f69dab8fca056dee08a1.jpg',
            address:'北京市朝阳区警告阿斯顿123',
            store:'子轩养生店',
            speactial:'为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色'
        },{
            name:'奉枕席',
            imgurl:'https://api.ericgu178.com//uploads/20210409/bd45a4c6b76d32bbd7e64d6a36ebef7e.jpg',
            address:'北京市朝阳区警告阿斯顿123',
            store:'子轩养生店',
            speactial:'为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色'
        },{
            name:'张三',
            imgurl:'https://api.ericgu178.com//uploads/20210409/db8b1bf5d0dc06726c03b8165a5328fa.jpg',
            address:'北京市朝阳区警告阿斯顿123',
            store:'子轩养生店',
            speactial:'为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色'
        },{
            name:'奉枕席',
            imgurl:'https://api.ericgu178.com//uploads/20210409/64f0a724f7d153a9c818ab30efef957a.jpg',
            address:'北京市朝阳区警告阿斯顿123',
            store:'子轩养生店',
            speactial:'为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色'
        },{
            name:'奉枕席',
            imgurl:'https://api.ericgu178.com//uploads/20210409/c5d3777895c068a653f272a827780a2c.jpg',
            address:'北京市朝阳区警告阿斯顿123',
            store:'子轩养生店',
            speactial:'为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色'
        },{
            name:'奉枕席',
            imgurl:'https://api.ericgu178.com//uploads/20210409/71574631408796e99d579b4394bc6683.jpg',
            address:'北京市朝阳区警告阿斯顿123',
            store:'子轩养生店',
            speactial:'为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色'
        }],
        sortList:[{
            key:0,
            value:'综合排序'
        },{
            key:1,
            value:'好评如潮'
        },{
            key:2,
            value:'褒贬不一'
        },{
            key:3,
            value:'非常不nice'
        },],
        sortPopup:false,
        sortText:'综合排序',
        sortKey:0
    },
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: "技师列表"
        })
    },
    // 模态框关闭
    sortOnClose() {
        this.setData({
            sortPopup:false
        })
    },
    // 综合排序
    sort() {
        this.setData({
            sortPopup:!this.data.sortPopup
        })
    },
    sortOnClick(e) {
        this.setData({
            sortText:e.currentTarget.dataset.value,
            sortKey:e.currentTarget.dataset.key,
            sortPopup:false
        })
    },
    toList: function(a) {
        var t = a.currentTarget.id;
        wx.navigateTo({
            url: "/weixinmao_jz/pages/article/index?id=" + t
        });
    },
    toSearch: function(a) {
        wx.navigateTo({
            url: "/weixinmao_jz/pages/search/index"
        });
    },
    toProject: function(a) {
        var e = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/weixinmao_jz/pages/project/index?id=" + e
        });
    },
    onReady: function() {},
    bindInput: function(a) {
        var t = this;
        this.setData({
            inputValue: a.detail.value
        }), t.onShow();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), this.onLoad();
    },
    doCall: function() {
        var a = this.data.textData.shop_tel;
        wx.makePhoneCall({
            phoneNumber: a
        });
    },
    onShareAppMessage: function() {
        return {
            title: wx.getStorageSync("companyinfo").name,
            path: "/weixinmao_jz/pages/index/index"
        };
    }
});