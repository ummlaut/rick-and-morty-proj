<template>
  <div class="reset-search-button-wrapper">
    <button class="reset-search-button">
      <span>Сбросить поиск</span>
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ResetSearchButton',
})
</script>
<style scoped>
.reset-search-button-wrapper {
  position: absolute;
  width: 100%;
  bottom: 50px;
  left: 0;
  padding: 11px 0 50px 0;
  border-radius: 10px 10px 0px 0px;
  background: #fff;
  box-shadow: 0px 0px 13px 0px rgba(22, 22, 23, 0.26);
}
.reset-search-button {
  width: 87%;
  height: 56px;
  background: #cb99fa;
  color: #fff;
}
</style>
