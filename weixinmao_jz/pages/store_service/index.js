// weixinmao_jz/pages/store_service/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active:1,
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
        },{
            src:'../../resource/images/fuwu1.jpg',
            title:'特色全身油压养生SPA',
            des:'背部 腰部 臀部 胸部 腿部 手部 肩部 腹部 颈部',
            amount:'288',
            time:'60',
            juli:'一公里'
        },],

    },

    clickSort(e) {
        const {key} = e.currentTarget.dataset;
        this.setData({
            active:key
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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