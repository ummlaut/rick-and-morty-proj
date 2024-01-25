<template>
  <main class="mobile-wrapper">
    <status-bar />
    <section class="content-wrapper">
      <h1>Персонажи</h1>
      <suspense>
        <characters-content />
      </suspense>
    </section>
    <bottom-navigation />
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import StatusBar from './modules/statusbar/StatusBar.vue'
import BottomNavigation from './modules/navigation/BottomNavigation.vue'
import CharactersContent from '@/app/core/CharactersContent.vue'

export default defineComponent({
  components: {
    StatusBar,
    BottomNavigation,
    CharactersContent,
  },
})
</script>

<style scoped>
.mobile-wrapper {
  width: 375px;
  height: 812px;
  background-color: #f4f5f5;
  border-radius: 30px;
  position: relative;
}

.content-wrapper {
  margin: 0 25px;
}

h1 {
  color: #221a51;
  font-family: Lato, sans-serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: -0.2px;
  margin: 0 auto;
}
</style>
