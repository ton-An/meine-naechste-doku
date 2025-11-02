export interface EpisodesInitial {
  status: 'initial'
}

export interface EpisodesLoading {
  status: 'loading'
}

export interface EpisodesSuccess {
  status: 'success'
}

export interface EpisodesFailure {
  status: 'failure'
  error: Error
}

export type EpisodesState = EpisodesInitial | EpisodesLoading | EpisodesSuccess | EpisodesFailure
