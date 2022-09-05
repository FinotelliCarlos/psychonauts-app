import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ThemeUsageProvider } from './contexts/ThemeContext'
import { CharacterProvider } from './contexts/CharacterContext'
import { FavoritesCharactersProvider } from './contexts/FavoritesCharactersContext'
import App from './App'


const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    <FavoritesCharactersProvider>
      <CharacterProvider>
        <ThemeUsageProvider>
          <App />
        </ThemeUsageProvider>
      </CharacterProvider>
    </FavoritesCharactersProvider>
  </QueryClientProvider>
)
