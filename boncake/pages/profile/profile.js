// pages/profile/profile.js
Page({
  onMusicTap: function () {
    console.log(111);
    //1:获取状态
    var isp = this.data.isPlayingMusic;
    //2:如果当前背景音乐已经在播放
    if (isp) {
      wx.pauseBackgroundAudio();
      this.setData({ isPlayingMusic: false })
    } else {
      wx.playBackgroundAudio({
        dataUrl: 'http://127.0.0.1:3000/bg.mp3',
      });
      this.setData({ isPlayingMusic: true })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    isPlayingMusic: false
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