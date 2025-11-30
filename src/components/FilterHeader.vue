<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { useEpisodesStore } from '@/stores/episodes_store/episodes_store'
import { useFilterStore } from '@/stores/filterStore/filterStore'

import CategorySelector from './CategorySelector.vue'
import GenreSelector from './GenreSelector.vue'

const { t } = useI18n()

const filterStore = useFilterStore()
const episodesStore = useEpisodesStore()

const applyFilters = () => {
  const selectedGenres = filterStore.getSelectedGenres

  episodesStore.getNewEpisodes(selectedGenres)
}
</script>

<template>
  <div>
    <div
      class="bg-gray-400/30 mx-20 rounded-xl backdrop-blur-lg flex flex-row justify-center gap-4 p-4"
    >
      <div class="w-1/2 flex justify-end">
        <CategorySelector />
      </div>
      <div class="w-1/2 flex justify-between">
        <GenreSelector />
        <button v-if="filterStore.state.isModified" @click="applyFilters">
          {{ t('common.apply') }}
        </button>
      </div>
    </div>
  </div>
</template>
