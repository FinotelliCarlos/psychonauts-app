import styled from 'styled-components'

export const Alert = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin-top: 5rem;

  font-size: 1.4rem;
  color: ${props => props.theme.colors.alert};
`
