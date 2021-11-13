<template>
    <div id="App">
    <main class="traffic">
      <SelectArea @searchData="getSearchData" @currentDirection="getCurrentDirection" :routeStatus="routeStatus" :isLoading="isLoading"></SelectArea>
      <div class="container" >
          <p class="hint">*每隔 15 秒自動更新</p>
          <div class="bus_route">
            <p v-if="!Object.keys(tmpDirectionData).length">請選擇公車路線</p>
            <ul class="busArriveStatus" v-if="isLoading" :style="{Minheight:tmpDirectionData.Stops.length * 60 +'px'}">
              <li v-for="(item, index) in tmpDirectionData.Stops" :key="index">
                <div class="busArriveStatus_time" :class="{'noDeparture':(item.StopStatus == 1)||(item.StopStatus == undefined), 'arriving':item.StopStatus == 5, 'willArriving':item.StopStatus == 6}" >
                  {{calculateArrivalTime(item.EstimateTime) ? calculateArrivalTime(item.EstimateTime) : displayArrivalStatus(item.StopStatus) }}
                </div>
                <p>{{item.StopName.Zh_tw}}</p>
              </li>
            </ul>
          </div>
      </div>
    </main>
</div>
</template>

<script>

import SelectArea from '@/components/SelectArea.vue'
// mixins
import { functionMixin } from '@/utils/mixins.js'

export default {
  mixins: [functionMixin],
  data () {
    return {
      location: [{
        title: '臺南',
        cityName: '臺南市'
      }, {
        title: '高雄',
        cityName: '高雄市'
      }, {
        title: '屏東',
        cityName: '屏東縣'
      }, {
        title: '宜蘭',
        cityName: '宜蘭縣'
      }, {
        title: '花蓮',
        cityName: '花蓮縣'
      }, {
        title: '台東',
        cityName: '臺東縣'
      }, {
        title: '金門馬祖.澎湖',
        cityName: ['金門縣', '澎湖縣', '連江縣']
      }],
      searchData: [],
      busStopSequence: [],
      routeData: [],
      deaprtureData: [],
      returnData: [],
      currentDirection: 'departure',
      routeStatus: 0,
      isLoading: false,
      timer: undefined
    }
  },
  components: {
    SelectArea
  },
  watch: {
    searchData () {
      fetch('https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/' + this.searchData.currentCity + '/' + this.searchData.currentRoute + '?$filter=RouteName%2FZh_tw%20eq%20\'' + this.searchData.currentRoute + '\'&$format=JSON', { headers: this.GetAuthorizationHeader() }).then(res => res.json()).then(res => {
        try {
          this.deaprtureData = (res.filter(item => item.Direction === 1))
          this.returnData = (res.filter(item => item.Direction === 0))
        } catch {
          return
        }
        this.deaprtureData = this.deaprtureData.length > 0 ? this.deaprtureData[0] : ''
        this.returnData = this.returnData.length > 0 ? this.returnData[0] : ''
        const deaprtureNotEmpty = Boolean(this.deaprtureData)
        const returnDataNotEmpty = Boolean(this.returnData)
        if (!deaprtureNotEmpty && !deaprtureNotEmpty) {
          this.routeStatus = 0
        } else if (deaprtureNotEmpty && returnDataNotEmpty) {
          this.routeStatus = 1
        } else if (deaprtureNotEmpty) {
          this.routeStatus = 2
        } else {
          this.routeStatus = 3
        }
      })
    }
  },
  computed: {
    tmpDirectionData () {
      this.getArrivalTimeData(this.currentDirection)
      return this.currentDirection === 'departure' ? this.deaprtureData : this.returnData
    }
  },
  methods: {
    getSearchData (item) {
      this.searchData = item
    },
    getCurrentDirection (status) {
      this.currentDirection = status
    },
    getArrivalTimeData (currentDirection) {
      const direction = currentDirection === 'departure' ? 0 : 1
      if (this.timer) {
        clearInterval(this.timer)
      }
      if ((this.searchData.currentCity === undefined) || (this.tmpDirectionData === undefined)) {
        return
      }
      fetch('https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/' + this.searchData.currentCity + '/' + this.searchData.currentRoute + '?$filter=RouteName%2FZh_tw%20eq%20\'' + this.searchData.currentRoute + '\'&$format=JSON', { headers: this.GetAuthorizationHeader() }).then(res => res.json()).then(res => {
        res = res.sort((short, long) => {
          return long.EstimateTime - short.EstimateTime
        })
        const arrivalData = (res.filter(item => item.Direction === direction))
        for (const directionItem of this.tmpDirectionData.Stops) {
          for (const arrivalItem of arrivalData) {
            if (directionItem.StopName.Zh_tw === arrivalItem.StopName.Zh_tw) {
              directionItem.StopStatus = arrivalItem.StopStatus
              directionItem.EstimateTime = arrivalItem.EstimateTime
              if (arrivalItem.EstimateTime < 30) {
                directionItem.StopStatus = 5
                directionItem.EstimateTime = ''
                continue
              } else if (arrivalItem.EstimateTime < 180) {
                directionItem.StopStatus = 6
                directionItem.EstimateTime = ''
              }
            }
          }
        }
        this.isLoading = true
      })
      this.timer = setInterval(() => {
        this.getArrivalTimeData()
      }, 15000)
    },
    displayArrivalStatus (status) {
      switch (status) {
        case 0:
          return '正常'
        case 1:
          return '未發車'
        case 2:
          return '交管不停靠'
        case 3:
          return '末班車已過'
        case 4:
          return '今日未營運'
        case 5:
          return '進站中'
        case 6:
          return '將到站'
        default:
          return '未發車'
      }
    },
    calculateArrivalTime (waitSecond) {
      if (!waitSecond) {
        return
      }
      const date = new Date()
      const nowTime = {}
      const waitTime = {}
      nowTime.hours = date.getHours()
      nowTime.miuntes = date.getMinutes()
      nowTime.seconds = date.getSeconds()
      waitTime.seconds = (nowTime.seconds + waitSecond) % 60
      waitTime.minutes = nowTime.miuntes + Math.floor((nowTime.seconds + waitSecond) / 60)
      waitTime.hours = nowTime.hours + parseInt(waitTime.minutes / 60)
      waitTime.hours = waitTime.hours.toString().length === 1 ? '0' + waitTime.hours.toString() : waitTime.hours.toString()
      waitTime.minutes = waitTime.minutes.toString().length === 1 ? '0' + waitTime.minutes.toString() : waitTime.minutes.toString()
      return waitTime.hours + ':' + waitTime.minutes
    }
  }
}
</script>
