<script setup lang="ts">
import { BookMarked, List, SearchIcon } from 'lucide-vue-next'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { useFilterStore } from '@/stores/filterStore/filterStore'

import CustomSelector from './CustomSelector/CustomSelector.vue'
import type { CustomSelectorOption } from './CustomSelector/customSelectorOptions'

const { t } = useI18n()

const options: Record<string, CustomSelectorOption> = {
  all: {
    i18nKey: 'common.all',
    id: 'all',
    icon: List,
  },
  'pub-form-10003': {
    i18nKey: 'category.documentary',
    id: 'pub-form-10003',
    icon: BookMarked,
  },
  'pub-form-10009': {
    i18nKey: 'category.report',
    id: 'pub-form-10009',
    icon: SearchIcon,
  },
}

const filterStore = useFilterStore()

const availableCategories = computed(() =>
  filterStore.state.availableCategories.map((category: string) => options[category]!),
)

const selectedCategories = computed(() =>
  filterStore.state.selectedCategories.map((category: string) => options[category]!),
)
const onValueUpdated = (value: CustomSelectorOption[]) => {
  filterStore.updateSelectedCategories(value.map((v) => v.id))
}
</script>

<template>
  <CustomSelector
    :options="availableCategories"
    :values="selectedCategories"
    :placeholder="t('common.selectCategories')"
    :onValueUpdated="onValueUpdated"
  />
</template>
