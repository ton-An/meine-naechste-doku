<script setup lang="ts">
import { onMounted, ref } from 'vue'

import CategorySelector from '@/components/CategorySelector.vue'
import CategoryTabs from '@/components/CategoryTabs.vue'
import EpisodeCard from '@/components/EpisodeCard.vue'
import { useEpisodesStore } from '@/stores/episodes_store/episodes_store'

const episodesStore = useEpisodesStore()

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

const selectedGenre = ref<string>('all')

const handleGenreClick = (genreId: string) => {
  console.log(genreId)
  selectedGenre.value = genreId
  episodesStore.getNewEpisodes(genreId)
}
</script>

<template>
  <h1 class="py-18 px-8 text-6xl font-bold">
    Die neusten <span class="text-primary">ZDF Dokus</span>!
  </h1>

  <CategorySelector
    :genres="genres"
    :selectedGenre="selectedGenre"
    :handleGenreClick="handleGenreClick"
    class="block md:hidden mb-6"
  />
  <CategoryTabs
    :genres="genres"
    :selectedGenre="selectedGenre"
    :handleGenreClick="handleGenreClick"
    class="hidden md:block"
  />
  <div v-if="episodesStore.state.status === 'loading'">Loading...</div>
  <div
    class="flex flex-wrap px-4 gap-6 justify-center w-full"
    v-if="episodesStore.state.status === 'success'"
  >
    <div
      class="w-full sm:w-72"
      v-for="episode in episodesStore.state.episodes"
      :key="episode.title"
    >
      <EpisodeCard :episode="episode" />
    </div>
  </div>
  <div v-if="episodesStore.state.status === 'failure'">Failure</div>
</template>
