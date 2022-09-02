import { Person, Star } from 'phosphor-react'
import { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { useTheme } from '../../hooks/useTheme'
import * as S from './styles'

export function Header() {
  const { handleChangeTheme } = useTheme()
  const { colors, title } = useContext(ThemeContext)

  return (
    <S.HeaderContainer>
      <S.ContentBox>
        <S.LogoPsychonauts src="psychonauts-logo.png" alt="Psychonauts" />

        <S.OptionsBox>
          <S.LinkOption to='/'>
            <Person />
            Personagens
          </S.LinkOption>
          <S.LinkOption to='/favorites'>
            <Star />
            Favoritos
          </S.LinkOption>
        </S.OptionsBox>
      </S.ContentBox>

      <Switch
        onChange={handleChangeTheme}
        checked={title === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={16}
        width={32}
        handleDiameter={20}
        offColor={colors.font200}
        onColor={colors.font200}
      />
    </S.HeaderContainer>
  )
}
