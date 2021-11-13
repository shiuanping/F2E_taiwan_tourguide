<template>
    <ul class="pagination">
        <li>
            <a href="#" class="btn icon_btn" @click.prevent="changePage('pre')" :class="{'hide' :currentPage == 1}">
                <i class="fas fa-caret-left"></i>
            </a>
        </li>
        <li class="pagination_pagesnum">
            <span>{{currentPage}}</span>
        </li>
        <li>
            <a href="#" class="btn icon_btn" @click.prevent="changePage('next')" :class="{'hide' :endStatus ==  true}">
                <i class="fas fa-caret-right"></i>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
  props: {
    type: Number,
    endStatus: Boolean
  },
  data () {
    return {
      currentPage: 1
    }
  },
  emits: ['currentPage'],
  methods: {
    changePage (action) {
      if (action === 'next') {
        this.currentPage += 1
      } else if (action === 'pre') {
        this.currentPage -= 1
      }
      this.$emit('currentPage', this.currentPage)
    }
  },
  mounted () {
    // console.log(this.test)
  }
}
</script>
