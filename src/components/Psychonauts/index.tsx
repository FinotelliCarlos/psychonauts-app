import { WarningCircle } from 'phosphor-react'
import { CharacterPsychonautsDTO } from '../../DTOs/CharacterPsychonautsDTO'
import { useCharacter } from '../../hooks/useCharacter'
import * as Component from '../../components'
import * as S from './styles'

export function Psychonauts() {
  const { characters, searchByName, setSearchByName } = useCharacter()

  return (
    <S.PsychonautsContainer>
      <S.InputSearch
        type="text"
        placeholder="Busque o personagem desejado..."
        value={searchByName}
        onChange={e => setSearchByName(e.target.value.toLowerCase())}
      />

      {characters.length <= 0 ? (
        <S.AlertBySearchName>

          <WarningCircle /> Não há personagens com este nome...
          
        </S.AlertBySearchName>
      ) : (
        <S.PsychonautsContentCards>
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
        </S.PsychonautsContentCards>
      )}
    </S.PsychonautsContainer>
  )
}
