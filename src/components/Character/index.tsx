import { DotsThreeOutlineVertical } from 'phosphor-react'
import { PsiPowersDTO } from '../../DTOs/CharacterPsychonautsDTO'
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
  const nameOfPsychonaut = name[0].toUpperCase() + name.substring(1)

  return (
    <S.CardContainer>
      <S.ContentBoxInCard>
        <S.DataCard>

          <S.CardPsychonautInfo>
            Nome:{' '}
            <S.CardPsychonautData>
              {`${nameOfPsychonaut}`}
            </S.CardPsychonautData>
          </S.CardPsychonautInfo>

          <S.CardPsychonautInfo>
          Gênero:{' '}
            <S.CardPsychonautData>
              {`${typeOfGender}`}
            </S.CardPsychonautData>
          </S.CardPsychonautInfo>

          <S.CardPsychonautInfo>
            Total de poderes:{' '}
            <S.CardPsychonautData>
              {`${amountOfPowers}`}
            </S.CardPsychonautData>
          </S.CardPsychonautInfo>

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
