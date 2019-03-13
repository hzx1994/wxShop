// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    circular: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    homeContent: [{
      "title": "酒水",
      "goods": [{
        "name": "牛二",
        "imgUrl": "/"
      }, {
        "name": "大韩",
        "imgUrl": "/"
      }, {
        "name": "哈啤",
        "imgUrl": "/"
      }]
    }, {
      "title": "酒水",
      "goods": [{
        "name": "牛二",
        "imgUrl": "/"
      }, {
        "name": "大韩",
        "imgUrl": "/"
      }, {
        "name": "哈啤",
        "imgUrl": "/"
      }]
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

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

  },
  clickMe: function(e) {
    console.log(e)
  }
})