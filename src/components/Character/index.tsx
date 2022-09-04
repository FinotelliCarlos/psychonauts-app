import { DotsThreeOutlineVertical, GenderIntersex, HandFist, IdentificationCard } from 'phosphor-react'
import { PsiPowersDTO } from '../../DTOs/CharacterPsychonautsDTO'
import * as S from './styles'
import * as Component from '../../components'

type CardProps = {
  img: string
  name: string
  gender: string
  psiPowers: PsiPowersDTO[]
}

export function Character({ img, name, gender, psiPowers }: CardProps) {
  const amountOfPowers = psiPowers.length
  const typeOfGender = gender === 'male' ? 'Macho' : 'Fêmea'
  const nameOfPsychonaut = name[0].toUpperCase() + name.substring(1)

  return (
    <S.CardContainer>
      <S.ContentBoxInCard>
        <S.DataCard>
          <Component.InfoText subtitle='Nome:' title={`${nameOfPsychonaut}`} icon={IdentificationCard} />

          <Component.InfoText subtitle='Gênero:' title={`${typeOfGender}`} icon={GenderIntersex} />

          <Component.InfoText subtitle='Poderes:' title={`${amountOfPowers}`} icon={HandFist} />

        </S.DataCard>

        <S.ButtonSeeMore to={`characters/${name}`}>
          <DotsThreeOutlineVertical />
          Conhecer melhor
        </S.ButtonSeeMore>
      </S.ContentBoxInCard>

      <S.PsychonautImg src={`${img}`} alt={`${name}`} />
    </S.CardContainer>
  )
}
