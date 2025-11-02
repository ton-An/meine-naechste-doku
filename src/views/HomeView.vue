<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import EpisodeCard from '@/components/EpisodeCard.vue'
import { useEpisodesStore } from '@/stores/episodes_store/episodes_store'

const episodesStore = useEpisodesStore()

const { t } = useI18n()

onMounted(() => {
  episodesStore.getNewEpisodes()
})

const genres = [
  {
    id: 'all',
    key: 'all',
  },
  {
    id: 'genre-10296',
    key: 'knowledge',
  },
  {
    id: 'genre-10023',
    key: 'society',
  },
  {
    id: 'genre-10022',
    key: 'history',
  },
  {
    id: 'genre-10282',
    key: 'nature',
  },
  {
    id: 'genre-10290',
    key: 'sports',
  },
  {
    id: 'genre-10283',
    key: 'politics',
  },
  {
    id: 'genre-10285',
    key: 'travel',
  },
  {
    id: 'genre-10029',
    key: 'culture',
  },
  {
    id: 'genre-10293',
    key: 'trueCrime',
  },
  {
    id: 'genre-10020',
    key: 'nutrition',
  },
  {
    id: 'genre-10295',
    key: 'economy',
  },
  {
    id: 'genre-10032',
    key: 'music',
  },
  {
    id: 'genre-10291',
    key: 'stars',
  },
  {
    id: 'genre-10024',
    key: 'health',
  },
  {
    id: 'genre-10294',
    key: 'environment',
  },
  {
    id: 'genre-10017',
    key: 'education',
  },
  {
    id: 'genre-10016',
    key: 'architecture',
  },
  {
    id: 'genre-10286',
    key: 'royals',
  },
  {
    id: 'genre-10280',
    key: 'mystery',
  },
  {
    id: 'genre-10019',
    key: 'drama',
  },
  {
    id: 'genre-10088',
    key: 'entertainment',
  },
]

const selectedGenre = ref<string | null>(null)

const handleGenreClick = (genreId: string) => {
  selectedGenre.value = genreId
  episodesStore.getNewEpisodes(genreId)
}
</script>

<template>
  <h1 class="py-18 px-8 text-6xl font-bold">
    Die neusten <span class="text-orange-500">ZDF Dokus</span>!
  </h1>
  <div class="flex flex-wrap gap-1 pb-6 px-4">
    <div
      @click="handleGenreClick(genre.id)"
      :class="
        selectedGenre === genre.id ? 'bg-orange-400 text-white' : 'text-gray-800 hover:bg-gray-100'
      "
      class="px-3 py-1.5 rounded-lg transition-all duration-200 ease-out"
      v-for="genre in genres"
      :key="genre.id"
    >
      <span>{{ t(`genres.${genre.key}`) }}</span>
    </div>
  </div>
  <div v-if="episodesStore.state.status === 'loading'">Loading...</div>
  <div
    class="flex flex-wrap px-4 gap-6 justify-center"
    v-if="episodesStore.state.status === 'success'"
  >
    <div class="" v-for="episode in episodesStore.state.episodes" :key="episode.title">
      <EpisodeCard :episode="episode" />
    </div>
  </div>
  <div v-if="episodesStore.state.status === 'failure'">Failure</div>
</template>
