import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      background: string
      primary: string

      font100: string
      font200: string

      pressable: string
      alert: string
    }
  }
}
