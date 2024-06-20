Component({
  data: ({
    headUrl: "../../img/index/profile.jpg",

  }),
  options: {

  },

  properties: {
    type: String
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached() {


    },
    moved() {},
    detached() {},
  },
  methods: {
    clickCamera: function () {
      let that=this
      wx.chooseImage({
        count: 1, // 最多可以选择的图片张数，默认9
        sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
        sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
        success: function (res) {
          // success
          console.log(res);
          if (res.errMsg == 'chooseImage:ok') {
            that.setData({
              headUrl: res.tempFilePaths[0]
            })
          }
        }
      })
    }
  }
})