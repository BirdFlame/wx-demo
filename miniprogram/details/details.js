// details/details.js
const db = wx.cloud.database().collection("data")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: "",
    text: '',
    num:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // db.get({
    //   success: (res) => {
    //     console.log(res)
    //     const data = res.data
    //     this.setData({
    //       lists: data
    //     })
    //   }
    // })
    function getRandom(start, end, fixed = 0) {
      let differ = end - start
      let random = Math.random()
      return (start + differ * random).toFixed(fixed)
    }
    let index = getRandom(0, 65)
    this.setData({
      num: index
    })
    db.where({
      index: this.data.num
    }).get({
      success: (res) => {
        let content = res.data[0]
        this.setData({
          text: content.text,
          imgUrl: content.url
        })
      }
    })
    
    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: '转发'

    }
  },
  clickImg: function(e) {
    var imgUrl = this.data.imgUrl;
    wx.previewImage({
      urls: [imgUrl], //需要预览的图片http链接列表，注意是数组
      current: '', // 当前显示图片的http链接，默认是第一个
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  home_navigate(){
    function getRandom(start, end, fixed = 0) {
      let differ = end - start
      let random = Math.random()
      return (start + differ * random).toFixed(fixed)
    }
    let index = getRandom(0, 65)
    this.setData({
      num: index
    })
    db.where({
      index: this.data.num
    }).get({
      success: (res) => {
        let content=res.data[0]
        this.setData({
          text: content.text,
          imgUrl: content.url
        })
      }
    })
  }
  
})