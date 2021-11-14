<template>
    <div class="layout">
        <div class="infoModal">
            <div class="infoModal_inner">
                <div class="infoModal_img" v-if="!haveData(data.Picture)" :style="{background: `url(${noImageUrl_l}) center / cover`}" ></div>
                <div class="infoModal_img" v-if="haveData(data.Picture)" :style="{background: `url(${pictureList[currentPicture]}) no-repeat center bottom / contain`}"></div>
                <ul class="infoModal_pictureBar" v-if="haveData(data.Picture)">
                    <li @click="prePicture" :class="{'hide' :currentPicture <= 0 }">
                        <button class="pre_btn btn icon_btn ">
                            <i class="fas fa-caret-left"></i>
                        </button>
                    </li>
                    <li @click="nextPicture" :class="{'hide' :(currentPicture >= (pictureList.length-1))}" >
                        <button class="next_btn btn icon_btn ">
                            <i class="fas fa-caret-right"></i>
                        </button>
                    </li>
                </ul>
                <h2>{{data.Name}}</h2>
                <p class="infoModal_desc">{{data.Description}}</p>
                <ul class="infoModal_infoList">
                    <li>
                        <span><i class="far fa-clock"></i></span>
                        <p>{{data.StartTime ? data.StartTime: (data.OpenTime ? data.OpenTime :'無' ) }}</p>
                    </li>
                    <li>
                        <span><i class="fas fa-map-marker-alt"></i></span>
                        <p>{{data.Address? data.Address : (data.Location?data.Location:'無')}}</p>
                    </li>
                    <li>
                        <span><i class="fas fa-phone-alt"></i></span>
                        <p>{{data.Phone? data.Phone : '無'}}</p>
                    </li>
                    <li v-if="data.ParkingInfo">
                        <span><i class="fas fa-parking"></i></span>
                        <p >{{data.ParkingInfo}}</p>
                    </li>
                </ul>
            </div>
            <button class="infoModal_close btn icon_btn" @click="modalClose" >
                <i class="fas fa-times"></i>
            </button>
          </div>
    </div>
</template>

<script>
// mixins
import { functionMixin } from '@/utils/mixins.js'
export default {
  props: {
    data: Object
  },
  mixins: [functionMixin],
  data () {
    return {
      openModal: false,
      pictureList: [],
      currentPicture: 0
    }
  },
  methods: {
    modalClose () {
      this.$emit('closeModal', this.openModal)
    },
    pictureKey () {
      return 'PictureUrl' + this.currentPicture.toString()
    },
    prePicture () {
      this.currentPicture -= 1
    },
    nextPicture () {
      this.currentPicture += 1
    }
  },
  mounted () {
    const pictureKeys = Object.keys(this.data.Picture).filter(item => item.includes('Url'))
    for (const key of pictureKeys) {
      this.pictureList.push(this.data.Picture[key])
    }
  }
}
</script>
