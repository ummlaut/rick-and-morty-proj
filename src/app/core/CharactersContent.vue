<template>
  <div>
    <characters-search v-model="searchString" />
    <span v-if="charactersCount !== 0" class="characters-count"
      >{{ charactersCount }} персонажей</span
    >
    <span v-else class="characters-count">
      Не удалось найти персонажей с таким именем</span
    >
    <characters-list :characters="charactersArray" :error="error" />
    <show-more-button v-if="error" @click="fetchPage" />
    <reset-search-button v-if="error" @click="resetSearchString" />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useCharacters } from './composables/useCharacters'
import CharactersList from '@/app/modules/charactersList/CharactersList.vue'
import ShowMoreButton from '@/app/modules/charactersList/components/ShowMoreButton.vue'
import CharactersSearch from '@/app/modules/search/CharactersSearch.vue'
import ResetSearchButton from '@/app/modules/search/components/ResetSearchButton.vue'
export default defineComponent({
  name: 'CharactersContent',
  components: {
    CharactersList,
    ShowMoreButton,
    CharactersSearch,
    ResetSearchButton,
  },
  async setup() {
    const {
      charactersArray,
      charactersCount,
      searchString,
      pagesCount,
      pagesFetched,
      pagesLeft,
      fetchPage,
      error,
      isLoading,
    } = useCharacters()

    const isButtonActive = computed<boolean>(
      () =>
        !isLoading.value &&
        pagesLeft.value !== undefined &&
        pagesLeft.value > 0,
    )

    await fetchPage()

    const resetSearchString = async (): Promise<void> => {
      searchString.value = ''
      await fetchPage()
    }

    return {
      charactersArray,
      charactersCount,
      searchString,
      pagesCount,
      pagesFetched,
      pagesLeft,
      resetSearchString,
      fetchPage,
      error,
      isButtonActive,
      isLoading,
    }
  },
})
</script>
<style scoped>
.characters-count {
  display: inline-block;
  color: #c1c2c7;
  font-family: Lato, sans-serif;
  font-size: 15px;
}
</style>
