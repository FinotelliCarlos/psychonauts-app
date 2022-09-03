import * as Component from '../../components'
import * as S from './styles'

export function Favorites() {
  return (
    <S.FavoritesContainer>
      <Component.Header />
      <Component.PsychonautsFavorites />
    </S.FavoritesContainer>
  )
}
