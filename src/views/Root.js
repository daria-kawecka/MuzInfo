import React from 'react';
//redux provider:
import { Provider } from 'react-redux';
import store from 'store/store';
//styled-componets provider:
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
//components:
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AlbumDashboard from './AlbumDashboard';
const Root = () => {
  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Switch>
            <Route exact path="/">
              <MainTemplate />
            </Route>
            <Route path="/album/:albumID">
              <AlbumDashboard />
            </Route>
            <Redirect to="/" />
          </Switch>
        </ThemeProvider>
      </Provider>
    </Router>
  );
};

export default Root;
