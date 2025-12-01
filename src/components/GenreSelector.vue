<script setup lang="ts">
import {
  Backpack,
  Banknote,
  Binoculars,
  Brain,
  Building2,
  Clapperboard,
  Clock,
  CookingPot,
  Crown,
  Drama,
  FerrisWheel,
  Globe,
  GraduationCap,
  Heart,
  Leaf,
  List,
  MountainSnow,
  Music,
  Puzzle,
  Shield,
  Siren,
  Speech,
  Star,
  Theater,
  Users,
  Utensils,
  VenusAndMars,
  Volleyball,
} from 'lucide-vue-next'
import { computed, type ComputedRef } from 'vue'
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
  knowledge: {
    i18nKey: 'genres.knowledge',
    id: 'knowledge',
    icon: Brain,
  },
  society: {
    i18nKey: 'genres.society',
    id: 'society',
    icon: Users,
  },
  history: {
    i18nKey: 'genres.history',
    id: 'history',
    icon: Clock,
  },
  nature: {
    i18nKey: 'genres.nature',
    id: 'nature',
    icon: MountainSnow,
  },
  sports: {
    i18nKey: 'genres.sports',
    id: 'sports',
    icon: Volleyball,
  },
  politics: {
    i18nKey: 'genres.politics',
    id: 'politics',
    icon: Shield,
  },
  travel: {
    i18nKey: 'genres.travel',
    id: 'travel',
    icon: Globe,
  },
  culture: {
    i18nKey: 'genres.culture',
    id: 'culture',
    icon: Theater,
  },
  trueCrime: {
    i18nKey: 'genres.trueCrime',
    id: 'trueCrime',
    icon: Siren,
  },
  nutrition: {
    i18nKey: 'genres.nutrition',
    id: 'nutrition',
    icon: Utensils,
  },
  economy: {
    i18nKey: 'genres.economy',
    id: 'economy',
    icon: Banknote,
  },
  music: {
    i18nKey: 'genres.music',
    id: 'music',
    icon: Music,
  },
  stars: {
    i18nKey: 'genres.stars',
    id: 'stars',
    icon: Star,
  },
  health: {
    i18nKey: 'genres.health',
    id: 'health',
    icon: Heart,
  },
  environment: {
    i18nKey: 'genres.environment',
    id: 'environment',
    icon: Leaf,
  },
  education: {
    i18nKey: 'genres.education',
    id: 'education',
    icon: GraduationCap,
  },
  architecture: {
    i18nKey: 'genres.architecture',
    id: 'architecture',
    icon: Building2,
  },
  royals: {
    i18nKey: 'genres.royals',
    id: 'royals',
    icon: Crown,
  },
  mystery: {
    i18nKey: 'genres.mystery',
    id: 'mystery',
    icon: Puzzle,
  },
  drama: {
    i18nKey: 'genres.drama',
    id: 'drama',
    icon: Drama,
  },
  entertainment: {
    i18nKey: 'genres.entertainment',
    id: 'entertainment',
    icon: FerrisWheel,
  },
  sex: {
    i18nKey: 'genres.sex',
    id: 'sex',
    icon: VenusAndMars,
  },
  cooking: {
    i18nKey: 'genres.cooking',
    id: 'cooking',
    icon: CookingPot,
  },
  advice: {
    i18nKey: 'genres.advice',
    id: 'advice',
    icon: Speech,
  },
  adventure: {
    i18nKey: 'genres.adventure',
    id: 'adventure',
    icon: Binoculars,
  },
  satire: {
    i18nKey: 'genres.satire',
    id: 'satire',
    icon: Clapperboard,
  },
  comingOfAge: {
    i18nKey: 'genres.comingOfAge',
    id: 'comingOfAge',
    icon: Backpack,
  },
}

const filterStore = useFilterStore()

const availableGenres: ComputedRef<CustomSelectorOption[]> = computed(() => {
  const availableGenresOptions = filterStore.state.availableGenres.map((key) => options[key]!)

  return availableGenresOptions
})

const selectedGenres: ComputedRef<CustomSelectorOption[]> = computed(() =>
  filterStore.state.selectedGenres.map((genre: string) => options[genre]!),
)

const onValueUpdated = (values: CustomSelectorOption[]) => {
  filterStore.updateSelectedGenres(values.map((v) => v.id))
}
</script>

<template>
  <CustomSelector
    :options="availableGenres"
    :values="selectedGenres"
    :placeholder="
      t(
        filterStore.state.selectedCategories.length === 0
          ? 'common.selectCategoriesFirst'
          : 'common.selectGenres',
      )
    "
    :onValueUpdated="onValueUpdated"
    :disabled="filterStore.state.selectedCategories.length === 0"
  />
</template>
