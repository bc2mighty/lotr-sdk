export interface MovieConfiguration {
  clientKey: string
  clientSecret: string
}

export interface MovieIDObject {
  id: string
}

export interface MovieFullResponse {
  docs: MovieResponseData[]
  total: number
  limit: number
  offset: number
  page: number
  pages: number
}

export interface MovieResponseData {
  _id: string
  name: string
  [key: string]: any
}

export interface MovieQuoteFullResponse {
  docs: MovieQuoteData[]
  total: number
  limit: number
  offset: number
  page: number
  pages: number
}

export interface MovieQuoteData {
  _id: string
  dialog: string
  movie: string
  character: string
  [key: string]: any
}
