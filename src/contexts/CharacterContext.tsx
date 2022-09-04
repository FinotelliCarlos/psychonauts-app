import React, { ReactNode, useEffect, useState } from 'react'
import { CharacterPsychonautsDTO } from '../DTOs/CharacterPsychonautsDTO'
import { api } from '../services/api'

type ContextProps = {
  characters: CharacterPsychonautsDTO[]
  searchByName: string
  setSearchByName: (value: string) => void
}

type ProviderProps = {
  children: ReactNode
}

export const CharacterContext = React.createContext({} as ContextProps)

export const CharacterProvider = ({ children }: ProviderProps) => {
  const [psychonauts, setPsychonauts] = useState<CharacterPsychonautsDTO[]>([])
  const [searchByName, setSearchByName] = useState('')

  const characters =
    searchByName.length > 0
      ? psychonauts.filter(psychonaut =>
          psychonaut.name.toLowerCase().includes(searchByName)
        )
      : psychonauts

  async function getCharacters() {
    const response = await api.get('/characters')
    setPsychonauts(response.data)
  }

  useEffect(() => {
    getCharacters()
  }, [searchByName])

  return (
    <CharacterContext.Provider
      value={{ characters, searchByName, setSearchByName }}
    >
      {children}
    </CharacterContext.Provider>
  )
}
