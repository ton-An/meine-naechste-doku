export interface FilterState {
  selectedCategories: string[]
  selectedGenres: string[]
  availableCategories: string[]
  availableGenres: string[]
}

export interface AvailableGenre {
  ids: { category: string; id: string }[]
  key: string
}
