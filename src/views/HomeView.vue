<script setup lang="ts">
import { onMounted } from 'vue'

import EpisodeCard from '@/components/EpisodeCard.vue'
import { useEpisodesStore } from '@/stores/episodes_store/episodes_store'

const episodesStore = useEpisodesStore()

onMounted(() => {
  episodesStore.getNewEpisodes()
})
</script>

<template>
  <h1 class="py-12 px-8 text-2xl font-bold">Neuste Episoden</h1>
  <div v-if="episodesStore.state.status === 'loading'">Loading...</div>
  <div class="flex flex-wrap gap-6 justify-center" v-if="episodesStore.state.status === 'success'">
    <div class="" v-for="episode in episodesStore.state.episodes" :key="episode.title">
      <EpisodeCard :episode="episode" />
    </div>
  </div>
  <div v-if="episodesStore.state.status === 'failure'">Failure</div>
</template>
