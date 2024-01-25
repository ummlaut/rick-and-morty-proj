import { ComputedRef, Ref, computed, ref } from 'vue'
import { Character } from '../../modules/charactersList/types'
import { getCharacters } from '../../modules/charactersList/services/characters.service'
import { watch } from 'vue'
import _debounce from 'lodash/debounce'

const charactersArray: Ref<Character[]> = ref([])
const searchString: Ref<string> = ref('')
const error: Ref<boolean> = ref(false)
const charactersCount: Ref<number | undefined> = ref()
const pagesCount: Ref<number | undefined> = ref()
const pagesFetched: Ref<number | undefined> = ref()
const isLoading: Ref<boolean> = ref(false)
const pagesLeft: ComputedRef<number | undefined> = computed(() =>
  pagesCount.value ? pagesCount.value - (pagesFetched.value ?? 0) : undefined,
)

const fetchPage = async (): Promise<void> => {
  isLoading.value = true
  if (!pagesCount.value) {
    const resp = await getCharacters()
    pagesCount.value = resp.info.pages
    charactersCount.value = resp.info.count
    pagesFetched.value = 1
    charactersArray.value = resp.results
  } else {
    if (!pagesFetched.value) throw new Error('Unexpected error')
    const resp = await getCharacters({ page: pagesFetched.value + 1 })
    pagesFetched.value++
    charactersArray.value = [...charactersArray.value, ...resp.results]
  }
  isLoading.value = false
}

watch(searchString, async (): Promise<void> => {
  try {
    if (searchString.value) {
      isLoading.value = true
      const resp = await getCharacters({ name: searchString.value })
      console.log(resp)
      pagesCount.value = resp.info.pages
      charactersCount.value = resp.info.count
      charactersArray.value = resp.results
      pagesFetched.value = 1
      isLoading.value = false
    }
  } catch (e) {
    error.value = true
  }
})

export const useCharacters = () => ({
  charactersArray,
  charactersCount,
  searchString,
  error,
  pagesCount,
  pagesFetched,
  pagesLeft,
  isLoading,
  fetchPage,
})
