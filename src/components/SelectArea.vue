<template>
    <div class="selectArea">
        <div class="selectArea_container">
            <select class="selection" v-model="currentCity">
                <option value="" >選擇縣市</option>
                <option v-for="(item, index) in citySelection" :key="index" :value="item.value">{{item.title}}</option>
            </select>
            <select class="selection" v-model="currentRoute">
                <option value="">選擇路線</option>
                <option v-for="(item, index) in busRouteGroup" :key="index" :value="item">{{item}}</option>
            </select>
            <button class="btn icon_btn" @click="searchRoute">
                <i class="fas fa-search"></i>
            </button>
        </div>
    </div>
    <div class="tab" v-if="isLoading">
        <ul>
            <li v-if="routeStatus == 1 || routeStatus == 2">
                <a href="#" :class="{'active':status == 'departure' }"  @click.prevent="selectTab('departure')" >
                    <p v-if="!departureStop">起站</p>
                    <p v-else>往<span>{{departureStop}}</span></p>
                </a>
            </li>
            <li v-if="routeStatus == 1 || routeStatus == 3">
                <a href="#" :class="{'active':status == 'destination' }" @click.prevent="selectTab('destination')">
                    <p v-if="!destinationStop" >迄站</p>
                    <p v-else>往<span>{{destinationStop}}</span></p>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
// mixins
import { functionMixin } from '@/utils/mixins.js'
export default {
  props: {
    routeStatus: Number,
    isLoading: Boolean
  },
  mixins: [functionMixin],
  data () {
    return {
      currentCity: '',
      currentRoute: '',
      busRouteGroup: [],
      routeRealTimeData: [],
      departureStop: '',
      destinationStop: '',
      status: 'departure'
    }
  },
  computed: {
    searchData () {
      return {
        currentCity: this.currentCity,
        currentRoute: this.currentRoute
      }
    }
  },
  watch: {
    currentCity (preValue) {
      this.busRouteGroup = []
      fetch('https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/' + this.currentCity + '?$select=RouteName&$format=JSON', { headers: this.GetAuthorizationHeader() }).then(res => res.json()).then((res) => {
        res.map((route) => {
          this.busRouteGroup.push(route.RouteName.Zh_tw)
        })
      })
    },
    routeStatus () {
      if (this.routeStatus === 3) {
        this.status = 'departure'
      }
    }
  },
  methods: {
    searchRoute () {
      fetch('https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/' + this.currentCity + '/' + this.searchData.currentRoute + '?$filter=RouteName%2FZh_tw%20eq%20\'' + this.searchData.currentRoute + '\'&$format=JSON', { headers: this.GetAuthorizationHeader() }).then(res => res.json()).then((res) => {
        this.departureStop = res[0].DepartureStopNameZh
        this.destinationStop = res[0].DestinationStopNameZh
        this.status = 'departure'
        this.$emit('searchData', this.searchData)
      })
    },
    selectTab (value) {
      this.status = value
      this.$emit('currentDirection', this.status)
    }
  },
  emits: {
    searchData: Object,
    currentDirection: Object
  }
}
</script>
