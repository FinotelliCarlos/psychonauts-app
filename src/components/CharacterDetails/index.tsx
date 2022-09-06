import { useState } from 'react'
import { useQuery } from 'react-query'
import {
  GenderIntersex,
  HandFist,
  IdentificationCard,
  TextAlignLeft
} from 'phosphor-react'
import { useParams } from 'react-router-dom'
import { CharacterPsychonautsDTO } from '../../DTOs/CharacterPsychonautsDTO'
import { api } from '../../services/api'
import * as Component from '../../components'
import * as S from './styles'
import { useFavorites } from '../../hooks/useFavorites'

export function CharacterDetails() {
  const { name } = useParams()

  const { handleIncrementFavorite, handleRemoveFavorite, favorites } =
    useFavorites()

  const [singleCharacter, setSingleCharacter] =
    useState<CharacterPsychonautsDTO>({} as CharacterPsychonautsDTO)

  const { isLoading } = useQuery('characters', async () => {
    await api
      .get<CharacterPsychonautsDTO>(`/characters?name=${name}`)
      .then(res => setSingleCharacter(res.data))
  })

  if (isLoading) {
    return (
      <S.ContainerLoading>
        <Component.Loading />
      </S.ContainerLoading>
    )
  }

  return (
    <S.CharacterDetailsContainer>
      {singleCharacter.name ? (
        <>
          <S.HeaderDetails>
            <S.BoxButtons>
              {favorites.includes(singleCharacter) ? (
                <Component.Button
                  type="remove"
                  onClick={() => handleRemoveFavorite(singleCharacter)}
                />
              ) : (
                <Component.Button
                  type="add"
                  onClick={() => handleIncrementFavorite(singleCharacter)}
                />
              )}
            </S.BoxButtons>
          </S.HeaderDetails>

          <S.ContentDetails>
            <S.PsychonautDetails>
              <S.PsychonautImage src={singleCharacter.img} />
              <S.PsychonautInfoBox>
                <Component.InfoText
                  subtitle="Nome:"
                  title={`${singleCharacter.name.replace(
                    /(?:^|\s)\S/g,
                    function (letter) {
                      return letter.toUpperCase()
                    }
                  )}`}
                  icon={IdentificationCard}
                />
                <Component.InfoText
                  subtitle="Gênero:"
                  title={`${singleCharacter.gender === 'male' ? 'Macho' : 'Fêmea'}`}
                  icon={GenderIntersex}
                />
              </S.PsychonautInfoBox>
            </S.PsychonautDetails>

            <S.PsychonautPsiPowers>
              {singleCharacter.psiPowers.map((item, index) => {
                return (
                  <S.PsychonautPsiPowerBox key={index}>
                    <S.PsychonautPsiPowerImage src={item.img} />
                    <Component.InfoText
                      subtitle="Poder:"
                      title={`${item.name}`}
                      icon={HandFist}
                    />
                    <Component.InfoText
                      subtitle="Detalhes do poder:"
                      title={`${item.description}`}
                      icon={TextAlignLeft}
                    />
                  </S.PsychonautPsiPowerBox>
                )
              })}
            </S.PsychonautPsiPowers>
          </S.ContentDetails>
        </>
      ) : (
        <Component.Loading />
      )}
    </S.CharacterDetailsContainer>
  )
}
