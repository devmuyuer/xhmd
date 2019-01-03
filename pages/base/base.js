// pages/base/base.js
var imageUtil = require('../../utils/util.js');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/statics/images/banner01.jpg',
      '/statics/images/banner02.jpg'
    ],
    baseitems: [
      {
        "id": "1",
        "imageUrl": "/statics/images/base1.jpg",
        "content": "种植基地"
      },
      {
        "id": "2",
        "imageUrl": "/statics/images/base2.jpg",
        "content": "种植基地"
      },
      {
        "id": "3",
        "imageUrl": "/statics/images/base3.jpg",
        "content": "种植基地"
      },
      {
        "id": "4",
        "imageUrl": "/statics/images/base4.jpg",
        "content": "种植基地"
      },
      {
        "id": "5",
        "imageUrl": "/statics/images/base5.jpg",
        "content": "成熟的种子"
      },      
    ],
  
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
  
  },

  imageLoad: function (e) {
    var imageSize = imageUtil.imageUtil(e)
    this.setData({
      imagewidth: imageSize.imageWidth,
      imageheight: imageSize.imageHeight
    })
  },
  imageLoad2: function (e) {
    var imageSize = imageUtil.imageUtil(e)
    this.setData({
      imagewidth2: imageSize.imageWidth,
      imageheight2: imageSize.imageHeight
    })
  }
})