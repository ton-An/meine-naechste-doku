<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import { ComboboxItem } from 'radix-vue'
import { useI18n } from 'vue-i18n'

import type { CustomSelectorOption } from './customSelectorOptions'

const { t } = useI18n()

defineProps<{
  option: CustomSelectorOption
  isSelected: boolean
}>()
</script>

<template>
  <ComboboxItem
    :key="option.id"
    class="flex justify-between items-center not-last:mb-4"
    :value="option"
  >
    <div class="leading-none flex items-center cursor-pointer gap-2 relative select-none">
      <component :is="option.icon" class="size-5.5" />
      <span>{{ t(option.i18nKey) }}</span>
    </div>

    <Check v-if="isSelected" class="size-4 text-orange-600" />
  </ComboboxItem>
</template>
