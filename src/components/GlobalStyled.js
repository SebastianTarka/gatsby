import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background-color:#fff;
    color:#282828;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color:#737373;
      border-radius: 10px;
    }
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
export default GlobalStyle;