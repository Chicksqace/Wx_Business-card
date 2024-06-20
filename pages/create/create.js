// pages/create/create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowMore: false,
    moreIcon: '../../img/create/more.png'
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
  clickMore() {
    this.setData({
      isShowMore: !this.data.isShowMore,
      moreIcon: this.data.isShowMore ? '../../img/create/more.png' : '../../img/create/more2.png'
    })
  },
  onInput(e) {
    console.log(e);
  },
  onSwitch(e) {
    console.log(e);
  }
})