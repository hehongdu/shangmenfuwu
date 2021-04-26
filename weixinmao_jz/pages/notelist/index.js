require("../../resource/js/htmlToWxml.js"), require("../../resource/js/images.js");

var e = getApp();

Page({
    data: {
        isLoad:true,
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
        wx.setNavigationBarTitle({
            title: "服务项目"
        })
        this.setData({
            isLoad:false
        })
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
        
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
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