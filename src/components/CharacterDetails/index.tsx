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

export function CharacterDetails() {
  const { name } = useParams()

  const [singleCharacter, setSingleCharacter] = useState<CharacterPsychonautsDTO | null>(null)
  const { isLoading, error } = useQuery('psychonautsData', async () => {
    const response = await api.get<CharacterPsychonautsDTO>(`/characters?name=${name}`)
    setSingleCharacter(response.data)
  })
  
  const typeOfGender = singleCharacter?.gender === 'male' ? 'Macho' : 'Fêmea'

  if (isLoading) {
    return <Component.Loading />
  }

  if (error) return <h1>{`An error has occurred: ${error}`}</h1>

  return (
    <S.CharacterDetailsContainer>
      <S.HeaderDetails>
        <S.BoxButtons>
          <Component.Button type="add" />
          <Component.Button type="remove" />
        </S.BoxButtons>
      </S.HeaderDetails>

      <S.ContentDetails>
        <S.PsychonautDetails>
          <S.PsychonautImage src={singleCharacter?.img} />
          <S.PsychonautInfoBox>
            <Component.InfoText
              subtitle="Nome:"
              title={`${singleCharacter?.name}`}
              icon={IdentificationCard}
            />
            <Component.InfoText
              subtitle="Gênero:"
              title={`${typeOfGender}`}
              icon={GenderIntersex}
            />
          </S.PsychonautInfoBox>
        </S.PsychonautDetails>

        <S.PsychonautPsiPowers>
          {singleCharacter?.psiPowers.map((item, index) => {
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
    </S.CharacterDetailsContainer>
  )
}
