import styled from 'styled-components'

export const CharacterDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
  height: 100%;
  background: ${props => props.theme.colors.primary};
  border-radius: 0.7rem;

  padding: 1rem;
  margin: 1rem;

  gap: 1rem;

  @media screen and (max-width: 580px) {
    flex-direction: column-reverse;
  }
`

export const HeaderDetails = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const BoxButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 580px) {
    flex-direction: column;
  }
`

export const ContentDetails = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;
`

export const PsychonautImage = styled.img`
  width: 100%;
  max-width: 12rem;
  height: 100%;
  max-height: 15rem;
  border-radius: 0.4rem;
`

export const PsychonautInfoBox = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  padding-left: 1rem;
`

export const PsychonautDetails = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const PsychonautPsiPowers = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  gap: 0.4rem;
`

export const PsychonautPsiPowerBox = styled.div`
  display: flex;
  align-items: left;
  justify-content: flex-start;
  flex-direction: column;

  padding: 1rem;

  border-radius: 0.4rem;

  background: ${props => props.theme.colors.background};
`

export const PsychonautPsiPowerImage = styled.img`
  width: 5.3rem;
`
