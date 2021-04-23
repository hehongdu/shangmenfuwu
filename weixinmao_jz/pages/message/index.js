// pages/msgCenter/msgCenter.js
Page({
  data: {
    choseall: false,//是否全选
    choseshow: false,
    delectall:[],//删除列表
    msgList: [{
      time: '2020-07-28  9:00',
      content: '新型经济主体您好，您发布的供求信息刚刚已通过审核，可前往个人中心查看您的发布信息，感谢您的使用，期待能为您更好的服务新型经济主体您好，您发布的供求信息刚刚已通过审核，可前往个人中心查看您的发布信息，感谢您的使用，期待能为您更好的服务...',
    },
      {
        time: '2020-07-28  9:00',
        content: '新型经济主体您好，您发布的供求信息刚刚已通过审核，可前往个人中心查看您的发布信息，感谢您的使用，期待能为您更好的服务...',
      },
      {
        time: '2020-07-28  9:00',
        content: '新型经济主体您好，您发布的供求信息刚刚已通过审核，可前往个人中心查看您的发布信息，感谢您的使用，期待能为您更好的服务...',
      },
      {
        time: '2020-07-28  9:00',
        content: '新型经济主体您好，您发布的供求信息刚刚已通过审核，可前往个人中心查看您的发布信息，感谢您的使用，期待能为您更好的服务新型经济主体您好，您发布的供求信息刚刚已通过审核，可前往个人中心查看您的发布信息，感谢您的使用，期待能为您更好的服务...',
      },
      {
        time: '2020-07-28  9:00',
        content: '新型经济主体您好，您发布的供求信息刚刚已通过审核，可前往个人中心查看您的发布信息，感谢您的使用，期待能为您更好的服务...',
      },
      {
        time: '2020-07-28  9:00',
        content: '新型经济主体您好，您发布的供求信息刚刚已通过审核，可前往个人中心查看您的发布信息，感谢您的使用，期待能为您更好的服务...',
      },
      {
        time: '2020-07-28  9:00',
        content: '新型经济主体您好，您发布的供求信息刚刚已通过审核，可前往个人中心查看您的发布信息，感谢您的使用，期待能为您更好的服务新型经济主体您好，您发布的供求信息刚刚已通过审核，可前往个人中心查看您的发布信息，感谢您的使用，期待能为您更好的服务...',
      },
      {
        time: '2020-07-28  9:00',
        content: '新型经济主体您好，您发布的供求信息刚刚已通过审核，可前往个人中心查看您的发布信息，感谢您的使用，期待能为您更好的服务...',
      },
      {
        time: '2020-07-28  9:00',
        content: '新型经济主体您好，您发布的供求信息刚刚已通过审核，可前往个人中心查看您的发布信息，感谢您的使用，期待能为您更好的服务...',
      },
    ],
    msgLock: false,
    msgPage: 1,
    msgMoreState: 0,
  },
  onLoad: function (options) {
  },
  // 选择
  chosebind(e) {
    this.setData({
      choseshow: true,
    })
  },
  // 完成
  changeEdit(e) {
    this.setData({
      choseshow: false,
    })
  },
  //全选
  choseall(e) {
    var choseall = this.data.choseall
    console.log(choseall)
    if (choseall) {
      this.setData({
        choseall: false,
      })
      var msgList = this.data.msgList
      let newArr = msgList.map((item, index) => {
        return Object.assign(item, { checked: false })
      })
      this.setData({
        msgList: newArr,
        delectall:[],
      })
      console.log(msgList)
    } else {
      this.setData({
        choseall: true,
      })
      var msgList = this.data.msgList
      let newArr = msgList.map((item, index) => {
        return Object.assign(item, { checked: true })
      })
      this.setData({
        msgList: newArr,
        delectall: newArr,
      })
      console.log(msgList)
    }
  },
  //自选
  checkself(e) {
    var that = this;
    console.log(e)
    var index = e.currentTarget.dataset.index;
    var msgList = this.data.msgList;
    var check = msgList[index].checked;
    var age = 'msgList[' + index + '].checked';
    that.setData({
      [age]: !check
    })
    var delectall = msgList.filter((item, index) => {
      return item.checked === true;
    });
    console.log(delectall)
    that.setData({
      delectall: delectall,
    })
    if (msgList.length == delectall.length) {
      that.setData({
        choseall: true,
      })
    } else {
      that.setData({
        choseall: false,
      })
    }
    // console.log([age])
  },
  // 删除
  delect(e) {
    let self = this;
    var msgList = this.data.msgList;
    var delectall = this.data.delectall;
    console.log(delectall.length)
    if (delectall.length==0){
      wx.showToast({
        title: '请选择',
        icon:'none',
      })
      return;
    }

    wx.showModal({
      title: '提示',
      content: '确定要删除所选项吗',
      success(res) {
        if (res.confirm) {
          for (let i = msgList.length - 1; i >= 0; i--) {
            if (msgList[i].checked) {
              msgList.splice(i, 1);
            }
          }
          self.setData({
            msgList
          });
        }
      }
    });
  },

  // 获取消息列表
  getmsg() {
    if (this.data.msgLock) return;
    this.data.msgLock = true;
    let self = this;
    let msgList = this.data.msgList;

    this.setData({
      msgMoreState: 1
    });

    wx.request({
      url: app.globalData.baseUrl + "index/city_list",
      method: "POST",
      data: {
        page: this.data.msgPage
      },
      header: { "content-type": "application/x-www-form-urlencoded" },
      success(res) {
        console.log(res)
        let msgMoreState = 0;
        self.data.msgLock = false;

        if (res.data.data.length == 0) {
          msgMoreState = 2;
          self.data.msgLock = true;
        } else {
          for (let i = 0; i < res.data.data.length; i++) {
            var item = res.data.data[i];
            msgList.push(item);
          }
        }

        this.setData({
          msgMoreState,
          msgList
        });
      }
    });
  },
  // 查看更多
  checkMsgMore() {
    this.data.msgPage++;

    this.getmsg();
  },
})