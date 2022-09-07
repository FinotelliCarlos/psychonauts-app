import React, { ReactNode } from 'react'
import { DefaultTheme } from 'styled-components'
import { useThemeLocal } from '../utils/useThemeLocal'
import { dark, light } from '../Theme'

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
