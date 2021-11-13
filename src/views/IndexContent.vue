<template>
    <Loading v-if="isLoading"></Loading>
    <div v-if="!isLoading">
      <section class="hot_location">
          <h3 class="title"><Triangle></Triangle>熱門城市</h3>
          <div class="hot_location_content">
              <button class="btn icon_btn" v-if="locationPage==7" @click="locationPage=0">
                  <i class="fas fa-caret-left"></i>
              </button>
              <ImageCard v-for="(item, index) in location.slice(locationPage, locationPage+7)" :value="item.value" :Key="index" :class="[index%3 == 0 ? 'card_col_odd' : 'card_col_even']" :location="item"></ImageCard>
              <button class="btn icon_btn" v-if="locationPage==0" @click="locationPage=7">
                  <i class="fas fa-caret-right"></i>
              </button>
          </div>
      </section>
      <section class="hot_activity">
          <h3 class="title"><Triangle></Triangle>熱門活動</h3>
          <div class="card_container">
              <HorCard  v-for="(item, index) in activity" :key="index" :data="item" @openModal="getModalStatus" @detail="getDetail"></HorCard>
          </div>
      </section>
      <section class="hot_food">
          <h3 class="title"><Square></Square>熱門餐飲</h3>
          <div class="card_container">
              <VertCard v-for="(item, index) in restaurant" :key="index" :data="item" @openModal="getModalStatus" @detail="getDetail" ></VertCard>
          </div>
      </section>
      <transition name="modal">
        <InfoModal v-if="openModal" @closeModal="getModalStatus" :data="detail"></InfoModal>
      </transition>
    </div>
</template>

<script>
// components
import Triangle from '@/components/icons/Triangle.vue'
import Square from '@/components/icons/Square.vue'
import ImageCard from '@/components/ImageCard.vue'
import HorCard from '@/components/HorCard.vue'
import VertCard from '@/components/VertCard.vue'
import Loading from '@/components/Loading.vue'
import InfoModal from '@/components/InfoModal.vue'
// mixins
import { functionMixin } from '@/utils/mixins.js'
export default {
  data () {
    return {
      location: [{
        title: '台北市',
        value: 'Taipei',
        picture: require('../assets/img/location/taipei.png')
      }, {
        title: '新北市',
        value: 'NewTaipei',
        picture: require('../assets/img/location/newtaipei.png')
      }, {
        title: '桃園市',
        value: 'Taoyuan',
        picture: require('../assets/img/location/taoyuan.png')
      }, {
        title: '新竹市',
        value: 'Hsinchu',
        picture: require('../assets/img/location/hsinchu.png')
      }, {
        title: '台    中',
        value: 'Taichung',
        picture: require('../assets/img/location/taichung.png')
      }, {
        title: '南    投',
        value: 'NantouCounty',
        picture: require('../assets/img/location/nantou.png')
      }, {
        title: '嘉    義',
        value: 'Chiayi',
        picture: require('../assets/img/location/chiayi.png')
      }, {
        title: '台    南',
        value: 'Tainan',
        picture: require('../assets/img/location/Tainan.png')
      }, {
        title: '高    雄',
        value: 'Kaohsiung',
        picture: require('../assets/img/location/Kaohsiung.png')
      }, {
        title: '屏    東',
        value: 'PingtungCounty',
        picture: require('../assets/img/location/PingtungCounty.png')
      }, {
        title: '宜    蘭',
        value: 'YilanCounty',
        picture: require('../assets/img/location/YilanCounty.png')
      }, {
        title: '花    蓮',
        value: 'HualienCounty',
        picture: require('../assets/img/location/HualienCounty.png')
      }, {
        title: '台    東',
        value: 'TaitungCounty',
        picture: require('../assets/img/location/TaitungCounty.png')
      }, {
        title: '金門馬祖.澎湖',
        value: 'PenghuCounty',
        picture: require('../assets/img/location/Sotojima.png')
      }],
      restaurant: [],
      activity: [],
      locationPage: 0,
      openModal: false,
      detail: {},
      isLoading: true
    }
  },
  components: {
    ImageCard, HorCard, VertCard, Triangle, Square, InfoModal, Loading
  },
  mixins: [functionMixin],
  methods: {
    update () {
      this.isLoading = true
      fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$format=JSON', { headers: this.GetAuthorizationHeader() }).then((res) => res.json()).then((res) => {
        this.getRandomData(res, 10, 'restaurant')
      })
      fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$format=JSON', { headers: this.GetAuthorizationHeader() }).then((res) => res.json()).then((res) => {
        this.getRandomData(res, 4, 'activity')
        this.isLoading = false
      })
    },
    getModalStatus (status) {
      this.openModal = status
      if (this.openModal) {
        document.body.className = 'modal_open'
      } else {
        document.body.className = ''
      }
    },
    getDetail (data) {
      this.detail = data
    }
  },
  mounted () {
    this.update()
  }
}

</script>
