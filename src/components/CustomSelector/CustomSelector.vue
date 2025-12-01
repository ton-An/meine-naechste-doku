<script setup lang="ts">
import { ChevronDown, List } from 'lucide-vue-next'
import {
  ComboboxAnchor,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxPortal,
  ComboboxRoot,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxViewport,
} from 'radix-vue'
import { useI18n } from 'vue-i18n'

import CustomSelectorItem from './_CustomSelectorItem.vue'
import type { CustomSelectorOption } from './customSelectorOptions'

const { t } = useI18n()

defineProps<{
  options: CustomSelectorOption[]
  values: CustomSelectorOption[]
  placeholder: string
  disabled: boolean
  onValueUpdated: (values: CustomSelectorOption[]) => void
}>()
</script>

<template>
  <ComboboxRoot
    :model-value="values"
    multiple
    class="relative"
    @update:model-value="onValueUpdated($event as unknown as CustomSelectorOption[])"
  >
    <ComboboxAnchor
      class="min-w-50 inline-flex items-center justify-between rounded-lg leading-none bg-white/60 backdrop-blur-3xl"
    >
      <ComboboxTrigger
        class="flex items-center justify-between w-full gap-3 px-3.5 py-2.5 disabled:cursor-not-allowed disabled:opacity-50"
        :disabled="disabled"
      >
        <span class="text-md">
          {{ values.length > 0 ? values.map((v) => t(v.i18nKey)).join(', ') : placeholder }}
        </span>
        <ChevronDown class="size-5.5" />
      </ComboboxTrigger>
    </ComboboxAnchor>
    <ComboboxPortal>
      <ComboboxContent
        position="popper"
        class="w-50 max-h-92 z-40 mt-1.5 bg-white/80 backdrop-blur-lg overflow-hidden rounded-lg shadow-2xs"
      >
        <ComboboxViewport class="px-3.5 py-4.5">
          <ComboboxEmpty class="text-center" />

          <CustomSelectorItem
            :option="{ id: 'all', i18nKey: 'common.all', icon: List }"
            :isSelected="values.some((v) => v.id === 'all')"
          />
          <ComboboxSeparator class="h-0.5 bg-gray-500/40 mb-4" />
          <ComboboxGroup>
            <CustomSelectorItem
              v-for="option in options"
              :key="option.id"
              :option="option"
              :isSelected="values.some((v) => v.id === option.id)"
            />
          </ComboboxGroup>
        </ComboboxViewport>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
