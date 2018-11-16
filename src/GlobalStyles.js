import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
      padding:0;
      margin:0;
      box-sizing:border-box;
  }

  html{
      font-size:10px;
  }
  body {
    /* background-color:red; */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyle;