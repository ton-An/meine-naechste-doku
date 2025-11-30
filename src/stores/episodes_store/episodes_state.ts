export interface Episode {
  title: string
  editorialDate: Date
  image: string | null
  duration: number | null
  url: string
}

export interface EpisodesInitial {
  status: 'initial'
}

export interface EpisodesLoading {
  status: 'loading'
}

export interface EpisodesSuccess {
  status: 'success'
  episodes: Episode[]
}

export interface EpisodesFailure {
  status: 'failure'
  error: Error
}

export type EpisodesState = EpisodesInitial | EpisodesLoading | EpisodesSuccess | EpisodesFailure
