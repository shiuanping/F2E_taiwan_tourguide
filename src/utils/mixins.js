import jsSHA from 'jssha'
export const functionMixin = {
  data () {
    return {
      filterText: '',
      noImageUrl_s: require('../assets/img/noImage_s.jpg'),
      noImageUrl_m: require('../assets/img/noImage_m.jpg'),
      noImageUrl_l: require('../assets/img/noImage_l.jpg'),
      citySelection: [{
        title: '基隆市',
        value: 'Keelung',
        longitude: 121.746248,
        latitude: 25.130741
      }, {
        title: '臺北市',
        value: 'Taipei',
        longitude: 121.5598,
        latitude: 25.09108
      }, {
        title: '新北市',
        value: 'NewTaipei',
        longitude: 121.6739,
        latitude: 24.91571
      }, {
        title: '桃園市',
        value: 'Taoyuan',
        longitude: 121.2168,
        latitude: 24.93759
      }, {
        title: '新竹縣',
        value: 'HsinchuCounty',
        longitude: 121.1252,
        latitude: 24.70328
      }, {
        title: '新竹市',
        value: 'Hsinchu',
        longitude: 120.9647,
        latitude: 24.80395
      }, {
        title: '苗栗縣',
        value: 'MiaoliCounty',
        longitude: 120.9417,
        latitude: 24.48927
      }, {
        title: '臺中市',
        value: 'Taichung',
        longitude: 120.9417,
        latitude: 24.23321
      }, {
        title: '南投縣',
        value: 'NantouCounty',
        longitude: 120.9876,
        latitude: 23.83876
      }, {
        title: '彰化縣',
        value: 'ChanghuaCounty',
        longitude: 120.4818,
        latitude: 23.99297
      }, {
        title: '雲林縣',
        value: 'YunlinCounty',
        longitude: 120.3897,
        latitude: 23.75585
      }, {
        title: '臺南市',
        value: 'Tainan',
        longitude: 120.2513,
        latitude: 23.1417
      }, {
        title: '高雄市',
        value: 'Kaohsiung',
        longitude: 120.666,
        latitude: 23.01087
      }, {
        title: '嘉義縣',
        value: 'ChiayiCounty',
        longitude: 120.574,
        latitude: 23.45889
      }, {
        title: '嘉義市',
        value: 'Chiayi',
        longitude: 120.4473,
        latitude: 23.47545
      }, {
        title: '屏東縣',
        value: 'PingtungCounty',
        longitude: 120.62,
        latitude: 22.54951
      }, {
        title: '宜蘭縣',
        value: 'YilanCounty',
        longitude: 121.7195,
        latitude: 24.69295
      }, {
        title: '花蓮縣',
        value: 'HualienCounty',
        longitude: 121.3542,
        latitude: 23.7569
      }, {
        title: '臺東縣',
        value: 'TaitungCounty',
        longitude: 120.9876,
        latitude: 22.98461
      }, {
        title: '金門縣',
        value: 'KinmenCounty',
        longitude: 118.3186,
        latitude: 24.43679
      }, {
        title: '澎湖縣',
        value: 'PenghuCounty',
        longitude: 121.746248,
        latitude: 25.130741
      }, {
        title: '連江縣',
        value: 'LienchiangCounty',
        longitude: 119.5397,
        latitude: 26.19737
      }],
      typeSelection: [{
        title: '景點',
        value: 'ScenicSpot'
      }, {
        title: '美食',
        value: 'Restaurant'
      }, {
        title: '住宿',
        value: 'Hotel'
      }, {
        title: '活動',
        value: 'Activity'
      }]
    }
  },
  methods: {
    GetAuthorizationHeader () {
      const AppID = '0b6ea8bd5f33451783f7bc0450839ce1'
      const AppKey = 'xonE55F8FKe6uhi060kOw9O4KVc'
      const GMTString = new Date().toGMTString()
      const ShaObj = new jsSHA('SHA-1', 'TEXT', { encoding: 'UTF8' })
      ShaObj.setHMACKey(AppKey, 'TEXT')
      ShaObj.update('x-date: ' + GMTString)
      const HMAC = ShaObj.getHMAC('B64')
      const Authorization = 'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"'
      return { Authorization: Authorization, 'X-Date': GMTString }
    },
    getRandomData (data, count, dataVariable) {
      const copy = [...data]
      for (let i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * copy.length)
        this[dataVariable].push(copy.splice(index, 1)[0])
      }
    },
    getData (url, dataVariable) {
      fetch(url, { headers: this.GetAuthorizationHeader() }).then((res) => res.json()).then((res) => {
        this[dataVariable] = res
        this.isLoading = true
      })
    },
    handleAddress (address) {
      if (!address) {
        return '無'
      }
      const addressAry = address.match(/[\u4e00-\u9fa5]{2,}?(縣|區|市|鄉|鎮|村)/g)
      if (!addressAry) {
        return address
      } else if (addressAry.length === 1) {
        return addressAry[0]
      } else {
        return addressAry[0] + ' ' + addressAry[1]
      }
    },
    haveData (object) {
      if (!object) {
        return 0
      }
      return (Object.keys(object)).length
    }
  }
}
