<script setup lang="ts">
import EpisodeCard from '@/components/EpisodeCard.vue'
import FilterHeader from '@/components/FilterHeader.vue'
import GradientBlob from '@/components/GradientBlob.vue'
import ZdfLogo from '@/components/ZdfLogo.vue'
import { useEpisodesStore } from '@/stores/episodes_store/episodes_store'

const episodesStore = useEpisodesStore()
</script>

<template>
  <div class="fixed top-25 left-[50%] translate-x-[-50%] -z-10">
    <GradientBlob
      class="absolute top-[50%] left-[50%] size-140 translate-x-[-50%] translate-y-[-50%]"
    />

    <div class="flex flex-col items-center justify-center">
      <ZdfLogo class="w-40 h-40 relative" />
      <h1 class="text-[2.2em] font-bold">Deine nächste Folge</h1>
    </div>
  </div>

  <div v-if="episodesStore.state.status === 'loading'"></div>
  <div class="px-4 w-full z-5 mt-100 relative">
    <FilterHeader class="hidden md:block sticky top-4 left-0 z-20" />
    <div class="relative z-10 backdrop-blur-lg pt-10">
      <div class="flex flex-wrap gap-6 justify-center">
        <template v-if="episodesStore.state.status === 'success'">
          <div
            class="w-full sm:w-72"
            v-for="episode in episodesStore.state.episodes"
            :key="episode.title"
          >
            <EpisodeCard :episode="episode" />
          </div>
        </template>
        <template v-else>
          <div class="w-full sm:w-72" v-for="i in 10" :key="i">
            <EpisodeCard :episode="null" />
          </div>
        </template>
      </div>
    </div>
  </div>
  <div v-if="episodesStore.state.status === 'failure'">Failure</div>
</template>
