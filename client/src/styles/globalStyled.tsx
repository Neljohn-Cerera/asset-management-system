import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    font-size: 62.5%;
  }
  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-size: .75em;
    font-family:'Poppins', san-serif;
    text-align: center; 
    width:100vw;
    height:100vh;
  }

  @media only screen and (max-width: 600px) {
    body {
      background: ${(props) => props.theme.colors.background};
      color: ${(props) => props.theme.colors.text};
      font-family:'Poppins', san-serif;

    }
  }
`;
