<template>
  <div class="character-wrapper">
    <span class="character-avatar"><img :src="imageSource" /></span>
    <span class="character-name">{{ characterName }}</span>
    <button class="character-notification">
      <img :src="notification" @click="showSpecies(species)" />
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import notification from '@/app/modules/charactersList/assets/notification.svg'

export default defineComponent({
  name: 'SingleCharacter',
  props: {
    imageSource: {
      type: String,
    },
    characterName: {
      type: String,
    },
    species: {
      type: String,
      default: 'Individ',
    },
  },

  setup() {
    const showSpecies = (species: string): void => alert(species)
    return {
      notification,
      showSpecies,
    }
  },
})
</script>
<style>
.character-wrapper {
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 15px;
  border: 1px solid var(--grey-01, #f4f5f5);
  background: var(--white, #fff);
  gap: 10px;
}

.character-avatar span {
  height: 50px;
}

.character-avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.character-name {
  margin-left: 20px;
  font-family: Lato, sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  text-align: left;
}

.character-notification {
  margin-left: auto;
  background: #fff;
  border: none;
  padding: 0;
}

.character-notification:hover {
  border: none;
  border-radius: 4px;
  background-color: #f4f5f5;
}

.character-notification:focus,
.character-notification:focus-visible {
  outline: none;
}
</style>
