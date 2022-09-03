import React, { ReactNode } from 'react'
import { DefaultTheme } from 'styled-components'
import { dark, light } from '../Theme'
import { useThemeLocal } from '../utils/useThemeLocal'

type ContextProps = {
  theme: DefaultTheme
  handleChangeTheme: () => void
}

type ProviderProps = {
  children: ReactNode
}

export const ThemeContext = React.createContext({} as ContextProps)

export const ThemeUsageProvider = ({ children }: ProviderProps) => {
  const [theme, setTheme] = useThemeLocal<DefaultTheme>('theme', dark)

  function handleChangeTheme() {
    setTheme(theme.title === 'dark' ? light : dark)
  }

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
