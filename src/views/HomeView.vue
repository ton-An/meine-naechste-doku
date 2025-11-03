<script setup lang="ts">
import { onMounted, ref } from 'vue'

import CategorySelector from '@/components/CategorySelector.vue'
import CategoryTabs from '@/components/CategoryTabs.vue'
import EpisodeCard from '@/components/EpisodeCard.vue'
import { useEpisodesStore } from '@/stores/episodes_store/episodes_store'

const episodesStore = useEpisodesStore()

onMounted(() => {
  episodesStore.getNewEpisodes('all', 'all')
})

const genres: { documentaryId: string | undefined; reportsId: string | undefined; key: string }[] =
  [
    {
      documentaryId: 'all',
      reportsId: 'all',
      key: 'all',
    },
    {
      documentaryId: 'genre-10296',
      reportsId: 'genre-10296',
      key: 'knowledge',
    },
    {
      documentaryId: 'genre-10023',
      reportsId: 'genre-10023',
      key: 'society',
    },
    {
      documentaryId: 'genre-10022',
      reportsId: 'genre-10022',
      key: 'history',
    },
    {
      documentaryId: 'genre-10282',
      reportsId: 'genre-10282',
      key: 'nature',
    },
    {
      documentaryId: 'genre-10290',
      reportsId: 'genre-10290',
      key: 'sports',
    },
    {
      documentaryId: 'genre-10283',
      reportsId: 'genre-10283',
      key: 'politics',
    },
    {
      documentaryId: 'genre-10285',
      reportsId: 'genre-10285',
      key: 'travel',
    },
    {
      documentaryId: 'genre-10029',
      reportsId: 'genre-10029',
      key: 'culture',
    },
    {
      documentaryId: 'genre-10293',
      reportsId: 'genre-10293',
      key: 'trueCrime',
    },
    {
      documentaryId: 'genre-10020',
      reportsId: 'genre-10020',
      key: 'nutrition',
    },
    {
      documentaryId: 'genre-10295',
      reportsId: 'genre-10295',
      key: 'economy',
    },
    {
      documentaryId: 'genre-10032',
      reportsId: 'genre-10032',
      key: 'music',
    },
    {
      documentaryId: 'genre-10291',
      reportsId: 'genre-10291',
      key: 'stars',
    },
    {
      documentaryId: 'genre-10024',
      reportsId: 'genre-10024',
      key: 'health',
    },
    {
      documentaryId: 'genre-10294',
      reportsId: 'genre-10294',
      key: 'environment',
    },
    {
      documentaryId: 'genre-10017',
      reportsId: 'genre-10017',
      key: 'education',
    },
    {
      documentaryId: 'genre-10016',
      reportsId: 'genre-10016',
      key: 'architecture',
    },
    {
      documentaryId: 'genre-10286',
      key: 'royals',
      reportsId: undefined,
    },
    {
      documentaryId: 'genre-10280',
      key: 'mystery',
      reportsId: undefined,
    },
    {
      documentaryId: 'genre-10019',
      key: 'drama',
      reportsId: undefined,
    },
    {
      reportsId: 'genre-10088',
      documentaryId: 'genre-10088',
      key: 'entertainment',
    },
    {
      reportsId: 'genre-10289',
      key: 'sex',
      documentaryId: undefined,
    },
    {
      reportsId: 'genre-10026',
      key: 'cooking',
      documentaryId: undefined,
    },
    {
      reportsId: 'genre-10284',
      key: 'advice',
      documentaryId: undefined,
    },
    {
      reportsId: 'genre-10094',
      key: 'adventure',
      documentaryId: undefined,
    },
    {
      reportsId: 'genre-10287',
      key: 'satire',
      documentaryId: undefined,
    },
    {
      reportsId: 'genre-10954',
      key: 'comingOfAge',
      documentaryId: undefined,
    },
  ]

const selectedGenre = ref<string>('all')

const handleGenreClick = (key: string) => {
  console.log(key)
  selectedGenre.value = key
  const documentaryGenreId = genres.find((genre) => genre.key === key)?.documentaryId
  const reportsGenreId = genres.find((genre) => genre.key === key)?.reportsId
  episodesStore.getNewEpisodes(documentaryGenreId, reportsGenreId)
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
