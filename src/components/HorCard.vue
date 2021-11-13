<template>
  <div class="horCard">
    <div class="horCard_img" :style="{background: (haveData(data.Picture)? `url(${data.Picture.PictureUrl1}) center / cover` :  `url(${noImageUrl_m}) center / cover`)}"></div>
    <div class="horCard_content">
      <div>
        <h4 @click="passActivityData">{{data.Name}}</h4>
        <p class="horCard_para">{{data.Description}}</p>
      </div>
      <div class="horCard_footer">
        <div class="location">
          <i class="fas fa-map-marker-alt"></i>
          <p>{{typeof(locationAry) === 'object'? ( locationAry.length >1?locationAry[0]+' '+locationAry[1]:locationAry[0 ]  ): data.Location}}</p>
        </div>
        <button class="btn" @click="modalOpen">
          活動詳情
        </button>
      </div>
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
      openModal: true
    }
  },
  computed: {
    locationAry () {
      return (this.handleAddress(this.data.Location) ? this.handleAddress(this.data.Location) : this.data.Location)
    }
  },
  methods: {
    modalOpen () {
      this.$emit('openModal', this.openModal)
      this.$emit('detail', this.data)
    }
  }
}
</script>
