import React from 'react';
//prop-types
import PropTypes from 'prop-types';
import { AlbumShape } from 'types';
//components:
import { AlbumWrapper } from 'components/molecules/AlbumWrapper/AlbumWrapper';
import { AlbumImage } from 'components/atoms/AlbumImage/AlbumImage';
import { Button } from 'components/atoms/Button/Button';
import { ArtistName, AlbumName } from './AlbumListElement.styles';

const AlbumListElement = ({ data: { artistName, artworkUrl100, collectionName, collectionId } }) => {
  return (
    <AlbumWrapper>
      <AlbumImage src={artworkUrl100} alt={`album-${collectionId}`} />
      <ArtistName>{artistName}</ArtistName>
      <AlbumName>{collectionName}</AlbumName>
      <Button isSmaller>Show more</Button>
    </AlbumWrapper>
  );
};

AlbumListElement.propTypes = {
  data: PropTypes.shape(AlbumShape),
};

export default AlbumListElement;
