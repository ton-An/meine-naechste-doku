// stores/dataStore.ts
import { defineStore } from 'pinia'

import type { Episode, EpisodesState } from './episodes_state'

const initialState: EpisodesState = {
  status: 'initial' as const,
}

export const useEpisodesStore = defineStore('episodes', {
  state: () => ({
    state: initialState as EpisodesState,
  }),
  actions: {
    async getNewEpisodes() {
      this.state = { status: 'loading' as const }

      const headers = {
        'api-auth': 'Bearer aa3noh4ohz9eeboo8shiesheec9ciequ9Quah7el',
        Accept: 'application/graphql-response+json,application/json;q=0.9',
        'content-type': 'application/json',
        'zdf-app-id': 'ffw-mt-web-99976d81',
      }

      const response = await fetch('https://api.zdf.de/graphql', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          operationName: 'getMetaCollectionContent',
          query: `
      query getMetaCollectionContent(
        $collectionId: String!
        $episodesPageSize: Int = 96
        $episodesAfter: Cursor
        $filterBy: SeasonsConnectionFilterByInput
        $sortBy: [VideosConnectionSortByInput!]
        $input: MetaCollectionContentInput!
      ) {
        metaCollectionContent(collectionId: $collectionId, input: $input) {
          recoId
          smartCollections {
            ... on DefaultNoSectionsSmartCollection {
              id
              title
              seasons(first: 1, offset: 0, filterBy: $filterBy) {
                ...SeasonWithEpisodes
              }
            }
          }
        }
      }

      fragment MetaCollectionLink on MetaCollection {
        id
        canonical
        title
        transformedValue
        structuralMetadata {
          isChildrenContent
        }
      }

      fragment ContentOwner on ContentOwner {
        id
        details
        title
        metaCollection {
          ...MetaCollectionLink
        }
      }

      fragment ImageSizes on ImageLayout {
        dim1140X120
        dim1140X240
        dim1280X720
        dim1920X1080
        dim384X216
        dim768X432
        imageType
        original
      }

      fragment ImageFragment on ImagePropertyConnection {
        altText
        title
        caption
        layouts {
          ...ImageSizes
        }
      }

      fragment NotClickableStreamingOptions on IStreamingOptions {
        ad
        dgs
        ut
        ks
        ov
        uhd
        fskMetaCollection {
          ...MetaCollectionLink
        }
      }

      fragment VodMediaFragment on VodMedia {
        vodMediaType
        duration
        downloadAllowed
        streamAnchorTags {
          nodes {
            anchorLabel
            anchorOffset
          }
        }
        geoLocation
      }

      fragment CurrentMedia on VideoCurrentMediaConnection {
        nodes {
          ptmdTemplate
          ...VodMediaFragment
        }
      }

      fragment VideoFragment on Video {
        id
        canonical
        title
        newContentStatus
        subtitle
        contentType
        sharingUrl
        editorialDate
        productionYear
        contentOwner {
          ...ContentOwner
        }
        availability {
          fskBlocked
          vod {
            visibleTo
            visibleFrom
            endDate
            fsk
          }
        }
        teaser {
          title
          imageWithoutLogo {
            ...ImageFragment
          }
          description
          sourceVariant
        }
        episodeInfo {
          seasonNumber
          episodeNumber
        }
        structuralMetadata {
          isChildrenContent
        }
        streamingOptions {
          ...NotClickableStreamingOptions
        }
        currentMedia {
          ...CurrentMedia
        }
        smartCollection {
          canonical
          collectionType
        }
        embeddingPossible
      }

      fragment SeasonWithEpisodes on SeasonsConnection {
        nodes {
          id
          title
          number
          countEpisodes
          newContentStatus
          episodes(first: $episodesPageSize, after: $episodesAfter, sortBy: $sortBy) {
            nodes {
              ...VideoFragment
            }
            pageInfo {
              hasNextPage
              endCursor
              startCursor
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    `,
          variables: {
            collectionId: 'pub-form-10003',
            seasonIndex: 0,
            episodesPageSize: 96,
            input: {
              appId: 'zdf-web-99976d81',
              filters: {},
              pagination: {
                first: 96,
              },
              user: {
                abGroup: 'gruppe-b',
                userSegment: 'segment_0',
              },
              tabId: null,
            },
          },
        }),
      })

      const data = await response.json()

      const smartCollections = data['data']['metaCollectionContent']['smartCollections']

      const episodes: Episode[] = []

      for (const smartCollection of smartCollections) {
        if (!('seasons' in smartCollection)) continue
        const seasons = smartCollection['seasons']['nodes']
        const episodesOfSeason = seasons[0]['episodes']['nodes']

        for (const episode of episodesOfSeason) {
          episodes.push({
            title: episode['title'],
            editorialDate: new Date(episode['editorialDate']),
            image: episode['teaser']['imageWithoutLogo']['layouts']['dim768X432'],
            url: episode['sharingUrl'],
          })
        }
      }

      episodes.sort((a, b) => {
        const dateA = new Date(a.editorialDate).getTime()
        const dateB = new Date(b.editorialDate).getTime()

        return dateB - dateA
      })

      this.state = { status: 'success' as const, episodes }
    },
  },
})
