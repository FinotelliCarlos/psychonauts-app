import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 768px;
  padding: 1rem 0.5rem;
`

export const ContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const LogoPsychonauts = styled.img`
  width: 13rem;
`

export const OptionsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const LinkOption = styled(Link)`
  color: ${props => props.theme.colors.font200};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  text-decoration: none;

  transition: all 0.2s;

  :hover {
    opacity: 0.7;
  }
`
