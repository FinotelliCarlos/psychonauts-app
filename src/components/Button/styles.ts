import styled from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 0.4rem 1rem;
  height: 2.3rem;

  border: none;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  gap: 1rem;
  color: ${props => props.theme.colors.font100};

  cursor: pointer;

  transition: all 0.2s;

  :hover {
    opacity: 0.7;
  }
`
