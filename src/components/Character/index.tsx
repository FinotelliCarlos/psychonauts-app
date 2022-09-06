import {
  DotsThreeOutlineVertical,
  GenderIntersex,
  HandFist,
  IdentificationCard
} from 'phosphor-react'
import { PsiPowersDTO } from '../../DTOs/CharacterPsychonautsDTO'
import * as Component from '../../components'
import * as S from './styles'

type CardProps = {
  img: string
  name: string
  gender: string
  psiPowers: PsiPowersDTO[]
}

export function Character({ img, name, gender, psiPowers }: CardProps) {
  const amountOfPowers = psiPowers.length
  const typeOfGender = gender === 'male' ? 'Macho' : 'Fêmea'

  return (
    <S.CardContainer>
      <S.ContentBoxInCard>
        <S.DataCard>
          <Component.InfoText
            subtitle="Nome:"
            title={`${name.replace(/(?:^|\s)\S/g, function (letter) {
              return letter.toUpperCase()
            })}`}
            icon={IdentificationCard}
          />

          <Component.InfoText
            subtitle="Gênero:"
            title={`${typeOfGender}`}
            icon={GenderIntersex}
          />

          <Component.InfoText
            subtitle="Poderes:"
            title={`${amountOfPowers}`}
            icon={HandFist}
          />
        </S.DataCard>

        <S.ButtonSeeMore to={`${name}`}>
          <DotsThreeOutlineVertical />
          Conhecer melhor
        </S.ButtonSeeMore>
      </S.ContentBoxInCard>
      <S.PsychonautImg src={`${img}`} alt={`${name}`} />
    </S.CardContainer>
  )
}
