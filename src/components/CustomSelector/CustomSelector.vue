<script setup lang="ts">
import { Check, ChevronDown } from 'lucide-vue-next'
import {
  ComboboxAnchor,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxItem,
  ComboboxPortal,
  ComboboxRoot,
  ComboboxTrigger,
  ComboboxViewport,
} from 'radix-vue'
import { useI18n } from 'vue-i18n'

import type { CustomSelectorOption } from './customSelectorOptions'

const { t } = useI18n()

defineProps<{
  options: CustomSelectorOption[]
  values: CustomSelectorOption[]
  placeholder: string
  onValuesUpdate: (values: CustomSelectorOption[]) => void
}>()
</script>

<template>
  <ComboboxRoot
    :values="values"
    multiple
    class="relative"
    @update:model-value="onValuesUpdate($event as CustomSelectorOption[])"
  >
    <ComboboxAnchor
      class="min-w-50 inline-flex items-center justify-between rounded-lg leading-none bg-white/60 backdrop-blur-3xl"
    >
      <ComboboxTrigger class="flex items-center justify-between w-full gap-3 px-3.5 py-2.5">
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

          <ComboboxGroup>
            <ComboboxItem
              v-for="(option, index) in options"
              :key="index"
              class="flex justify-between items-center not-last:mb-4"
              :value="option"
            >
              <div class="leading-none flex items-center cursor-pointer gap-2 relative select-none">
                <component :is="option.icon" class="size-5.5" />
                <span>{{ t(option.i18nKey) }}</span>
              </div>

              <Check v-if="values.some((v) => v.id === option.id)" class="size-4 text-orange-600" />
            </ComboboxItem>
          </ComboboxGroup>
        </ComboboxViewport>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
