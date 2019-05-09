//index.js
//获取应用实例
const app = getApp()

Page({
  /**
   * 页面初始数据
   * 
   */
  tapMooto:function(){
   
    wx.redirectTo({
      url: '/pages/article/article',
    })
  },
  
})
