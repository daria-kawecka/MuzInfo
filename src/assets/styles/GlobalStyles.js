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
    background: ${({ theme: { color } }) => color.lightGrey};
    overflow-x: hidden;
  }
  a, button {
    font-family: 'Raleway', sans-serif;
  }`;
