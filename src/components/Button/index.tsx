import { Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import * as S from './styles'

type ButtonProps = {
  type: 'remove' | 'add'
}

export function Button({ type }: ButtonProps) {
  const { colors } = useContext(ThemeContext)

  return (
    <S.ButtonContainer
      style={{
        background: `${type === 'remove' ? colors.alert : colors.pressable}`
      }}
    >
      {type === 'remove' ? <Trash /> : <Plus />}
      {type === 'remove' ? 'Remover Favorito' : 'Adicionar Favorito'}
    </S.ButtonContainer>
  )
}
