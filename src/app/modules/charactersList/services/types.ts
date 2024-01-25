import { Character } from '../types'

export type Status = 'dead' | 'alive' | 'unknown'
export type Gender = 'male' | 'female' | 'genderless' | 'unknown'

export interface RequestParams {
  page: number
  name: string
  status: Status
  species: string
  type: string
  gender: Gender
}

export interface Info {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export interface ResponseType<T> {
  info: Info
  results: T[]
}

export type CharactersResponseType = ResponseType<Character>
