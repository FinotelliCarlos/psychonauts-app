import React, { ReactNode } from 'react'
import { CharacterPsychonautsDTO } from '../DTOs/CharacterPsychonautsDTO'
import { useFavoritesLocal } from '../utils/useFavoritesLocal'

type ContextProps = {
  favorites: CharacterPsychonautsDTO[]
  handleIncrementFavorite: () => void
  handleRemoveFavorite: () => void
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

  function handleRemoveFavorite() {
    //
    setFavorites([])
  }

  function handleIncrementFavorite() {
    //
    setFavorites([])
  }

  return (
    <FavoritesCharactersContext.Provider
      value={{ favorites, handleIncrementFavorite, handleRemoveFavorite }}
    >
      {children}
    </FavoritesCharactersContext.Provider>
  )
}
