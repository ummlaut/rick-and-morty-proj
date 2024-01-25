<template>
  <div>
    <input v-model="modelValueProxy" type="text" placeholder="Поиск" />
  </div>
</template>
<script lang="ts">
import search from '@/app/modules/search/assets/Search.svg'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'CharactersSearch',

  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const modelValueProxy = computed<string>({
      get(): string {
        return props.modelValue
      },
      set(newValue): void {
        emit('update:modelValue', newValue)
      },
    })
    return {
      search,
      modelValueProxy,
    }
  },
})
</script>
<style scoped>
input {
  display: block;
  width: 80%;
  padding: 8px 5% 8px 15%;
  margin: 10px auto;
  background: white url('assets/Search.svg') no-repeat 12px center;
  background-size: 24px 24px;
  font-size: 16px;
  border: none;
  border-radius: 100px;
}
</style>
