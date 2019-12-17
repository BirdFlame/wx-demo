// miniprogram/home/home.js
const db = wx.cloud.database().collection("data")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl:"https://6779-gyx-cje9i-1300924084.tcb.qcloud.la/bg/4ecb6dc0440a6d6e3142d06c4d250de760132c1655805-3rAj5n_fw658.gif?sign=7516b4f27c2a01d602748a26c98fc487&t=1576552375",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },
  /**
   * 其它事件
   */
  home_navigate(){
    wx.navigateTo({
      url: '../details/details',
    })
  }
})