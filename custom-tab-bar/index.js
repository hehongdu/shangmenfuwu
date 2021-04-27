Component({
    data: {
        selected: 0,
        color: "#6e6d6b",
        selectedColor: "#42BE9C",
        borderStyle: "white",
        backgroundColor: "#fff",
        "box-shadow": "0 0 6px 0",
        roleId: '',
        // 店铺端
        client:[{
            "pagePath": "/weixinmao_jz/pages/index/index",
            "text": "服务",
            "iconPath": "/weixinmao_jz/resource/images/nav/home-off.png",
            "selectedIconPath": "/weixinmao_jz/resource/images/nav/home-on.png"
        },{
            "pagePath": "/weixinmao_jz/pages/visit/index",
            "text": "技师",
            "iconPath": "/weixinmao_jz/resource/images/nav/jishi-off.png",
            "selectedIconPath": "/weixinmao_jz/resource/images/nav/jishi-on.png"
        },{
            "pagePath": "/weixinmao_jz/pages/myorder/index",
            "text": "订单",
            "iconPath": "/weixinmao_jz/resource/images/nav/order-off.png",
            "selectedIconPath": "/weixinmao_jz/resource/images/nav/order-on.png"
        },{
            "pagePath": "/weixinmao_jz/pages/user/index",
            "text": "我的",
            "iconPath": "/weixinmao_jz/resource/images/nav/me-off.png",
            "selectedIconPath": "/weixinmao_jz/resource/images/nav/me-on.jpg"
        }],
        // 商家端
        business: [{
          "pagePath": "/weixinmao_jz/pages/shop/shopPage/index",
          "text": "我的",
          "iconPath": "/weixinmao_jz/resource/images/nav/me-off.png",
          "selectedIconPath": "/weixinmao_jz/resource/images/nav/me-on.jpg"
        }],
        list: []
    },
    attached() {
      // wx.request({
      //   method: 'get',
      //   url: `https://restapi.amap.com/v3/ip`,
      //   data: {
      //     key:'6551635c34a44f7879ea17354b167f48'
      //   },
      //   success:res=>{
            // var i = res.data.city,o = res.data
            if (1) {
                this.setData({
                  list: this.data.client
                })
            } else {
                this.setData({
                  list: this.data.business
                })
            }
    //     }
    // })
      
    },
    methods: {
      switchTab(e) {
        const data = e.currentTarget.dataset
        const url = data.path
        wx.switchTab({ url })
        this.setData({
          selected: data.index
        })
      }
    },
})