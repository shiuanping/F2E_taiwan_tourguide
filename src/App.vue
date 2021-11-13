<template>
  <Header></Header>
  <router-view/>
  <Footer></Footer>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// components
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  components: {
    Header, Footer
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/all";
</style>
