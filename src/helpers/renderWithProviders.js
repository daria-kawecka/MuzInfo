import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'store/store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

export const renderWithProviders = (children) => {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}> {children}</ThemeProvider>
    </Provider>
  );
};
