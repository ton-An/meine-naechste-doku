<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'radix-vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
  genres: { documentaryId: string | undefined; reportsId: string | undefined; key: string }[]
  selectedGenre: string
  handleGenreClick: (key: string) => void
}>()
</script>

<template>
  <div class="mx-4">
    <SelectRoot :v-model="selectedGenre" v-on:update:model-value="handleGenreClick">
      <SelectTrigger
        class="inline-flex justify-between items-center w-full rounded-lg bg-gray-200 px-4 py-2.5"
      >
        <SelectValue :placeholder="t(`genres.${selectedGenre}`)" />
        <ChevronDown class="h-3.5 w-3.5" />
      </SelectTrigger>
      <SelectPortal>
        <SelectContent class="bg-gray-100 rounded-xl shadow-xl mx-6">
          <SelectViewport class="px-2 py-4">
            <SelectGroup>
              <SelectItem
                v-for="(option, index) in genres"
                :key="index"
                class="text-base px-2 py-1.5 rounded-lg"
                :class="
                  selectedGenre === option.key
                    ? 'bg-primary text-white'
                    : 'text-gray-800 hover:bg-gray-100'
                "
                :value="option.key"
              >
                <SelectItemText>
                  {{ t(`genres.${option.key}`) }}
                </SelectItemText>
              </SelectItem>
            </SelectGroup>
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  </div>
</template>
