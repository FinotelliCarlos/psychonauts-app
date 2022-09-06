import { Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import * as S from './styles'

type ButtonProps = {
  type: 'remove' | 'add'
  onClick: () => void
}

export function Button({ type, onClick }: ButtonProps) {
  const { colors } = useContext(ThemeContext)

  return (
    <S.ButtonContainer
    onClick={onClick}
      style={{
        background: `${type === 'remove' ? colors.alert : colors.pressable}`
      }}
    >
      {type === 'remove' ? <Trash /> : <Plus />}
      {type === 'remove' ? 'Remover Favorito' : 'Adicionar Favorito'}
    </S.ButtonContainer>
  )
}
