// stores/dataStore.ts
import { defineStore } from 'pinia'

import type { EpisodesState } from './episodes_state'

const initialState: EpisodesState = {
  status: 'initial' as const,
}

export const useSignInStore = defineStore('signIn', {
  state: () => ({
    state: initialState as EpisodesState,
  }),
  actions: {
    async getNewEpisodes() {
      this.state = { status: 'loading' as const }

      await new Promise((resolve) => setTimeout(resolve, 1000))

      this.state = { status: 'success' as const }
    },
  },
})
