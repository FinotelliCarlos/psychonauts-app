import { useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { CharacterPsychonautsDTO } from '../../DTOs/CharacterPsychonautsDTO'
import { api } from '../../services/api'
import { useFavorites } from '../../hooks/useFavorites'
import * as Component from '../../components'
import {
  GenderIntersex,
  HandFist,
  IdentificationCard,
  TextAlignLeft
} from 'phosphor-react'
import * as S from './styles'

export function CharacterDetails() {
  const { name } = useParams()

  const { handleIncrementFavorite, handleRemoveFavorite, favorites } =
    useFavorites()

  const [actualCharacter, setActualCharacter] =
    useState<CharacterPsychonautsDTO>({} as CharacterPsychonautsDTO)

  const { isLoading } = useQuery('characters', async () => {
    await api
      .get<CharacterPsychonautsDTO>(`/characters?name=${name}`)
      .then(res => setActualCharacter(res.data))
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
      {actualCharacter.name ? (
        <>
          <S.HeaderDetails>
            <S.BoxButtons>
              {favorites.includes(actualCharacter) ? (
                <Component.Button
                  type="remove"
                  onClick={() => handleRemoveFavorite(actualCharacter)}
                />
              ) : (
                <Component.Button
                  type="add"
                  onClick={() => handleIncrementFavorite(actualCharacter)}
                />
              )}
            </S.BoxButtons>
          </S.HeaderDetails>

          <S.ContentDetails>
            <S.PsychonautDetails>
              <S.PsychonautImage src={actualCharacter.img} />
              <S.PsychonautInfoBox>
                <Component.InfoText
                  subtitle="Nome:"
                  title={`${actualCharacter.name.replace(
                    /(?:^|\s)\S/g,
                    function (letter) {
                      return letter.toUpperCase()
                    }
                  )}`}
                  icon={IdentificationCard}
                />
                <Component.InfoText
                  subtitle="Gênero:"
                  title={`${
                    actualCharacter.gender === 'male' ? 'Macho' : 'Fêmea'
                  }`}
                  icon={GenderIntersex}
                />
              </S.PsychonautInfoBox>
            </S.PsychonautDetails>

            <S.PsychonautPsiPowers>
              {actualCharacter.psiPowers.map((item, index) => {
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
