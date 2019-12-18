// miniprogram/home/home.js
const db = wx.cloud.database().collection("data")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },
  onShareAppMessage: function() {


  },
  /**
   * 其它事件
   */
  home_navigate() {
    wx.navigateTo({
      url: '../details/details',
    })
  }
})