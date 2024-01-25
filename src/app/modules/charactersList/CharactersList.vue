<template>
  <div>
    <div v-if="!error" class="characters-list-wrapper">
      <div v-for="(char, i) in characters" :key="i">
        <single-character
          :character-name="char.name"
          :image-source="char.image"
          :species="char.species"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { PropType, defineComponent } from 'vue'
import SingleCharacter from './components/SingleCharacter.vue'
import { Character } from './types'

export default defineComponent({
  name: 'CharactersList',
  components: {
    SingleCharacter,
  },
  props: {
    characters: {
      type: Array as PropType<Character[]>,
      default: (): Character[] => [],
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
<style scoped>
.characters-list-wrapper {
  flex-flow: column;
  display: flex;
  gap: 10px;
  height: 544px;
  overflow-y: scroll;
}
.characters-list-wrapper::-webkit-scrollbar {
  width: 0;
}
</style>
