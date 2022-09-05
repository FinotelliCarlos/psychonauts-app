import React, { ReactNode, useState } from 'react'
import { useQuery } from 'react-query'
import { CharacterPsychonautsDTO } from '../DTOs/CharacterPsychonautsDTO'
import { api } from '../services/api'

type ContextProps = {
  characters: CharacterPsychonautsDTO[]
  searchByName: string
  setSearchByName: (value: string) => void
  isLoading: boolean
}

type ProviderProps = {
  children: ReactNode
}

export const CharacterContext = React.createContext({} as ContextProps)

export const CharacterProvider = ({ children }: ProviderProps) => {
  const [psychonauts, setPsychonauts] = useState<CharacterPsychonautsDTO[]>([])
  const [searchByName, setSearchByName] = useState('')

  const { isLoading } = useQuery('psychonautsData', async () => {
    await api
      .get<CharacterPsychonautsDTO[]>('/characters')
      .then(res => setPsychonauts(res.data))
  })

  const characters =
    searchByName.length > 0
      ? psychonauts.filter(psychonaut =>
          psychonaut.name.toLowerCase().includes(searchByName)
        )
      : psychonauts

  return (
    <CharacterContext.Provider
      value={{ isLoading, characters, searchByName, setSearchByName }}
    >
      {children}
    </CharacterContext.Provider>
  )
}
