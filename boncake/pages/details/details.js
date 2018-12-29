// pages/details/details.js
const app=getApp();
Page({
  sum_1:function(e){
    var i=this.data.value;
    if(i>1){
      i--;
    console.log(i);
    this.setData({
      value:i
    })
    }else{
      wx.showToast({
        title: '此商品最少购买一件',
        icon:"none"  
      })
      setTimeout(function(){
        wx.hideToast();
      },3000)
    }  
  },
  sum_3: function (e) {
    var i = this.data.value;
    i++;
    console.log(i);
    this.setData({
      value: i
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
      value:1,
      // did:"",
      list:[
        {id:1,img_url:"http://127.0.0.1:3000/img/details_bn1.jpg"},
        {id:2,img_url:"http://127.0.0.1:3000/img/details_bn2.jpg"},
        {id:3,img_url: "http://127.0.0.1:3000/img/details_bn3.jpg"}        
      ],
      //判断用户是否选择
      sizeSeleted:false,
      navList: [{
        id: 1,
        title: "Winter  Town",
        title2: "含七套餐具",
        title3: "适合3-5人食用",
        title4: "需要提前5小时预订",
        name: "冬日小镇",
        price: "378.00",
        size: "7",
        img_url:"http://127.0.0.1:3000/img/7.jpg",
        img_url2: "http://127.0.0.1:3000/img/level.png ",
        img_url3: "http://127.0.0.1:3000/img/level-icon.png",
        img_url4: "http://127.0.0.1:3000/img/details.jpg",
        img_url5: "http://127.0.0.1:3000/img/details_2.jpg",
        img_url6: "http://127.0.0.1:3000/img/details_3.jpg",
        img_url7: "http://127.0.0.1:3000/img/contact-icon.png"
      }],
      
      ds: false,  //这是遮罩弹框，开始先定义false
      product:{}  
  },
  JumpShopping:function(e){
    if(this.data.sizeSeleted){
    var navList = this.data.navList[0];
    var product = this.data.product;
    product.id = navList.id;
    product.name=navList.name;
    product.img_url = navList.img_url;
    product.price = navList.price;
    product.size = navList.size;
    product.value = this.data.value;
    app.globalData.userCart.unshift(product)
    console.log(app.globalData.userCart)
      wx.showToast({
        title: '加购成功',
      })
    }else{
      wx.showToast({
        title: '请选择尺寸',
        icon:"none"
      })
      setTimeout(function(){
        wx.hideToast()
      },1500)      
    };
  },
  //用户点击尺寸按钮
  seletedSize(){
    this.setData({
      sizeSeleted:true
    })
  },

  //点击打开定义个函数
  open(){
    this.setData({
      ds: true
    })
  },
  //点击关闭函数
  close(){
    this.setData({
      ds:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.pid)
    // this.setData({ did: options.pid})
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


// // 增加数量 
// addCount(e) { 
//   const index = e.currentTarget.dataset.index;
//    let carts = this.data.carts;
//     let num = carts[index].num; 
//     num = num + 1; carts[index].num = num; this.setData({ carts: carts }); this.getTotalPrice(); },
//      // 减少数量 
//      minusCount(e){ const index = e.currentTarget.dataset.index;
//       let carts = this.data.carts; 
//       let num = carts[index].num; if(num <= 1){ return false; } num = num - 1; carts[index].num = num; this.setData({ carts: carts }); 
//       this.getTotalPrice(); }