<template>
  <div class="status-bar-wrapper">
    <span>{{ time }}</span>
    <div>
      <span
        v-for="(icon, i) in imageSourcesArr"
        :key="i"
        class="status-bar-icon"
      >
        <img :src="icon" />
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import connection from '@/app/modules/statusbar/assets/Connection.svg'
import wifi from '@/app/modules/statusbar/assets/Wifi.svg'
import battery from '@/app/modules/statusbar/assets/Battery.svg'
const imageSourcesArr = [connection, wifi, battery]

export default defineComponent({
  name: 'StatusBar',
  setup() {
    const time: string = new Date().toLocaleTimeString().slice(0, -3)
    return {
      imageSourcesArr,
      time,
    }
  },
})
</script>
<style>
.status-bar-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 16px 24px;
}

.status-bar-icon {
  padding-left: 5px;
}
</style>
