import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{

    --background: #f2f5f8;
    --border: #c7cdd3;
    --text-color: #495567;
    --subscription: #677489;
    --background-avatar: #c3cbd5;
    --button:#3d485f;

  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #fff;
  }
`

export default GlobalStyles
