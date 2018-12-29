//index.js
//获取应用实例
const app = getApp()
Page({
  /*点击全部蛋糕跳转到logs*/
  handle1:function(e){
   // console.log(e);
    var pid=e.target.dataset.pid;
    wx.reLaunch({
      url:'/pages/logs/logs?pid='+pid,
    })
  }, 
  /*点击页面蛋糕的时候跳转到details*/
  handleJump:function(e){
    //var id = e.target.dataset.id;
    //console.log(e);
    wx.navigateTo({
      url: '/pages/details/details?pid=' ,
    });
  },
  /**
   * 页面的初始数据
   */
  data: {

    beforeColor: "white",//指示点颜色
    //轮播图片
    list: [
      { id: 1, img_url:"http://127.0.0.1:3000/img/banner_1.png"},
      { id: 2, img_url:"http://127.0.0.1:3000/img/banner_2.png" },
      { id: 3, img_url:"http://127.0.0.1:3000/img/banner_3.png" },
      { id: 4, img_url:"http://127.0.0.1:3000/img/banner_4.png" },
      { id: 5, img_url:"http://127.0.0.1:3000/img/banner_5.png" },
      { id: 6, img_url:"http://127.0.0.1:3000/img/banner_6.png" }    
    ],

    navlist: [
      {
      id: 1,
      img_url:"http://127.0.0.1:3000/img/34.jpg",title:"TO 热卖榜单",                       NavList:[
        {
        id:1,
        img_url:"http://127.0.0.1:3000/img/9.jpg",
        title:"冬日小镇",price: "468.00", pound:"3" 
        },
        { id: 2, img_url: "http://127.0.0.1:3000/img/10.jpg", title:"降雪",price: "468.00", pound:"3" },
        { id: 3, img_url: "http://127.0.0.1:3000/img/11.jpg", title:"草莓炸弹",price: "2888", pound: "20" },
        { id: 4, img_url: "http://127.0.0.1:3000/img/12.jpg", title: "踏雪而来", price: "2888", pound: "20" }
        ]
      },
      {
        id: 2, img_url: "http://127.0.0.1:3000/img/37.jpg", title: "主厨推进", NavList: [
          { id: 1, img_url: "http://127.0.0.1:3000/img/8.jpg", title: "平安树", price: "318.00", pound: "7" },
          { id: 2, img_url: "http://127.0.0.1:3000/img/12.jpg", title: "踏雪而来", price: "318.00", pound: "7" },
          { id: 3, img_url: "http://127.0.0.1:3000/img/14.jpg", title: "才貌双全", price: "318.00", pound: "7" }]
      }
      ],
    windowHeight: 654,
    maxtime: "",
    isHiddenLoading: true,
    isHiddenToast: true,
    dataList: {},
    countDownHour: 0,
    countDownMinute:0,
    countDownSecond: 0
    
  },

 



  //事件处理函数
  bindViewTap: function () {
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      windowHeight: wx.getStorageSync('windowHeight')
    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // 页面渲染完成后 调用
  onReady: function () {
    var totalSecond = parseInt(1505540080 - Date.parse(new Date()) / 3600);

    var interval = setInterval(function () {
      // 秒数
      var second = totalSecond;

      // 天数位
      var day = Math.floor(second / 3600 / 24);
      var dayStr = day.toString();
      if (dayStr.length == 1) dayStr = '0' + dayStr;

      // 小时位
      var hr = Math.floor((second - day * 3600 * 24) / 3600);
      var hrStr = hr.toString();
      if (hrStr.length == 1) hrStr = '0' + hrStr;

      // 分钟位
      var min = Math.floor((second - day * 3600 * 24 - hr * 3600) / 60);
      var minStr = min.toString();
      if (minStr.length == 1) minStr = '0' + minStr;

      // 秒位
      var sec = second - day * 3600 * 24 - hr * 3600 - min * 60;
      var secStr = sec.toString();
      if (secStr.length == 1) secStr = '0' + secStr;

      this.setData({
        countDownDay: dayStr,
        countDownHour: hrStr,
        countDownMinute: minStr,
        countDownSecond: secStr,
      });
      totalSecond--;
      if (totalSecond < 0) {
        clearInterval(interval);
        wx.showToast({
          title: '活动已结束',
        });
        this.setData({
          countDownHour: '00',
          countDownMinute: '00',
          countDownSecond: '00',
        });
      }
    }.bind(this), 1000);
  },

  //cell事件处理函数
  bindCellViewTap: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../babyDetail/babyDetail?id=' + id
    });
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

