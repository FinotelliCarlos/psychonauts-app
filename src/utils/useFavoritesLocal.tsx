import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type Response<Favorites> = [Favorites, Dispatch<SetStateAction<Favorites>>]

export function useFavoritesLocal<Favorites>(
  key: string,
  initialState: Favorites
): Response<Favorites> {
  const [favoritesState, setFavoritesState] = useState(() => {
    const storageValue = localStorage.getItem(key)

    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return initialState
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(favoritesState))
  }, [key, favoritesState])

  return [favoritesState, setFavoritesState]
}
