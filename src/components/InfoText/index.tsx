import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { IconProps } from 'phosphor-react'
import * as S from './styles'

type InfoTextProps = {
  icon?: React.ElementType<IconProps>
  subtitle?: string
  title?: string
}

export function InfoText({ icon: Icon, subtitle, title }: InfoTextProps) {
  const { colors } = useContext(ThemeContext)

  return (
    <S.InfoTextContainer>
      {Icon && <Icon color={colors.font200} />}
      <S.TextBox>
        <S.InfoSubTitle>{subtitle}</S.InfoSubTitle>
        <S.InfoTitle>{title}</S.InfoTitle>
      </S.TextBox>
    </S.InfoTextContainer>
  )
}
