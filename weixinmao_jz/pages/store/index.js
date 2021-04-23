// weixinmao_jz/pages/store/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLoad:true,
        store:{
            store_name:'IFS底层会所',
            bg:'https://api.ericgu178.com//uploads/20210409/64f0a724f7d153a9c818ab30efef957a.jpg',
            tuijian:[{
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
            }]
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: this.data.store.store_name
        })
    },

    toNoteDetail: function(e) {
        var id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/weixinmao_jz/pages/notedetail/index?id=" + id
        });
    },

    toStoreComment() {
        wx.navigateTo({
          url: '/weixinmao_jz/pages/store_comment/index',
        })
    },

    toStoreService() {
        wx.navigateTo({
            url: '/weixinmao_jz/pages/store_service/index',
          })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})