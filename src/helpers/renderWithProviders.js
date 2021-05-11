import React from 'react';
//tests:
import { render } from '@testing-library/react';
//redux:
import { Provider } from 'react-redux';
import store from 'store/store';
//styled components:
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

export const renderWithProviders = (children) => {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}> {children}</ThemeProvider>
    </Provider>
  );
};
