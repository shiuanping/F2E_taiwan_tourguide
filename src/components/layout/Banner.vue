<template>
    <div class="banner"  :style="{background: `url(${changeBanner(bannerType)}) center / cover`}">
        <div class="banner_inner">
            <div class="container">
                <h2>Welcome to <span>Taiwan°</span></h2>
                <p>台北、台中、台南、屏東、宜蘭……遊遍台灣</p>
                <div class="search">
                    <div class="search_keywords">
                        <input class="input" type="text" placeholder="搜尋關鍵字" v-model="keyWord">
                            <router-link  :to="{ name: 'Search', query: {searchType:searchType,keyWord:keyWord,type:type, city:city } }">
                              <button class="btn icon_btn">
                                  <i class="fas fa-search"></i>
                              </button>
                            </router-link>
                    </div>
                    <div class="search_type">
                        <select class="search_type_selection selection" v-model="type">
                            <option v-for="(item, index) in typeSelection" :key="index" :value="item.value">{{item.title}}</option>
                        </select>
                        <select class="search_location_selection selection" v-model="city" :disabled="type == ''" >
                            <option value="">不分縣市</option>
                            <option v-for="(item, index) in citySelection" :key="index" :value="item.value">{{item.title}}</option>
                        </select>
                        <button class="btn icon_btn" @click="getGeolocation" >
                            <i class="fas fa-map-marker-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { functionMixin } from '@/utils/mixins.js'
export default {
  mixins: [functionMixin],
  props: {
    data: Object,
    bannerType: String
  },
  data () {
    return {
      keyWord: '',
      type: 'ScenicSpot',
      city: ''
    }
  },
  computed: {
    searchType () {
      return (this.city ? 'city' : 'other')
    }
  },
  methods: {
    getGeolocation () {
      navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError)
    },
    geoSuccess (pos) {
      const crd = pos.coords
      const user = {
        latitude: crd.latitude,
        longitude: crd.longitude
      }
      const min = {
        value: '',
        distance: 9999999
      }
      for (const city of this.citySelection) {
        const distance = Math.pow((city.latitude - user.latitude), 2) + Math.pow((city.longitude - user.longitude), 2)
        if (distance < min.distance) {
          min.value = city.value
          min.distance = distance
        }
      }
      this.city = min.value
    },
    geoError (err) {
      console.warn('ERROR(' + err.code + '): ' + err.message)
    },
    changeBanner (bannerType) {
      const now = new Date()
      const hour = now.getHours()
      const time = (hour < 18) || (hour > 6) ? 'day' : 'night'
      switch (bannerType) {
        case 'stay':
          return require('../../assets/img/banner/stay.png')
        default:
          if (time === 'day') {
            return require('../../assets/img/banner/day.png')
          } else {
            return require('../../assets/img/banner/night.jpg')
          }
      }
    }
  },
  mounted () {
    this.changeBanner(this.bannerType)
  }
}
</script>
