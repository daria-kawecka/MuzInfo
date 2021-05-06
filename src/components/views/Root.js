import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>MusInfo</h1>
    </ThemeProvider>
  );
};

export default Root;
