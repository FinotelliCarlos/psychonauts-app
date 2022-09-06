import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-berween;

  background: linear-gradient(
    267deg,
    rgba(108, 117, 125, 0.45841112323835786) 44%,
    rgba(131, 139, 145, 1) 84%
  );

  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 0.6rem;

  width: 100%;
  max-width: 21rem;
  height: 10rem;

  gap: 1rem;
`

export const PsychonautImg = styled.img`
  width: 100%;
  max-width: 7rem;
  height: 100%;
  max-height: 12rem;

  border-radius: 0 0.6rem 0.6rem 0;
`

export const ContentBoxInCard = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-between;
  flex-direction: column;

  width: 100%;
  height: 100%;

  padding: 0.7rem 0.4rem;
`

export const DataCard = styled.div`
  width: 100%;
`

export const ButtonSeeMore = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 2.4rem;

  font-size: 1rem;
  font-weight: 300;
  text-decoration: none;
  color: ${props => props.theme.colors.font100};

  border: none;
  border-radius: 0.4rem;

  background: ${props => props.theme.colors.pressable};

  transition: all 0.2s;

  :hover {
    opacity: 0.8;
  }
`
