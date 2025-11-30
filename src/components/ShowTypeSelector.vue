<script setup lang="ts">
import { BookMarked, ChevronDown, type LucideIcon, SearchIcon } from 'lucide-vue-next'
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
import { ref } from 'vue'

const v = ref<SelectorOption>()
const options: SelectorOption[] = [
  {
    value: 'Doku',
    icon: BookMarked,
  },
  {
    value: 'Reportage',
    icon: SearchIcon,
  },
]

interface SelectorOption {
  value: string
  icon: LucideIcon
}
</script>

<template>
  <ComboboxRoot v-model="v" class="relative">
    <ComboboxAnchor
      class="w-50 inline-flex items-center justify-between rounded-lg leading-none bg-white/60 backdrop-blur-3xl"
    >
      <ComboboxTrigger class="flex items-center justify-between w-full px-3.5 py-2.5">
        <span class="text-md"> {{ v ? v.value : 'Show Type' }}</span>
        <ChevronDown class="size-5.5" />
      </ComboboxTrigger>
    </ComboboxAnchor>
    <ComboboxPortal>
      <ComboboxContent
        position="popper"
        class="w-50 z-40 mt-1.5 bg-white/80 backdrop-blur-lg overflow-hidden rounded-lg shadow-2xs"
      >
        <ComboboxViewport class="px-3.5 py-4.5">
          <ComboboxEmpty class="text-center" />

          <ComboboxGroup>
            <ComboboxItem
              v-for="(option, index) in options"
              :key="index"
              class="leading-none flex items-center cursor-pointer gap-2 not-last:mb-4 relative select-none"
              :value="option"
            >
              <component :is="option.icon" class="size-5.5" />
              <span>{{ option.value }}</span>
            </ComboboxItem>
          </ComboboxGroup>
        </ComboboxViewport>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
