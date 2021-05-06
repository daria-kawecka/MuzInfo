import React from 'react';
//redux provider:
import { Provider } from 'react-redux';
import store from 'store/store';
//styled-componets provider:
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
//components:
import AlbumList from 'components/organisms/AlbumList/AlbumList';
import AppBar from 'components/molecules/AppBar/AppBar';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
const Root = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/*<AppBar />*/}
        {/*<SearchBar />*/}
        {/*<AlbumList />*/}
        <MainTemplate />
      </ThemeProvider>
    </Provider>
  );
};

export default Root;
