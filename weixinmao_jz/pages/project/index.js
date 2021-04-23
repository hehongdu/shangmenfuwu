require("../../resource/js/htmlToWxml.js"), require("../../resource/js/images.js");

var e = getApp();

Page({
    data: {
        id: 0,
        ordertype: 1,
        commentList:[{
            telephone:'13325812485',
            content:'特殊服务不错 下次还来',
            create_time:'2019-05-06 20:08:16'
        },{
            telephone:'13325812485',
            content:'特殊服务不错 下次还来',
            create_time:'2019-05-06 20:08:16'
        },{
            telephone:'13325812485',
            content:'特殊服务不错 下次还来',
            create_time:'2019-05-06 20:08:16'
        },{
            telephone:'13325812485',
            content:'特殊服务不错 下次还来特殊服务不错 下次还来特殊服务不错 下次还来特殊服务不错 下次还来特殊服务不错 下次还来阿斯顿撒大苏打撒旦撒搭撒的阿斯顿撒旦撒搭撒的爱上搭撒的阿斯顿爱上搭撒的',
            create_time:'2019-05-06 20:08:16'
        }],
        data:{
            imglist:[
                'https://api.ericgu178.com/instagram/20210409/1617959254CNSYOliMz5e.jpg',
                'https://api.ericgu178.com/instagram/20210409/1617959259CNSYOliMz5e.jpg',
                'https://api.ericgu178.com/instagram/20210409/1617959264CNSYOliMz5e.jpg',
                'https://api.ericgu178.com//uploads/20210409/bd45a4c6b76d32bbd7e64d6a36ebef7e.jpg',
                'https://api.ericgu178.com//uploads/20210409/34bf42d01555216f55cdc01174f3d7a2.jpg',
                'https://api.ericgu178.com//uploads/20210409/71574631408796e99d579b4394bc6683.jpg'
            ],
            photo:'https://api.ericgu178.com/instagram/20210409/1617959264CNSYOliMz5e.jpg',
            name:'我是谁',
            juli:'1010',
            store:'IFS底层会所',
            about_des:'技师是具备相关技术，掌握或精通某一类技巧、技能的人员。技师不同于一般工程师，技师属于职业资格，工程师属于职称。技师是企业中有丰富业务知识和熟练的操作技能的技术工人，他们在提高职工队伍素质，强化生产管理中具有示范和引领作用，应当合理使用。从业按摩手法丰富，手法娴熟，服务细致到位，风雨无阻，贴心服务，顾客至上，用心服务好您的每个细节，不辜负您的信任',
            fuwulist:[{
                src:'https://api.ericgu178.com//uploads/20210409/64f0a724f7d153a9c818ab30efef957a.jpg',
                title:'特色全身油压养生SPA',
                des:'背部 腰部 臀部 胸部 腿部 手部 肩部 腹部 颈部',
                amount:'288',
                time:'60',
                juli:'一公里'
            },{
                src:'https://api.ericgu178.com//uploads/20210409/c5d3777895c068a653f272a827780a2c.jpg',
                title:'特色全身油压养生SPA',
                des:'90分钟特色全身油压，推油，活血化淤，舒筋通骨，扫除疲劳',
                amount:'288',
                time:'60',
                juli:'一公里'
            },{
                src:'https://api.ericgu178.com//uploads/20210409/c5d3777895c068a653f272a827780a2c.jpg',
                title:'特色全身油压养生SPA',
                des:'90分钟特色全身油压，推油，活血化淤，舒筋通骨，扫除疲劳',
                amount:'288',
                time:'60',
                juli:'一公里'
            },{
                src:'https://api.ericgu178.com//uploads/20210409/c91c0609a2d4b6f966b554956f5810a3.jpg',
                title:'特色全身油压养生SPA',
                des:'90分钟特色全身油压，推油，活血化淤，舒筋通骨，扫除疲劳',
                amount:'288',
                time:'60',
                juli:'一公里'
            },],
        },
        isF:true
    },
    zhankai() {
        this.setData({
            isF:!this.data.isF
        })
    },
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: "技师详情"
        })
    },
    // 跳转评价页面
    toComment() {
        wx.showToast({
          title: '评价页面跳转',
        })
    },

    preview(e) {
        wx.previewImage({
            current: e.currentTarget.dataset.src, // 当前显示图片的http链接
            urls: e.currentTarget.dataset.list // 需要预览的图片http链接列表
        })
    },
    
    onShow: function(e) {},

    toStore() {
        wx.navigateTo({
          url: '/weixinmao_jz/pages/store/index',
        })
    },


    onReady: function() {},
    
    
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
    toNotelist: function() {
        wx.navigateTo({
            url: "/weixinmao_jz/pages/notelist/index"
        });
    },
    toNoteDetail: function(a) {
        var e = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/weixinmao_jz/pages/notedetail/index?id=" + e
        });
    },
});