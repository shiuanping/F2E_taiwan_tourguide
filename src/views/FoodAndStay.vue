<template>
    <div id="App">
    <Banner :bannerType="'stay'"></Banner>
    <main class="main">
        <div class="container">
            <section>
                <h3 class="title"><Square></Square>熱門美食</h3>
                <div class="card_container">
                    <VertCard v-for="(item, index) in restaurant" :key="index" :data="item"  @openModal="getModalStatus" @detail="getDetail"></VertCard>
                </div>
            </section>
            <section>
                <h3 class="title"><Square></Square>推薦住宿</h3>
                <div class="card_container">
                    <VertCard v-for="(item, index) in stay" :key="index" :data="item" @openModal="getModalStatus" @detail="getDetail"></VertCard>
                </div>
            </section>
        </div>
    </main>
</div>
<transition name="modal">
  <InfoModal v-if="openModal" @closeModal="getModalStatus" :data="detail"></InfoModal>
</transition>
</template>

<script>
import Banner from '@/components/layout/Banner.vue'
import Square from '@/components/icons/Square.vue'
import VertCard from '@/components/VertCard.vue'
import InfoModal from '@/components/InfoModal.vue'
// mixins
import { functionMixin } from '@/utils/mixins.js'
export default {
  data () {
    return {
      stay: [],
      restaurant: [],
      openModal: false,
      detail: {}
    }
  },
  components: {
    Banner, VertCard, Square, InfoModal
  },
  mixins: [functionMixin],
  methods: {
    update () {
      fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$top=30&$format=JSON').then((res) => res.json()).then((res) => {
        this.getRandomData(res, 10, 'restaurant')
      })
      fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$top=30&$format=JSON').then((res) => res.json()).then((res) => {
        this.getRandomData(res, 10, 'stay')
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
