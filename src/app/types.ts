export interface Activity {
    pagination: Pagination
    data: Daum[]
  }
  
  export interface Pagination {
    limit: number
    offset: number
    count: number
    total: number
  }
  
  export interface Daum {
    author?: string
    title: string
    description: string
    url: string
    source: string
    image?: string
    category: string
    language: string
    country: string
    published_at: string
  }