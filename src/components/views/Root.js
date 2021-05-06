import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import AppBar from 'components/molecules/AppBar/AppBar';
import SearchBar from 'components/SearchBar';
const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppBar />
      <SearchBar />
    </ThemeProvider>
  );
};

export default Root;
