import React from 'react'
import { FavoritesCharactersContext } from '../contexts/FavoritesCharactersContext'

export function useFavorites(){
  return React.useContext(FavoritesCharactersContext)
}