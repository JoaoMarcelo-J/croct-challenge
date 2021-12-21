import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      wrapper: string
      background: string
      border: string
      textColor: string
      subscription: string
      backgroundAvatar: string
      button: string
      Error: string
    }
  }
}
