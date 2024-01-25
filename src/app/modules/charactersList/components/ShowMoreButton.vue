<template>
  <button class="show-more-button">
    <span>Показать еще</span>
    <img :src="arrow" />
  </button>
</template>
<script lang="ts">
import arrow from '@/app/modules/charactersList/assets/Down_arrow.svg'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ShowMoreButton',

  setup() {
    return {
      arrow,
    }
  },
})
</script>
<style scoped>
.show-more-button {
  display: flex;
  height: 56px;
  width: 100%;
  padding: 15px;
  margin-top: 5px;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  border: 1px solid var(--grey-01, #f4f5f5);
  background: var(--white, #fff);
}
.show-more-button span {
  color: var(--graphite, #3c4061);
  font-family: Lato, sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
}

.show-more-button:hover {
  background-color: #cb99fa;
}

.show-more-button:focus,
.show-more-button:focus-visible {
  outline: none;
}
</style>
