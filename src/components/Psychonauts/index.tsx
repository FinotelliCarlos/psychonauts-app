import { CharacterPsychonautsDTO } from '../../DTOs/CharacterPsychonautsDTO'
import { useCharacter } from '../../hooks/useCharacter'
import * as Component from '../../components'
import * as S from './styles'

export function Psychonauts() {
  const { isLoading, characters, searchByName, setSearchByName } =
    useCharacter()

  if (isLoading) {
    return (
      <S.ContainerLoading>
        <Component.Loading />
      </S.ContainerLoading>
    )
  }

  return (
    <S.PsychonautsContainer>
      <S.InputSearch
        type="search"
        placeholder="Busque o personagem desejado..."
        value={searchByName}
        onChange={e => setSearchByName(e.target.value.toLowerCase())}
      />
      
      {characters!.length <= 0 && (
        <Component.Alert title="Não há personagens com este nome..." />
      )}

      {characters!.length >= 1 && (
        <S.PsychonautsContentCards>
          {characters?.map((item: CharacterPsychonautsDTO, index) => {
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
