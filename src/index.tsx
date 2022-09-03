import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeUsageProvider } from './contexts/ThemeContext'
import { QueryClient, QueryClientProvider } from 'react-query'
import { CharacterProvider } from './contexts/CharacterContext'
import { FavoritesCharactersProvider } from './contexts/FavoritesCharactersContext'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <FavoritesCharactersProvider>
    <CharacterProvider>
      <ThemeUsageProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ThemeUsageProvider>
    </CharacterProvider>
  </FavoritesCharactersProvider>
)
