// weixinmao_jz/pages/shop/project/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      headerHeight:0,
      h:0,
      list:[1,2,3,4,5,6]
  },
  addlist:function(){
    wx.navigateTo({
      url: '../addProject/index',
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
    // console.log(this.data.headerHeight)
    // var that=this
   var i= wx.getMenuButtonBoundingClientRect().height
  //  this.data.headerHeight=i
   this.setData({
    h:i,
    headerHeight:i*2
   })
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