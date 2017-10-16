//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
   onShareAppMessage: function () {
    return {
      title: '战舰世界老玩家回馈',
      path: '/page/user?id=123'
    }
  },
  viewTap: function() {
   wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function(){
      wx.hideLoading()
    },2000)
    wx.showModal({
      title: '提示',
      content: '恭喜获得,10000元大礼包',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function(res) {
        console.log(res.tapIndex)
      },
      fail: function(res) {
        console.log(res.errMsg)
      }
    })
  }
})
