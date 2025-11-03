<script setup lang="ts">
import { TabsList, TabsRoot, TabsTrigger } from 'radix-vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
  genres: { id: string; key: string }[]
  selectedGenre: string
  handleGenreClick: (genreId: string) => void
}>()
</script>

<template>
  <TabsRoot>
    <TabsList class="flex flex-wrap gap-1 pb-6 px-4">
      <TabsTrigger
        v-for="genre in genres"
        :key="genre.id"
        :value="genre.id"
        @click="handleGenreClick(genre.id)"
        class="px-3 py-1.5 rounded-lg transition-all duration-200 ease-out cursor-pointer"
        :class="
          selectedGenre === genre.id ? 'bg-primary text-white' : 'text-gray-800 hover:bg-gray-100'
        "
      >
        {{ t(`genres.${genre.key}`) }}
      </TabsTrigger>
    </TabsList>
  </TabsRoot>
</template>
