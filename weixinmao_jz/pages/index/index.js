require("../../resource/js/qqmap-wx-jssdk.min.js"), require("../../resource/js/config.js");
const $api = require('../../api/index.js').API;

var a = getApp();
Page({
    data: {
        // 轮播图
        banner: [
            'https://api.ericgu178.com//uploads/20210409/c5d3777895c068a653f272a827780a2c.jpg',
            'https://api.ericgu178.com//uploads/20210409/71574631408796e99d579b4394bc6683.jpg',
        ],
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
        fuwulist:[{
            src:'../../resource/images/fuwu1.jpg',
            title:'特色全身油压养生SPA',
            des:'背部 腰部 臀部 胸部 腿部 手部 肩部 腹部 颈部',
            amount:'288',
            time:'60',
            juli:'一公里'
        },{
            src:'../../resource/images/fuwu1.jpg',
            title:'特色全身油压养生SPA',
            des:'背部 腰部 臀部 胸部 腿部 手部 肩部 腹部 颈部',
            amount:'288',
            time:'60',
            juli:'一公里'
        },{
            src:'../../resource/images/fuwu1.jpg',
            title:'特色全身油压养生SPA',
            des:'背部 腰部 臀部 胸部 腿部 手部 肩部 腹部 颈部',
            amount:'288',
            time:'60',
            juli:'一公里'
        },{
            src:'../../resource/images/fuwu1.jpg',
            title:'特色全身油压养生SPA',
            des:'背部 腰部 臀部 胸部 腿部 手部 肩部 腹部 颈部',
            amount:'288',
            time:'60',
            juli:'一公里'
        },],
        httpSrc: "http://www.fzshop.com/uploads/banner/",
    },
    onLoad: function(t) {
        console.log($api )
        var a = this;
        if (wx.setNavigationBarTitle({
            title: "首页"
        }));
    },
    toSearch() {
        wx.navigateTo({
          url:"weixinmao_jz/pages/search/index"
        })
    },
    onShow: function(e) {
        
    },
    
    toLogin: function(a) {
        wx.getStorageSync("companyid") > 0 ? wx.navigateTo({
            url: "/weixinmao_jz/pages/companylogin/index"
        }) : wx.navigateTo({
            url: "/weixinmao_jz/pages/login/index"
        });
    },
    toList: function(a) {
        var e = a.currentTarget.id;
        wx.navigateTo({
            url: "/weixinmao_jz/pages/article/index?id=" + e
        });
    },
    toProject: function(a) {
        var e = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/weixinmao_jz/pages/project/index?id=" + e
        });
    },
    toNotemessage: function(a) {
        var e = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/weixinmao_jz/pages/notemessage/index?id=" + e
        });
    },
    toNotelist: function() {
        wx.navigateTo({
            url: "/weixinmao_jz/pages/notelist/index"
        });
    },
    toMyorder: function() {
        wx.switchTab({
            url: "/weixinmao_jz/pages/myorder/index"
        });
    },
    tabClick: function(e) {
        var t = this, o = e.currentTarget.id;
        a.util.request({
            url: "entry/wxapp/changenotelist",
            data: {
                ordertype: o
            },
            success: function(a) {
                a.data.message.errno || t.setData({
                    notelist: a.data.data.notelist,
                    ordertype: o
                });
            }
        }), t.setData({
            ordertype: o
        });
    },
    toNewHouse: function(a) {
        wx.navigateTo({
            url: "/weixinmao_jz/pages/newhouselist/index"
        });
    },
    toServiceorder: function() {
        wx.navigateTo({
            url: "/weixinmao_jz/pages/serviceorder/index"
        });
    },
    toGuestHouse: function(a) {
        wx.navigateTo({
            url: "/weixinmao_house/pages/guesthouselist/index"
        });
    },
    toOldHouse: function(a) {
        wx.switchTab({
            url: "/weixinmao_house/pages/oldhouselist/index"
        });
    },
    toletHouseDetail: function(a) {
        var e = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/weixinmao_house/pages/lethousedetail/index?id=" + e
        });
    },
    toAgentlist: function(a) {
        wx.navigateTo({
            url: "/weixinmao_house/pages/agentlist/index"
        });
    },
    toArticle: function(a) {
        wx.navigateTo({
            url: "/weixinmao_house/pages/salelist/index"
        });
    },
    toActive: function(a) {
        wx.navigateTo({
            url: "/weixinmao_house/pages/active/index"
        });
    },
    toNewHouseDetail: function(a) {
        var e = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/weixinmao_house/pages/newhousedetail/index?id=" + e
        });
    },
    toNoteDetail: function(a) {
        var e = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/weixinmao_jz/pages/notedetail/index?id=" + e
        });
    },
    toLethouse: function(a) {
        var e = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/weixinmao_house/pages/lethouselist/index?id=" + e
        });
    },
    toMessage: function(a) {
        wx.navigateTo({
            url: "/weixinmao_jz/pages/message/index"
        });
    },
    toSearch: function(a) {
        wx.navigateTo({
            url: "/weixinmao_jz/pages/search/index"
        });
    },
    PubOldhouse: function(a) {
        var e = this;
        wx.navigateTo({
            url: "/weixinmao_house/pages/pub/index",
            success: function() {
                e.data.showmsg = !0, e.setData({
                    showmsg: e.data.showmsg
                });
            }
        });
    },
    PubLethouse: function(a) {
        var e = this;
        wx.navigateTo({
            url: "/weixinmao_house/pages/letpub/index",
            success: function() {
                e.data.showmsg = !0, e.setData({
                    showmsg: e.data.showmsg
                });
            }
        });
    },
    toSaleOldPub: function(a) {
        var e = this;
        wx.navigateTo({
            url: "/weixinmao_house/pages/saleoldpub/index",
            success: function() {
                e.data.showmsg = !0, e.setData({
                    showmsg: e.data.showmsg
                });
            }
        });
    },
    toSalePub: function(a) {
        var e = this;
        wx.navigateTo({
            url: "/weixinmao_house/pages/salepub/index",
            success: function() {
                e.data.showmsg = !0, e.setData({
                    showmsg: e.data.showmsg
                });
            }
        });
    },
    toSaleBuyPub: function(a) {
        var e = this;
        wx.navigateTo({
            url: "/weixinmao_house/pages/salebuypub/index",
            success: function() {
                e.data.showmsg = !0, e.setData({
                    showmsg: e.data.showmsg
                });
            }
        });
    },
    toSaleLetPub: function(a) {
        var e = this;
        wx.navigateTo({
            url: "/weixinmao_house/pages/saleletpub/index",
            success: function() {
                e.data.showmsg = !0, e.setData({
                    showmsg: e.data.showmsg
                });
            }
        });
    },
    goPub: function(a) {
        this.data.showmsg = !1, this.setData({
            showmsg: this.data.showmsg
        });
    },
    closemsg: function(a) {
        this.data.showmsg = !0, this.setData({
            showmsg: this.data.showmsg
        });
    },
    goMap: function(a) {
        wx.openLocation({
            latitude: parseFloat(wx.getStorageSync("companyinfo").lat),
            longitude: parseFloat(wx.getStorageSync("companyinfo").lng),
            scale: 18,
            name: wx.getStorageSync("companyinfo").name,
            address: wx.getStorageSync("companyinfo").address
        });
    },
    onReady: function() {},
    bindInput: function(a) {
        var e = this;
        this.setData({
            inputValue: a.detail.value
        }), e.onShow();
    },
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