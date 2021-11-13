<template>
  <NotFound v-if="!haveData(data) && isLoading"></NotFound>
  <Loading v-if="!isLoading" ></Loading>
  <section class="card_content" v-if="isLoading && haveData(data)"  >
    <h3 class="title" v-if="titleType == 'city'"><Triangle></Triangle>{{displayCityName(this.currentCity)}}</h3>
    <h3 class="title" v-if="titleType == 'other'" ><Square></Square>{{displayTypeName(this.currentType)}}</h3>
    <div class="card_container">
        <VertCard v-for="(item, index) in data.slice(this.currentPage * 20, pageEndIndex)" :key="index"  :data="item"  @openModal="getModalStatus" @detail="getDetail" ></VertCard>
    </div>
  </section>
  <Pagination v-if="haveData(data) && isLoading" :endStatus="lastPageStatus" @currentPage="onCurrentPage" ></Pagination>
  <transition name="modal">
      <InfoModal v-if="openModal" @closeModal="getModalStatus" :data="detail"></InfoModal>
  </transition>
</template>

<script>
// components
import Triangle from '@/components/icons/Triangle.vue'
import Square from '@/components/icons/Square.vue'
import VertCard from '@/components/VertCard.vue'
import Pagination from '@/components/Pagination.vue'
import InfoModal from '@/components/InfoModal.vue'
import Loading from '@/components/Loading.vue'
import NotFound from '@/components/NotFound.vue'
// mixins
import { functionMixin } from '@/utils/mixins.js'
export default {
  props: {
    searchType: String,
    keyWord: String,
    type: String,
    city: String,
    number: Number
  },
  emits: ['changePage'],
  data () {
    return {
      data: [],
      dataUrl: '',
      currentPage: 0,
      titleType: '',
      currentCity: '',
      currentType: '',
      currentKeyWord: '',
      openModal: false,
      detail: {},
      isLoading: false
    }
  },
  components: {
    Triangle, Square, Pagination, VertCard, InfoModal, Loading, NotFound
  },
  mixins: [functionMixin],
  computed: {
    pageEndIndex () {
      return (this.currentPage * 20 + 20 < this.data.length ? this.currentPage * 20 + 20 : this.data.length)
    },
    lastPageStatus () {
      return this.currentPage * 20 + 20 >= this.data.length
    }
  },
  watch: {
    $route () {
      this.update()
    }
  },
  methods: {
    update () {
      if (this.haveData(this.$route.query) === 0) {
        return
      }
      this.isLoading = false
      this.titleType = this.$route.query.searchType
      this.currentType = this.$route.query.type
      this.currentCity = this.$route.query.city
      this.currentKeyWord = this.$route.query.keyWord
      this.dataUrl = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/' + this.currentType + (this.currentCity ? ('/' + this.currentCity) : '') + '?$format=JSON'
      fetch(this.dataUrl, { headers: this.GetAuthorizationHeader(), CacheControl: 'no-store' }).then((res) => res.json()).then((res) => {
        if (this.currentKeyWord) {
          res = res.filter(item => item.Name.includes(this.currentKeyWord))
        }
        this.data = res
        this.isLoading = true
      })
    },
    onCurrentPage (number) {
      this.currentPage = number
    },
    displayCityName (city) {
      let name
      this.citySelection.forEach(item => {
        if (city === item.value) {
          name = item.title
        }
      })
      return name
    },
    displayTypeName (type) {
      let name
      this.typeSelection.forEach(item => {
        if (type === item.value) {
          name = item.title
        }
      })
      return name
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
