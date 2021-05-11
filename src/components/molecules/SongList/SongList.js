import React from 'react';
//prop-types:
import PropTypes from 'prop-types';
import { SongShape } from 'types';
//components:
import { AdditionalText, SongName } from './SongList.styles';
import { AlbumName } from 'components/atoms/AlbumName/AlbumName';
import { ArtistName } from 'components/atoms/ArtistName/ArtistName';
import ErrorText from 'components/atoms/ErrorText/ErrorText';

const SongList = ({ data }) => {
  const { collectionName, artistName, copyright, primaryGenreName } = data[0];
  return (
    <>
      <ArtistName>{artistName}</ArtistName>
      <AlbumName>{collectionName}</AlbumName>
      <AdditionalText>[{primaryGenreName}]</AdditionalText>
      {/*  first element in object is always information about collection, but sometimes there is no detailed info
       about songs so we must handle that by show properly error-information */}
      {data.length > 1 ? (
        data.slice(1).map((song, index) => (
          <SongName key={index}>
            <span>{index + 1 + '. '}</span> {song.trackName}
          </SongName>
        ))
      ) : (
        <ErrorText haveSmallMargin text={'Sorry, API did not provide this information :('} />
      )}
      <AdditionalText>{copyright}</AdditionalText>
    </>
  );
};

SongList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(SongShape)),
};

export default SongList;
