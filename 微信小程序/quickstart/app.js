//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  //从后台被打开(再次进入微信或再次打开小程序)
  onShow: function(options) {
      // Do something when show.
      
  },
  //进入后台(用户点击左上角关闭，或者按了设备 Home 键离开微信)
  onHide: function() {
      // Do something when hide.
  },
  //错误信息
  onError: function(msg) {
    console.log(msg)
  },
  globalData:{
    userInfo:null
  }
})