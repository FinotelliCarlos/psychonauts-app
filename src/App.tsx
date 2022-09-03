import { ThemeProvider } from 'styled-components'
import { useTheme } from './hooks/useTheme'
import { RoutesApp } from './routes'
import { Global } from './styles/GlobalStyles'

export default function App() {
  const { theme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <RoutesApp />
    </ThemeProvider>
  )
}
