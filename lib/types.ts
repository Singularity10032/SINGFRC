// Shared types for the project

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  featuredImage: string
  additionalImages?: {
    src: string
    alt: string
    caption: string
  }[]
  content: string
}

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

