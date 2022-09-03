import { CharacterPsychonautsDTO } from '../../DTOs/CharacterPsychonautsDTO'
import { useCharacter } from '../../hooks/useCharacter'
import * as Component from '../../components'
import * as S from './styles'

export function PsychonautsFavorites() {
  const { characters } = useCharacter()

  return (
    <S.PsychonautsContainer>
      {characters.map((item: CharacterPsychonautsDTO, index) => {
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
    </S.PsychonautsContainer>
  )
}
