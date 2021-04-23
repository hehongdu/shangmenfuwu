require("../../resource/js/htmlToWxml.js"), require("../../resource/js/images.js");

var e = getApp();

Page({
    data: {
        id: 0,
        ordertype: 1,
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
        },]
    },
    onLoad: function(t) {
        var a = this;
        if (wx.setNavigationBarTitle({
            title: "服务项目"
        }), a.data.id > 0) a.data.id; else {
            t.id;
            a.data.id = t.id;
        }
        var n = wx.getStorageSync("userInfo");
    },
    onShow: function(e) {
        wx.getLocation({
            type: 'wgs84',
            success:res => {
                this.data.fuwulist.map(item=>{
                    item.juli = getDistance(res.longitude,res.latitude,100,50)
                })
                // let ress  = getDistance(res.longitude,res.latitude,100,50)
                // console.log(ress)
                // const latitude = res.latitude
                // const longitude = res.longitude
                // const speed = res.speed
                // const accuracy = res.accuracy
            }
        })
    },
    InitPage: function() {
        var t = this, a = wx.getStorageSync("userInfo"), n = t.data.ordertype;
        e.util.request({
            url: "entry/wxapp/myorder",
            data: {
                ordertype: n,
                sessionid: a.sessionid,
                uid: a.memberInfo.uid
            },
            success: function(e) {
                e.data.message.errno || (e.data.data.intro.maincolor || (e.data.data.intro.maincolor = "#09ba07"), 
                wx.setNavigationBarColor({
                    frontColor: "#ffffff",
                    backgroundColor: e.data.data.intro.maincolor,
                    animation: {
                        duration: 400,
                        timingFunc: "easeIn"
                    }
                }), t.setData({
                    list: e.data.data.list,
                    ordertype: n,
                    intro: e.data.data.intro,
                    isshow: !1
                }));
            }
        });
    },
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
});
/**
* 
* @param {*} e1 位置1 经度
* @param {*} n1 位置1 纬度
* @param {*} e2 
* @param {*} n2 
*/
function getDistance(e1, n1, e2, n2){
   const R = 6371
   const { sin, cos, asin, PI, hypot } = Math     
   /** 根据经纬度获取点的坐标 */
   let getPoint = (e, n) => {
       e *= PI/180
       n *= PI/180
       //这里 R* 被去掉, 相当于先求单位圆上两点的距, 最后会再将这个距离放大 R 倍
       return {x: cos(n)*cos(e), y: cos(n)*sin(e), z: sin(n)}
   }
   let a = getPoint(e1, n1)
   let b = getPoint(e2, n2)
   let c = hypot(a.x - b.x, a.y - b.y, a.z - b.z)
   let r = asin(c/2)*2*R
   return r
}