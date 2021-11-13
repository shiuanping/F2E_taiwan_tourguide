<template>
  <div class="VertCard" @click="modalOpen">
    <div class="VertCard_header">
      <div class="VertCard_img"  :style="{background: (haveData(data.Picture)?`url(${data.Picture.PictureUrl1}) bottom center / cover` : `url(${noImageUrl_s}) center / cover`)}" ></div>
      <h4>{{data.Name}}</h4>
    </div>
    <div class="location">
      <i class="fas fa-map-marker-alt"></i>
       <p>{{handleAddress(data.Address)}}</p>
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
      return this.handleAddress(this.data.Address)
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
