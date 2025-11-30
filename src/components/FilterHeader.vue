<script setup lang="ts">
import ShowTypeSelector from './ShowTypeSelector.vue'

defineProps<{
  genres: { documentaryId: string | undefined; reportsId: string | undefined; key: string }[]
  selectedGenre: string
  handleGenreClick: (key: string) => void
}>()
</script>

<template>
  <div>
    <div
      class="bg-gray-400/30 mx-20 rounded-xl backdrop-blur-lg flex flex-row justify-center gap-4 p-4"
    >
      <ShowTypeSelector />
      <ShowTypeSelector />
    </div>
  </div>
</template>
