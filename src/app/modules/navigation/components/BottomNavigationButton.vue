<template>
  <div :class="{ active, 'navigation-button': true }">
    <img :src="imageSource" />
    <span class="navigation-button-text">{{ name }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BottomNavigationButton',
  props: {
    imageSource: {
      type: String,
    },
    name: {
      type: String,
      default: () => '',
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
<style scoped>
.active {
  color: #ef7958;
}
img {
  height: 30px;
}
.navigation-button {
  display: flex;
  flex-direction: column;
}

.navigation-button-text {
  font-family: Lato, sans-serif;
  font-size: 12px;
  text-transform: lowercase;
}
</style>
