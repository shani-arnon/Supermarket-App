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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-image: url("./topography.svg"),
    linear-gradient(110deg, #f93d66, #6d47d9);
    background-size: 340px, auto;
    /* min-height: calc(100vh - 100px); */
    /* margin: 50px; */
    background-attachment: fixed;

  }
  li {
    list-style-type: none;
  }
  li:nth-child(even) {
    background: white
  }
  li:nth-child(odd) {
    background: plum
  }
  li:hover {
    background: gold
  
  }
  h1 {
    padding-left: 2rem;
    margin-bottom: 2rem;
  }

`

export default GlobalStyle;