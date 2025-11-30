type MessageSchema = {
  common: {
    selectCategories: string
    selectGenres: string
  }
  genres: {
    all: string
    knowledge: string
    society: string
    history: string
    nature: string
    sports: string
    politics: string
    travel: string
    culture: string
    trueCrime: string
    nutrition: string
    economy: string
    music: string
    stars: string
    health: string
    environment: string
    education: string
    architecture: string
    royals: string
    mystery: string
    drama: string
    entertainment: string
    sex: string
    cooking: string
    advice: string
    adventure: string
    comingOfAge: string
    satire: string
  }
  category: {
    documentary: string
    report: string
  }
}

export type { MessageSchema }
