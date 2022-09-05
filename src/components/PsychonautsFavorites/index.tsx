import { CharacterPsychonautsDTO } from '../../DTOs/CharacterPsychonautsDTO'
import { useFavorites } from '../../hooks/useFavorites'
import * as Component from '../../components'
import * as S from './styles'

export function PsychonautsFavorites() {
  const { favorites } = useFavorites()

  return (
    <S.PsychonautsContainer>
        {favorites.length <= 0 ? (
        <Component.Alert title='Não há favoritos adicionados...' />

        ) : (
          <>
            {favorites.map((item: CharacterPsychonautsDTO, index) => {
              return (
                <Component.Character
                  key={index}
                  img={item.img}
                  name={item.name}
                  gender={item.gender}
                  psiPowers={item.psiPowers}
                />
              )
            })}
          </>
        )}
    </S.PsychonautsContainer>
  )
}
