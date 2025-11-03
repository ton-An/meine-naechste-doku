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

const formatDuration = (duration: number) => {
  const hours = Math.floor(duration / 3600)
  const minutes = Math.floor((duration % 3600) / 60)
  const seconds = duration % 60
  return `${hours > 0 ? `${hours}:` : ''}${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}
</script>

<template>
  <a :href="episode.url" target="_blank">
    <div class="flex flex-col gap-3 w-full">
      <div class="flex justify-between gap-2 relative rounded-2xl shadow-lg overflow-hidden">
        <div
          class="absolute inset-0 bg-black/50 opacity-0 hover:opacity-60 transition-all duration-240 ease"
        ></div>
        <img v-lazy="{ src: episode.image }" alt="Episode Image" class="h-48 w-full object-cover" />
        <p
          class="text-white bg-black/50 m-2 px-2 py-1 rounded-lg text-sm whitespace-nowrap absolute bottom-0 right-0"
        >
          {{ formatDuration(episode.duration) }}
        </p>
      </div>

      <div class="flex flex-col gap-1">
        <h2 class="text-black text-sm font-medium">{{ episode.title }}</h2>

        <p class="text-gray-500 text-sm">{{ formattedDate }}</p>
      </div>
    </div>
  </a>
</template>
