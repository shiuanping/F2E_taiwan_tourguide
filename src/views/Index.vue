<template>
    <div id="App">
    <Banner></Banner>
    <main class="main">
        <div class="container">
          <router-view/>
        </div>
    </main>
</div>
</template>

<script>
// components
import Banner from '@/components/layout/Banner.vue'
// mixins
import { functionMixin } from '@/utils/mixins.js'
export default {
  data () {
    return {
      location: [{
        title: '台北市',
        cityName: '臺北市',
        picture: require('../assets/img/location/taipei.png')
      }, {
        title: '新北市',
        cityName: '新北市',
        picture: require('../assets/img/location/newtaipei.png')
      }, {
        title: '桃園市',
        cityName: '桃園市',
        picture: require('../assets/img/location/taoyuan.png')
      }, {
        title: '新竹市',
        cityName: '新竹市',
        picture: require('../assets/img/location/hsinchu.png')
      }, {
        title: '台    中',
        cityName: '臺中市',
        picture: require('../assets/img/location/taichung.png')
      }, {
        title: '南    投',
        cityName: '南投縣',
        picture: require('../assets/img/location/nantou.png')
      }, {
        title: '嘉    義',
        cityName: '嘉義縣',
        picture: require('../assets/img/location/chiayi.png')
      }, {
        title: '台    南',
        cityName: '臺北市',
        picture: require('../assets/img/location/taipei.png')
      }, {
        title: '高    雄',
        cityName: '新北市',
        picture: require('../assets/img/location/newtaipei.png')
      }, {
        title: '屏    東',
        cityName: '桃園市',
        picture: require('../assets/img/location/taoyuan.png')
      }, {
        title: '宜    蘭',
        cityName: '新竹市',
        picture: require('../assets/img/location/hsinchu.png')
      }, {
        title: '花    蓮',
        cityName: '臺中市',
        picture: require('../assets/img/location/taichung.png')
      }, {
        title: '台    東',
        cityName: '南投縣',
        picture: require('../assets/img/location/nantou.png')
      }, {
        title: '金門馬祖.澎湖',
        cityName: '嘉義縣',
        picture: require('../assets/img/location/chiayi.png')
      }],
      restaurant: [],
      activity: [],
      locationPage: 0
    }
  },
  components: {
    Banner
  },
  mixins: [functionMixin],
  methods: {
    update () {
      fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$top=60&$format=JSON').then((res) => res.json()).then((res) => {
        this.getRandomData(res, 10, 'restaurant')
      })
      fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$top=60&$format=JSON').then((res) => res.json()).then((res) => {
        this.getRandomData(res, 4, 'activity')
      })
    }
  },
  mounted () {
    this.update()
  }
}

</script>
