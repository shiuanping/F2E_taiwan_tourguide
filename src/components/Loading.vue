<template>
    <div class="loading">
        <Triangle></Triangle><Square></Square><Circle></Circle>
    </div>
</template>

<script>
// components
import Triangle from '@/components/icons/Triangle.vue'
import Square from '@/components/icons/Square.vue'
import Circle from '@/components/icons/Circle.vue'
export default {
  components: {
    Triangle, Square, Circle
  }
}
</script>
