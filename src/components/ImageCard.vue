<template>
    <router-link class='imageCard'  :to="{ name: 'Search', query: {searchType:'city',keyWord:'',type:'ScenicSpot', city:value } }">
        <div class="imageCard_inner" :style="{backgroundImage: `url(${location.picture})`}">
          <span><i class="fas fa-map-marker-alt"></i></span>
          <p>{{location.title}}</p>
        </div>
  </router-link>
</template>
<script>
export default {
  props: {
    location: Object,
    value: String
  }
}
</script>
