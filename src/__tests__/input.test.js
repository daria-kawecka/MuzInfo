import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithProviders } from 'helpers/renderWithProviders';
import SearchBar from 'components/organisms/SearchBar/SearchBar';

describe('SearchBar component', () => {
  it('Renders the component', () => {
    renderWithProviders(<SearchBar />);
    screen.getByPlaceholderText('Search artists or albums');
    screen.getByText('Search');
  });

  it('Properly handles input value change', () => {
    renderWithProviders(<SearchBar />);
    const input = screen.getByPlaceholderText('Search artists or albums');
    const button = screen.getByText('Search');
    expect(button).toBeDisabled();
    fireEvent.change(input, { target: { value: 'coldplay' } });
    expect(input).toHaveValue('coldplay');
    expect(button).not.toBeDisabled();
  });
});
