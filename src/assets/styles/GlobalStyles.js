import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

//font-family: 'Montserrat', sans-serif;
// font-family: 'Roboto', sans-serif;

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    background: ${({ theme: { color } }) => color.body};
    overflow-x: hidden;
  }
  body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px ${({ theme }) => theme.color.whiteWithOpacity};
    border-radius: 12px;
    background-color: ${({ theme }) => theme.color.white};
  }

  body::-webkit-scrollbar {
    width: 12px;
    background-color: ${({ theme }) => theme.color.white};
  }

  body::-webkit-scrollbar-thumb {
    border-radius: 12px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: ${({ theme }) => theme.color.darkBlue};
  }
  a, button {
    font-family: 'Montserrat', sans-serif;
  }`;
