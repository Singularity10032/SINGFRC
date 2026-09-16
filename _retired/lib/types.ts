// Shared types for the site

export interface Project {
  id: string
  title: string
  excerpt: string
  coverImage: string
  images: {
    src: string
    alt: string
  }[]
  content: string
  tournamentImages?: {
    src: string
    alt: string
  }[]
}

