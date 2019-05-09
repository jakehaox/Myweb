
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    /*
    article:[
      {
        avatar:'../../images/avatar/1.jpg',
        date:'2019-05-09',
        title:'我是标题',
        img:'../../images/article/2.jpg',
        desc:'我是描述',
        stat:30,
        view:40
      },
      {
        avatar: '../../images/avatar/2.jpg',
        date: '2019-05-09',
        title: '我是标题',
        img: '../../images/article/3.jpg',
        desc: '我是描述2',
        stat: 20,
        view: 35
      }
    ]
    */
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    var article = [
      {
        avatar: '../../images/avatar/1.jpg',
        date: '2019-05-09',
        title: '我是标题',
        img: '../../images/article/2.jpg',
        desc: '我是描述',
        stat: 30,
        view: 40
      },
      {
        avatar: '../../images/avatar/2.jpg',
        date: '2019-05-09',
        title: '我是标题',
        img: '../../images/article/3.jpg',
        desc: '我是描述2',
        stat: 20,
        view: 35
      }
    ]
    this.setData({
      articles:articles
    })
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
    
  }
})