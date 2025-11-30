export interface FilterState {
  selectedCategories: string[]
  selectedGenres: string[]
  availableCategories: string[]
  availableGenres: string[]
  isModified: boolean
}

export interface SelectedGenre {
  ids: { category: string; id: string }[]
  key: string
}
