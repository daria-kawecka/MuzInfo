import React from 'react';
//tests:
import { render } from '@testing-library/react';
//react-router:
import { HashRouter as Router } from 'react-router-dom';
//redux:
import { Provider } from 'react-redux';
import store from 'store/store';
//styled-components:
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

export const renderWithRouter = (children) => {
  return render(
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}> {children}</ThemeProvider>
      </Provider>
    </Router>
  );
};
