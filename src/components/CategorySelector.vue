<script setup lang="ts">
import { BookMarked, SearchIcon } from 'lucide-vue-next'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { useFilterStore } from '@/stores/filterStore/filterStore'

import CustomSelector from './CustomSelector/CustomSelector.vue'
import type { CustomSelectorOption } from './CustomSelector/customSelectorOptions'

const { t } = useI18n()

const options: Record<string, CustomSelectorOption> = {
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
const onValuesUpdated = (values: CustomSelectorOption[]) => {
  filterStore.updateSelectedCategories(values.map((value) => value.id))
}
</script>

<template>
  <CustomSelector
    :options="availableCategories"
    :values="selectedCategories"
    :placeholder="t('common.selectCategories')"
    :onValuesUpdate="onValuesUpdated"
  />
</template>
