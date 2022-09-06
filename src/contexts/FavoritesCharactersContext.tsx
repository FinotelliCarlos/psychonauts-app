import React, { ReactNode } from 'react'
import { CharacterPsychonautsDTO } from '../DTOs/CharacterPsychonautsDTO'
import { useFavoritesLocal } from '../utils/useFavoritesLocal'

type ContextProps = {
  favorites: CharacterPsychonautsDTO[] 
  handleIncrementFavorite: (item: CharacterPsychonautsDTO) => void
  handleRemoveFavorite: (item: CharacterPsychonautsDTO) => void
}

type ProviderProps = {
  children: ReactNode
}

export const FavoritesCharactersContext = React.createContext(
  {} as ContextProps
)

export const FavoritesCharactersProvider = ({ children }: ProviderProps) => {
  const [favorites, setFavorites] = useFavoritesLocal<
    CharacterPsychonautsDTO[]
  >('favorites', [])

  function handleIncrementFavorite(item: CharacterPsychonautsDTO) {
    setFavorites(oldState => [...oldState, item])
    localStorage.setItem('favorites', `${item}`)
  }

  function handleRemoveFavorite(item: CharacterPsychonautsDTO) {
    setFavorites(oldState =>
      oldState.filter(character => character.name !== item.name)
    )
    localStorage.setItem('favorites', `${item}`)
  }

  return (
    <FavoritesCharactersContext.Provider
      value={{ favorites, handleIncrementFavorite, handleRemoveFavorite }}
    >
      {children}
    </FavoritesCharactersContext.Provider>
  )
}
