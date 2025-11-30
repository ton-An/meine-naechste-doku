// stores/dataStore.ts
import { defineStore } from 'pinia'

import { type FilterState, type SelectedGenre } from './filterStates'

export const useFilterStore = defineStore('filter', {
  state: () => ({
    state: {
      selectedCategories: [],
      selectedGenres: [],
      availableCategories: categories,
      availableGenres: [],
      isModified: false,
    } as FilterState,
  }),
  actions: {
    updateSelectedCategories(selectedCategories: string[]) {
      const availableGenres: Set<string> = new Set()

      for (const category of selectedCategories) {
        const genres = genresOfCategories[category]!

        for (const genre of genres) {
          availableGenres.add(genre.key)
        }
      }

      this.state.availableGenres = Array.from(availableGenres)
      this.state.selectedCategories = selectedCategories
      this.state.isModified = true
    },
    updateSelectedGenres(selectedGenres: string[]) {
      this.state.selectedGenres = selectedGenres
      this.state.isModified = true
    },
    resetIsModified() {
      this.state.isModified = false
    },
  },
  getters: {
    getSelectedGenres: (state): SelectedGenre[] => {
      const computedSelectedGenres: Record<string, SelectedGenre> = {}

      for (const selectedCategoryId of state.state.selectedCategories) {
        const genresOfCategory = genresOfCategories[selectedCategoryId]!

        for (const selectedGenreKey of state.state.selectedGenres) {
          const genre = genresOfCategory.find((genre) => genre.key === selectedGenreKey)

          if (genre) {
            const genreId = genre.id
            const id = { category: selectedCategoryId, id: genreId }
            if (!computedSelectedGenres[genreId]) {
              computedSelectedGenres[genreId] = {
                ids: [id],
                key: selectedGenreKey,
              }
            } else {
              computedSelectedGenres[genreId].ids.push(id)
            }
          }
        }
      }

      return Object.values(computedSelectedGenres)
    },
  },
})

const categories = ['pub-form-10003', 'pub-form-10009']

const genresOfCategories: Record<string, { id: string; key: string }[]> = {
  'pub-form-10003': [
    {
      id: 'genre-10296',
      key: 'knowledge',
    },
    {
      id: 'genre-10023',
      key: 'society',
    },
    {
      id: 'genre-10022',
      key: 'history',
    },
    {
      id: 'genre-10282',
      key: 'nature',
    },
    {
      id: 'genre-10290',
      key: 'sports',
    },
    {
      id: 'genre-10283',
      key: 'politics',
    },
    {
      id: 'genre-10285',
      key: 'travel',
    },
    {
      id: 'genre-10029',
      key: 'culture',
    },
    {
      id: 'genre-10293',
      key: 'trueCrime',
    },
    {
      id: 'genre-10020',
      key: 'nutrition',
    },
    {
      id: 'genre-10295',
      key: 'economy',
    },
    {
      id: 'genre-10032',
      key: 'music',
    },
    {
      id: 'genre-10291',
      key: 'stars',
    },
    {
      id: 'genre-10024',
      key: 'health',
    },
    {
      id: 'genre-10294',
      key: 'environment',
    },
    {
      id: 'genre-10017',
      key: 'education',
    },
    {
      id: 'genre-10016',
      key: 'architecture',
    },
    {
      id: 'genre-10286',
      key: 'royals',
    },
    {
      id: 'genre-10280',
      key: 'mystery',
    },
    {
      id: 'genre-10019',
      key: 'drama',
    },
    {
      id: 'genre-10088',
      key: 'entertainment',
    },
  ],
  'pub-form-10009': [
    {
      id: 'genre-10296',
      key: 'knowledge',
    },
    {
      id: 'genre-10023',
      key: 'society',
    },
    {
      id: 'genre-10022',
      key: 'history',
    },
    {
      id: 'genre-10282',
      key: 'nature',
    },
    {
      id: 'genre-10290',
      key: 'sports',
    },
    {
      id: 'genre-10283',
      key: 'politics',
    },
    {
      id: 'genre-10285',
      key: 'travel',
    },
    {
      id: 'genre-10029',
      key: 'culture',
    },
    {
      id: 'genre-10293',
      key: 'trueCrime',
    },
    {
      id: 'genre-10020',
      key: 'nutrition',
    },
    {
      id: 'genre-10295',
      key: 'economy',
    },
    {
      id: 'genre-10032',
      key: 'music',
    },
    {
      id: 'genre-10291',
      key: 'stars',
    },
    {
      id: 'genre-10024',
      key: 'health',
    },
    {
      id: 'genre-10294',
      key: 'environment',
    },
    {
      id: 'genre-10017',
      key: 'education',
    },
    {
      id: 'genre-10016',
      key: 'architecture',
    },

    {
      id: 'genre-10088',
      key: 'entertainment',
    },
    {
      id: 'genre-10289',
      key: 'sex',
    },
    {
      id: 'genre-10026',
      key: 'cooking',
    },
    {
      id: 'genre-10284',
      key: 'advice',
    },
    {
      id: 'genre-10094',
      key: 'adventure',
    },
    {
      id: 'genre-10287',
      key: 'satire',
    },
    {
      id: 'genre-10954',
      key: 'comingOfAge',
    },
  ],
}
