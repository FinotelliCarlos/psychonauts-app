import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export function useTheme() {
  return React.useContext(ThemeContext)
}
