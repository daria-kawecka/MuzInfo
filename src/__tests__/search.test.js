import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRouter } from 'helpers/renderWithRouter';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

describe('Search engine', () => {
  it('Renders Main Template with components', () => {
    renderWithRouter(<MainTemplate />);
    screen.getByPlaceholderText('Search artists or albums');
  });
  it('Shows loading component', async () => {
    renderWithRouter(<MainTemplate />);
    const input = screen.getByPlaceholderText('Search artists or albums');
    const button = screen.getByText('Search');
    fireEvent.change(input, { target: { value: 'coldplay' } });
    fireEvent.click(button);
    await screen.findByText('Loading...');
  });
  it('Search entered phrase', async () => {
    renderWithRouter(<MainTemplate />);
    const input = screen.getByPlaceholderText('Search artists or albums');
    const button = screen.getByText('Search');
    fireEvent.change(input, { target: { value: 'coldplay' } });
    fireEvent.click(button);
    await screen.findByText('Loading...');
    await screen.findByText('Search results for');
    await screen.findByText('coldplay');
  });
  it('Shows album list', async () => {
    renderWithRouter(<MainTemplate />);
    const input = screen.getByPlaceholderText('Search artists or albums');
    const button = screen.getByText('Search');
    fireEvent.change(input, { target: { value: 'coldplay' } });
    fireEvent.click(button);
    await screen.findByText('Mylo Xyloto');
  });
  it('Shows an error', async () => {
    renderWithRouter(<MainTemplate />);
    const input = screen.getByPlaceholderText('Search artists or albums');
    const button = screen.getByText('Search');
    fireEvent.change(input, { target: { value: 'aaaaaaaaaaaaaa' } });
    fireEvent.click(button);
    await screen.findByText('Oops... something went wrong!');
  });
});
