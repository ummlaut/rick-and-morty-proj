import axios, { AxiosInstance } from 'axios'

export const api: AxiosInstance = axios.create({
  baseURL: `https://rickandmortyapi.com/api`,
  timeout: 1000,
  headers: {
    accept: 'application/json',
  },
})
