require("../../resource/js/htmlToWxml.js"), require("../../resource/js/images.js");

var e = getApp();

Page({
    data: {
        id: 0,
        ordertype: 1,
        resourse: [{
            src:'https://api.ericgu178.com/instagram/20210409/1617959254CNSYOliMz5e.jpg',
            type:1,
        },{
            src:'https://img-blog.csdnimg.cn/img_convert/6565dc65a164c9ea6ff25288537bd1ab.png',
            type:2,
        },{
            src:'https://api.ericgu178.com//uploads/20210409/71574631408796e99d579b4394bc6683.jpg',
            type:1,
        }],
        data:{
            src:'../../resource/images/fuwu1.jpg',
            title:'特色全身油压养生SPA',
            des:'背部 腰部 臀部 胸部 腿部 手部 肩部 腹部 颈部',
            amount:'288',
            time:'60',
            juli:'一公里',
            detail:`60分钟特色全身油压，推油，活血化淤，疏通筋骨，扫除疲劳，服务至上，用最真挚的服务换取你的信任，
            中式按摩是传统医学的一个重要组成部分，有着悠久的历史，对于治疗疾病、保健养生、放松精神都有着独特而又显著的疗效。中式按摩融合了中医理论的精华，以经络学说为指导，具有很高的医学价值，90分钟特色全身油压，推油，活血化淤，疏通筋骨，扫除疲劳，服务至上，用最真挚的服务换取你的信任，
            中式按摩是传统医学的一个重要组成部分，有着悠久的历史，对于治疗疾病、保健养生、放松精神都有着独特而又显著的疗效。中式按摩融合了中医理论的精华，以经络学说为指导，具有很高的医学价值
            <img src="../../resource/images/fuwu1.jpg" style="width:100%; height:290rpx"></img>`
        },
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 2000,
        duration: 500,
        popupshow:false,
        //时间

        minHour: 10,
        maxHour: 20,
        minDate: new Date().getTime(),
        maxDate: new Date(new Date().getUTCFullYear(), 11, 31).getTime(),
        currentDate: new Date().getTime(),
        currentDateStr:''
    },
    onLoad: function(t) {
        this.onConfirm({
            detail:new Date().getTime()
        })
        console.log(new Date().getTime())
        var a = this;
        if (wx.setNavigationBarTitle({
            title: "服务详情"
        }), 
        a.data.id > 0) a.data.id;
    },
    onConfirm(event) {
        let date = new Date(event.detail);
        var dateStr = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getUTCDate()} ${date.getHours()}:${(Array(2).join(0)+date.getUTCMinutes()).slice(-2)}`
        this.setData({
          currentDateStr: dateStr,
          currentDate: event.detail,
          popupshow:false
        });
    },
    preview(e) {
        let sources = [];
        let data = e.currentTarget.dataset.list;
        sources = data.map(item=>{
            return {
                url:item.src,
                type:item.type == 1 ? 'image' : 'video',
                poster:item.src
            }
        })
        wx.previewMedia({
            sources:sources,
            current:e.currentTarget.dataset.key
        });
    },
    chooseTime() {
        this.setData({
            popupshow:true
        })
    },
    onClose() {
        this.setData({
            popupshow:false
        })
    },
    onShow: function(e) {},
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
    },
    toNoteDetail: function(a) {
        var e = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/weixinmao_jz/pages/notedetail/index?id=" + e
        });
    },
    toPayOrder: function(e) {
        var id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/weixinmao_jz/pages/payorder/index?id=" + id
        });
    },
});