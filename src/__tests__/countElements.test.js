import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRouter } from 'helpers/renderWithRouter';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

describe('Count album elements', () => {
  it('Shows album list and count it', async () => {
    renderWithRouter(<MainTemplate />);
    const input = screen.getByPlaceholderText('Search artists or albums');
    const button = screen.getByText('Search');
    fireEvent.change(input, { target: { value: 'Coldplay' } });
    fireEvent.click(button);
    await screen.findAllByText(/coldplay/i);
    let elements = screen.getAllByText(/coldplay/i);
    expect(elements).toHaveLength(11);
  });
  it('Shows 5 more elements on album list', async () => {
    renderWithRouter(<MainTemplate />);
    const input = screen.getByPlaceholderText('Search artists or albums');
    const button = screen.getByText('Search');
    fireEvent.change(input, { target: { value: 'coldplay' } });
    fireEvent.click(button);
    await screen.findByText('Show 5 more');
    const fiveMoreButton = screen.getByText('Show 5 more');
    fireEvent.click(fiveMoreButton);
    let elements = screen.getAllByText(/Coldplay/);
    expect(elements).toHaveLength(15);
  });
});
