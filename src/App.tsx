import { ThemeProvider } from 'styled-components'
import { ThemeUsageProvider } from './contexts/ThemeContext'
import { useTheme } from './hooks/useTheme'
import { RoutesApp } from './routes'
import { Global } from './styles/GlobalStyles'

export default function App() {
  const { theme } = useTheme()

  return (
    <ThemeUsageProvider>
      <ThemeProvider theme={theme}>
        <Global />
        <RoutesApp />
      </ThemeProvider>
    </ThemeUsageProvider>
  )
}
