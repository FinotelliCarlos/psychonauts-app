import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    -webkit-user-drag: none;
    overflow-x: hidden;
  }

  body{
    font-family: 'Roboto', sans-serif;
    background: ${props => props.theme.colors.background};
  }
`
