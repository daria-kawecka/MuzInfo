import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRouter } from 'helpers/renderWithRouter';
import AlbumDashboard from 'views/AlbumDashboard';
import { AlbumImage } from 'components/atoms/AlbumImage/AlbumImage';
import SongList from 'components/molecules/SongList/SongList';

describe('Album Info Template', () => {
  it('Renders Album Dashboard', () => {
    renderWithRouter(<AlbumDashboard />);
    screen.getByText('Loading...');
  });
  it('Renders album photo', () => {
    const cover = 'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/fc/aa/aa/fcaaaa4c-60bd-676b-b837-907ce570dd25/source/100x100bb.jpg';
    renderWithRouter(<AlbumImage src={cover} />);
    screen.queryByAltText(`album-1565300094`);
  });
  it('Renders song list with error', async () => {
    const list = [{ collectionName: 'Irenka', artistName: 'sanah', copyright: '℗ 2021 magic records', primaryGenreName: 'pop', trackCount: 20 }];
    renderWithRouter(<SongList data={list} />);
    screen.getByText(`sanah`);
    screen.getByText('[pop]');
    screen.getByText('℗ 2021 magic records');
    await screen.findByText('Sorry, API did not provide this information :(');
  });
  it('Renders song list without an error', async () => {
    const list = [
      {
        collectionName: 'Back in Black',
        artistName: 'AC/DC',
        copyright: '℗ 1980 Leidseplein Presse B.V.',
        primaryGenreName: 'hard rock',
        trackCount: 11,
      },
      { collectionName: 'Back in Black', artistName: 'AC/DC', trackName: 'Hells Bells', trackCount: 10 },
      { collectionName: 'Back in Black', artistName: 'AC/DC', trackName: 'Shoot to Thrill', trackCount: 10 },
      { collectionName: 'Back in Black', artistName: 'AC/DC', trackName: 'What Do You Do for Money Honey', trackCount: 10 },
    ];
    renderWithRouter(<SongList data={list} />);
    screen.getByText(`AC/DC`);
    screen.getByText('[hard rock]');
    screen.getByText('℗ 1980 Leidseplein Presse B.V.');
    await screen.findByText('Hells Bells');
    await screen.findByText('Shoot to Thrill');
    await screen.findByText('What Do You Do for Money Honey');
  });
});
