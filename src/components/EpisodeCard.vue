<script setup lang="ts">
import type { Episode } from '@/stores/episodes_store/episodes_state'

const props = defineProps<{
  episode: Episode | null
}>()

const formattedDate = props.episode?.editorialDate.toLocaleDateString('de-DE', {
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
  <!-- Shimmer skeleton when episode is null -->
  <div v-if="!episode" class="flex flex-col gap-3 w-full animate-pulse">
    <div class="relative rounded-2xl overflow-hidden">
      <div class="h-48 w-full shimmer"></div>
    </div>
    <div class="flex flex-col gap-2">
      <div class="h-4 w-3/4 rounded shimmer"></div>
      <div class="h-4 w-1/3 rounded shimmer"></div>
    </div>
  </div>

  <!-- Actual episode card -->
  <a v-else :href="episode.url" target="_blank">
    <div class="flex flex-col gap-3 w-full">
      <div class="flex justify-between gap-2 relative rounded-2xl shadow-lg overflow-hidden">
        <div
          class="absolute inset-0 bg-black/50 opacity-0 hover:opacity-60 transition-all duration-240 ease"
        ></div>
        <img v-lazy="{ src: episode.image }" alt="Episode Image" class="h-48 w-full object-cover" />
        <p
          v-if="episode.duration"
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

<style scoped>
.shimmer {
  background: linear-gradient(
    90deg,
    rgb(156 163 175 / 0.3) 0%,
    rgba(0, 0, 0, 0.15) 50%,
    rgb(156 163 175 / 0.3) 100%
  );
  opacity: 0.8;
  background-size: 200% 100%;
  animation: shimmer 4s ease-in-out infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
