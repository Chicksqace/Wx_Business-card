Component({

  data: ({
    defIcon: "../../img/index/profile.jpg",
    icon: "",
    typeTel: false,
    typeAds: false,
    typeSwitch: false,
    entity: {},
  }),
  options: {

  },

  properties: {
    type: String,
    title: String,
    isShowIcon: {
      type: Boolean,
      value: true
    }
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached() {
      this.setData({
        typeTel: this.data.type == "tel",
        typeAds: this.data.type == 'address',
        typeSwitch: this.data.type == "switch"
        // title: this.data.title
      })
      switch (this.data.title) {
        case '姓名':
          this.setData({
            icon: '../../img/p-input/name.png'
          })
          break;
        case '职务':
          this.setData({
            icon: '../../img/p-input/office.png'
          })
          break;
        case '公司':
          this.setData({
            icon: '../../img/p-input/company.png'
          })
          break;
        case '行业':
          this.setData({
            icon: '../../img/p-input/industry.png'
          })
          break;
        case '电话':
          this.setData({
            icon: '../../img/p-input/tel.png'
          })
          break;
        case '邮箱':
          this.setData({
            icon: '../../img/p-input/email.png'
          })
          break;
        case '地址':
          this.setData({
            icon: '../../img/p-input/Address.png'
          })
          break;

        default:
          break;
      }

    },
    moved() {},
    detached() {},
  },
  methods: {
    //获取手机号
    //todo 没有获取手机号的权限
    onGotTel(e) {
      console.log(e.detail.errMsg)
      console.log(e.detail.iv)
      console.log(e.detail.encryptedData)
    },
    //获取地址
    clickNavigation() {
      let that = this
      wx.chooseLocation({
        success: function (res) {
          if (res.errMsg == 'chooseLocation:ok') {
            let address = 'entity.addrDetail'
            let latitude = 'entity.latitude'
            let longitude = 'entity.longitude'
            that.setData({
              [address]: res.address,
              [latitude]: res.latitude,
              [longitude]: res.longitude
            })
          }
        }
      })
    },
    onInput(e) {
      this.triggerEvent('onInput', e.detail.value)
    },
    onSwitchChange(e) {
      this.triggerEvent('onSwitchChange', e.detail.value)
    }
  }
})