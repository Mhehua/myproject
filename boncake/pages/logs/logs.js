//logs.js
const app=getApp();
Page({
  handleJump: function (e) {
    //获取扩展属性值id
    var id = e.target.dataset.id;
    console.log(id);
    //判断跳转
    if (id==1) {
      wx.navigateTo({//switchTab跳转
        url: '/pages/details/details? id='+id,
        
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    //轮播图片
    list: [
      {id:1,img_url:"http://127.0.0.1:3000/img/15.jpg" },
      {id:2,img_url:"http://127.0.0.1:3000/img/15.jpg"}
      ],
    navlist: [
      { id: 1, img_url: "http://127.0.0.1:3000/img/5.jpg", title: "梦幻之树树叔石哥好看帅哥快", price: "468.00", pound: "3" },
      { id: 2, img_url: "http://127.0.0.1:3000/img/6.jpg", title: "心愿树", price: "468.00", pound: "3" },
      { id: 3, img_url: "http://127.0.0.1:3000/img/7.jpg", title: "圣诞树", price: "2888", pound: "20" },
      { id: 4, img_url: "http://127.0.0.1:3000/img/7.jpg", title: "圣诞树", price: "2888", pound: "20" },
      { id: 5, img_url: "http://127.0.0.1:3000/img/9.jpg", title: "圣诞树", price: "388", pound: "3" },
      { id: 6, img_url: "http://127.0.0.1:3000/img/10.jpg", title: "圣诞树", price: "388", pound: "3" },
      { id: 7, img_url: "http://127.0.0.1:3000/img/11.jpg", title: "圣诞树", price: "388", pound: "3" },
      { id: 8, img_url: "http://127.0.0.1:3000/img/16.jpg", title: "圣诞树", price: "388", pound: "3" }      
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
    
  }
})