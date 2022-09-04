import styled from 'styled-components'

export const InfoTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`

export const TextBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const InfoSubTitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${props => props.theme.colors.font100};
`

export const InfoTitle = styled.span`
  font-size: 0.9rem;
  font-weight: 300;
  color: ${props => props.theme.colors.font100};
`
