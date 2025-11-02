<script setup lang="ts">
import type { Episode } from '@/stores/episodes_store/episodes_state'

const props = defineProps<{
  episode: Episode
}>()

const formattedDate = props.episode.editorialDate.toLocaleDateString('de-DE', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
})
</script>

<template>
  <a :href="episode.url" target="_blank">
    <div class="flex flex-col gap-3 w-72">
      <img
        v-lazy="{ src: episode.image }"
        alt="Episode Image"
        class="h-48 object-cover rounded-2xl shadow-lg"
      />
      <div class="flex flex-col gap-1">
        <h2 class="text-black text-sm font-medium">{{ episode.title }}</h2>
        <p class="text-gray-500 text-sm">{{ formattedDate }}</p>
      </div>
    </div>
  </a>
</template>
