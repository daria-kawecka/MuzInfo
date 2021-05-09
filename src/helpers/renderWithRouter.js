import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store/store';
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
