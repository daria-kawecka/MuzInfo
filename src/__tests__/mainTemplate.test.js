import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRouter } from 'helpers/renderWithRouter';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

describe('Main Template', () => {
  it('Renders Main Template with components', () => {
    renderWithRouter(<MainTemplate />);
    screen.getByText('Muz');
    screen.getByText('Info');
    screen.getByPlaceholderText('Search artists or albums');
    screen.getByText('Search');
    screen.getByText('Search something!!!');
  });
});
