import { api } from '@/app/infrastructure/api.service'
import { CharactersResponseType, RequestParams } from './types'

export async function getCharacters(params?: Partial<RequestParams>) {
  return (
    await api.get<CharactersResponseType>('/character', {
      params,
    })
  ).data
}
