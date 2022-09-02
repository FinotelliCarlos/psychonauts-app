import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    
  }

  body{
    font-family: 'Roboto', sans-serif;
    background: ${props => props.theme.colors.background};
  }
`
