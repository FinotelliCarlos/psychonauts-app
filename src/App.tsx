import { ThemeProvider } from 'styled-components'
import { useTheme } from './hooks/useTheme'
import { Global } from './styles/GlobalStyles'
import { RoutesApp } from './routes'

export default function App() {
  const { theme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <RoutesApp />
    </ThemeProvider>
  )
}
