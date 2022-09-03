import styled from 'styled-components'

export const PsychonautsContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 5rem;
`

export const AlertBySearchName = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  font-size: 1.4rem;
  color: ${props => props.theme.colors.alert};
`
