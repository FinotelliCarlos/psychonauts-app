import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background: ${props => props.theme.colors.primary};
`

export const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 768px;
  padding: 1rem 0.5rem;

  @media screen and (max-width: 580px) {
    flex-direction: column;
  }
`

export const ContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 580px) {
    flex-direction: column;
  }
`

export const LogoPsychonauts = styled.img`
  width: 13rem;
`

export const OptionsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 580px) {
    padding-left: 1rem;
    width: 100vw;
    justify-content: flex-start;
  }
`

export const LinkOption = styled(Link)`
  color: ${props => props.theme.colors.font200};
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 300;
  justify-content: center;
  gap: 0.7rem;
  text-decoration: none;

  transition: all 0.2s;

  :hover {
    opacity: 0.7;
  }
`

export const SwitchBox = styled.div`
  @media screen and (max-width: 580px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`
