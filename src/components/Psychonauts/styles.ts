import styled from 'styled-components'

export const PsychonautsContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`

export const InputSearch = styled.input`
  width: 50%;
  height: 2rem;
  margin-top: 1rem;
  padding: 0.3rem;
  border-radius: 0.3rem;
  border: 2px solid ${props => props.theme.colors.primary};

  ::placeholder {
    color: ${props => props.theme.colors.primary};
  }

  @media screen and (max-width: 520px) {
    width: 80%;
  }
`

export const PsychonautsContentCards = styled.div`
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
