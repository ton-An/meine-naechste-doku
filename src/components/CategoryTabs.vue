<script setup lang="ts">
import { TabsList, TabsRoot, TabsTrigger } from 'radix-vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
  genres: { documentaryId: string | undefined; reportsId: string | undefined; key: string }[]
  selectedGenre: string
  handleGenreClick: (key: string) => void
}>()
</script>

<template>
  <TabsRoot>
    <TabsList class="flex flex-wrap gap-1 pb-6 px-4">
      <TabsTrigger
        v-for="genre in genres"
        :key="genre.key"
        :value="genre.key"
        @click="handleGenreClick(genre.key)"
        class="px-3 py-1.5 rounded-lg transition-all duration-200 ease-out cursor-pointer"
        :class="
          selectedGenre === genre.key ? 'bg-primary text-white' : 'text-gray-800 hover:bg-gray-100'
        "
      >
        {{ t(`genres.${genre.key}`) }}
      </TabsTrigger>
    </TabsList>
  </TabsRoot>
</template>
