<script setup lang="ts">
import { Loader, LoaderCircle } from 'lucide-vue-next'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

import { useEpisodesStore } from '@/stores/episodes_store/episodes_store'
import { useFilterStore } from '@/stores/filterStore/filterStore'

import CategorySelector from './CategorySelector.vue'
import GenreSelector from './GenreSelector.vue'

const { t } = useI18n()

const filterStore = useFilterStore()
const episodesStore = useEpisodesStore()

onMounted(() => {
  filterStore.updateSelectedCategories(['pub-form-10003'])
  filterStore.updateSelectedGenres(['all'])
  applyFilters()
})

const applyFilters = () => {
  filterStore.resetIsModified()
  const selectedGenres = filterStore.getSelectedGenres

  episodesStore.getNewEpisodes(selectedGenres)
}
</script>

<template>
  <div>
    <div
      class="bg-gray-400/30 md:mx-20 rounded-xl backdrop-blur-lg flex flex-col md:flex-row justify-center gap-4 p-4"
    >
      <div class="w-full md:w-1/2 flex justify-center md:justify-end">
        <CategorySelector />
      </div>
      <div
        class="w-full md:w-1/2 gap-4 flex justify-center items-center md:justify-between flex-col md:flex-row"
      >
        <GenreSelector />
        <button
          class="bg-orange-500 text-white px-4 py-2 rounded-md min-w-32 flex items-center justify-center gap-2"
          v-if="filterStore.state.isModified || episodesStore.state.status === 'loading'"
          @click="applyFilters"
        >
          <LoaderCircle
            v-if="episodesStore.state.status === 'loading'"
            class="w-4 h-4 animate-spin"
            :stroke-width="3"
          />
          <span v-else>
            {{ t('common.apply') }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
