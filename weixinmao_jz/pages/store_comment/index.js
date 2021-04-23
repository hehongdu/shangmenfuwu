Page({

    /**
     * 页面的初始数据
     */
    data: {
        commentlist:[{
            nickname:'小乔',
            avatar:'https://api.ericgu178.com//uploads/20210409/34bf42d01555216f55cdc01174f3d7a2.jpg',
            content:'折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！',
            create_time:'2012-05-02',
            imglist:[
            ],
        },{
            nickname:'小乔',
            avatar:'https://api.ericgu178.com//uploads/20210409/34bf42d01555216f55cdc01174f3d7a2.jpg',
            content:'折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！',
            create_time:'2012-05-02',
            imglist:[
                'https://api.ericgu178.com/instagram/20210409/1617959254CNSYOliMz5e.jpg',
                'https://api.ericgu178.com/instagram/20210409/1617959259CNSYOliMz5e.jpg',
                'https://api.ericgu178.com/instagram/20210409/1617959264CNSYOliMz5e.jpg',
                'https://api.ericgu178.com//uploads/20210409/bd45a4c6b76d32bbd7e64d6a36ebef7e.jpg',
                'https://api.ericgu178.com//uploads/20210409/34bf42d01555216f55cdc01174f3d7a2.jpg',
                'https://api.ericgu178.com//uploads/20210409/71574631408796e99d579b4394bc6683.jpg'
            ],
        },{
            nickname:'小乔',
            avatar:'https://api.ericgu178.com/instagram/20210409/1617959254CNSYOliMz5e.jpg',
            content:'折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！',
            create_time:'2022-05-02',
            imglist:[
                'https://api.ericgu178.com/instagram/20210409/1617959254CNSYOliMz5e.jpg',
                'https://api.ericgu178.com/instagram/20210409/1617959259CNSYOliMz5e.jpg',
                'https://api.ericgu178.com/instagram/20210409/1617959264CNSYOliMz5e.jpg',
                'https://api.ericgu178.com//uploads/20210409/bd45a4c6b76d32bbd7e64d6a36ebef7e.jpg',
                'https://api.ericgu178.com//uploads/20210409/34bf42d01555216f55cdc01174f3d7a2.jpg',
                'https://api.ericgu178.com//uploads/20210409/71574631408796e99d579b4394bc6683.jpg'
            ],
        },{
            nickname:'慕容',
            avatar:'https://api.ericgu178.com//uploads/20210409/71574631408796e99d579b4394bc6683.jpg',
            content:'折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！',
            create_time:'2011-05-02',
            imglist:[
                'https://api.ericgu178.com/instagram/20210409/1617959254CNSYOliMz5e.jpg',
                'https://api.ericgu178.com/instagram/20210409/1617959259CNSYOliMz5e.jpg',
                'https://api.ericgu178.com/instagram/20210409/1617959264CNSYOliMz5e.jpg',
                'https://api.ericgu178.com//uploads/20210409/bd45a4c6b76d32bbd7e64d6a36ebef7e.jpg',
                'https://api.ericgu178.com//uploads/20210409/34bf42d01555216f55cdc01174f3d7a2.jpg',
                'https://api.ericgu178.com//uploads/20210409/71574631408796e99d579b4394bc6683.jpg'
            ],
        },{
            nickname:'小乔',
            avatar:'https://api.ericgu178.com/instagram/20210409/1617959259CNSYOliMz5e.jpg',
            content:'折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！',
            create_time:'2012-05-02',
            imglist:[
                'https://api.ericgu178.com/instagram/20210409/1617959254CNSYOliMz5e.jpg',
                'https://api.ericgu178.com/instagram/20210409/1617959259CNSYOliMz5e.jpg',
                'https://api.ericgu178.com/instagram/20210409/1617959264CNSYOliMz5e.jpg',
                'https://api.ericgu178.com//uploads/20210409/bd45a4c6b76d32bbd7e64d6a36ebef7e.jpg',
                'https://api.ericgu178.com//uploads/20210409/34bf42d01555216f55cdc01174f3d7a2.jpg',
                'https://api.ericgu178.com//uploads/20210409/71574631408796e99d579b4394bc6683.jpg'
            ],
        }]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(123)
    },
    
    preview(e) {
        wx.previewImage({
            current: e.currentTarget.dataset.src, // 当前显示图片的http链接
            urls: e.currentTarget.dataset.list // 需要预览的图片http链接列表
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