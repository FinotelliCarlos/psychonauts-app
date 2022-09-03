import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type Response<Theme> = [Theme, Dispatch<SetStateAction<Theme>>]

export function useThemeLocal<Theme>(
  key: string,
  initialState: Theme
): Response<Theme> {
  const [themeState, setThemeState] = useState(() => {
    const storageValue = localStorage.getItem(key)

    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return initialState
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(themeState))
  }, [key, themeState])

  return [themeState, setThemeState]
}
