import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRouter } from 'helpers/renderWithRouter';
import AlbumDashboard from 'views/AlbumDashboard';

describe('Main Template', () => {
  it('Renders Album Dashboard', () => {
    renderWithRouter(<AlbumDashboard />);
    screen.getByText('Loading...');
  });
});
