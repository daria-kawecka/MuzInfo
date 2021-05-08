import React from 'react';
import { useHistory } from 'react-router-dom';
//prop-types
import PropTypes from 'prop-types';
import { AlbumShape } from 'types';
//components:
import { AlbumWrapper } from 'components/molecules/AlbumWrapper/AlbumWrapper';
import { AlbumImage } from 'components/atoms/AlbumImage/AlbumImage';
import { Button } from 'components/atoms/Button/Button';
import { AlbumName } from 'components/atoms/AlbumName/AlbumName';
import { ArtistName } from 'components/atoms/ArtistName/ArtistName';

const AlbumListElement = ({ data: { artistName, artworkUrl100, collectionName, collectionId } }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/album/${collectionId}`);
  };
  return (
    <AlbumWrapper>
      <AlbumImage src={artworkUrl100} alt={`album-${collectionId}`} />
      <ArtistName>{artistName}</ArtistName>
      <AlbumName>{collectionName}</AlbumName>
      <Button isSmaller onClick={handleClick}>
        Show more
      </Button>
    </AlbumWrapper>
  );
};

AlbumListElement.propTypes = {
  data: PropTypes.shape(AlbumShape),
};

export default AlbumListElement;
