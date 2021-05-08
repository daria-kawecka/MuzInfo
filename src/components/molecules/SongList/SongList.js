import React from 'react';
import PropTypes, { string } from 'prop-types';
import { SongShape } from 'types';
import { AlbumName } from 'components/atoms/AlbumName/AlbumName';
import { ArtistName } from 'components/atoms/ArtistName/ArtistName';
import { AdditionalText, SongName } from './SongList.styles';

const SongList = ({ data }) => {
  const { collectionName, artistName, copyright, primaryGenreName } = data[0];
  return (
    <>
      <ArtistName>{artistName}</ArtistName>
      <AlbumName>{collectionName}</AlbumName>
      <AdditionalText>[{primaryGenreName}]</AdditionalText>
      {data.length > 1 ? (
        data.slice(1).map((song, index) => <SongName key={index}>{index + 1 + '. ' + song.trackName}</SongName>)
      ) : (
        <p>sorry problem with Api</p>
      )}
      <AdditionalText>{copyright}</AdditionalText>
    </>
  );
};

SongList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(SongShape)),
};
export default SongList;
